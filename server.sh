#!/usr/bin/env bash
# Usage: ./server.sh [start|stop|restart|status]
set -euo pipefail

PIDFILE=".jekyll-server.pid"
PORT=4000

start() {
  if [[ -f "$PIDFILE" ]] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "Server already running (PID $(cat "$PIDFILE")) at http://localhost:$PORT"
    return
  fi
  echo "Starting Jekyll server on http://localhost:$PORT …"
  bundle exec jekyll serve --port "$PORT" --livereload &
  echo $! > "$PIDFILE"
  echo "Started (PID $!). Press Ctrl-C or run './server.sh stop' to stop."
}

stop() {
  local stopped=0

  # Kill via PID file if present
  if [[ -f "$PIDFILE" ]]; then
    PID=$(cat "$PIDFILE")
    if kill -0 "$PID" 2>/dev/null; then
      kill "$PID" && echo "Stopped server (PID $PID)."
      stopped=1
    fi
    rm -f "$PIDFILE"
  fi

  # Also kill any jekyll process on the port (handles servers started outside this script)
  PORT_PIDS=$(lsof -ti tcp:"$PORT" 2>/dev/null || true)
  if [[ -n "$PORT_PIDS" ]]; then
    echo "$PORT_PIDS" | xargs kill 2>/dev/null && echo "Stopped process(es) on port $PORT ($PORT_PIDS)."
    stopped=1
  fi

  [[ $stopped -eq 0 ]] && echo "No server found running on port $PORT."
}

status() {
  if [[ -f "$PIDFILE" ]] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "Running (PID $(cat "$PIDFILE")) at http://localhost:$PORT"
  else
    echo "Not running."
  fi
}

case "${1:-start}" in
  start)   start ;;
  stop)    stop ;;
  restart) stop; sleep 1; start ;;
  status)  status ;;
  *)
    echo "Usage: $0 [start|stop|restart|status]"
    exit 1
    ;;
esac
