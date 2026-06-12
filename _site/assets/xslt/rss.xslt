<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/rss">
	<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html &gt;</xsl:text>
	<html>
	<head>
		<xsl:text disable-output-escaping="yes"><![CDATA[
		<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>RSS Feed (Styled)</title>

    <link rel="stylesheet" type="text/css" href="http://localhost:4000/assets/css/styles_feeling_responsive.css">

  

	<script src="http://localhost:4000/assets/js/modernizr.min.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
	<script>
		WebFont.load({
			google: {
				families: [ 'Inter:400,500,600,700:latin', 'Merriweather:400,700:latin' ]
			}
		});
	</script>

	<noscript>
		<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap' rel='stylesheet' type='text/css'>
	</noscript>


	<!-- Search Engine Optimization -->
	<meta name="description" content="India (GMT +0530)">
	<meta name="google-site-verification" content="Wry44Qo0i_8rljx3C0jkldholGLLxGEqCwAb2-ZseBE">
	
	
	
	
	<link rel="canonical" href="http://localhost:4000/assets/xslt/rss.xslt">


	<!-- Facebook Open Graph -->
	<meta property="og:title" content="RSS Feed (Styled)">
	<meta property="og:description" content="India (GMT +0530)">
	<meta property="og:url" content="http://localhost:4000/assets/xslt/rss.xslt">
	<meta property="og:locale" content="en_EN">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="">
	
	


	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="BagmarAnand">
	<meta name="twitter:creator" content="BagmarAnand">
	<meta name="twitter:title" content="RSS Feed (Styled)">
	<meta name="twitter:description" content="India (GMT +0530)">
	
	

	<link type="text/plain" rel="author" href="http://localhost:4000/humans.txt">

	

	

	<link rel="icon" sizes="32x32" href="http://localhost:4000/assets/img/logo-small.png">

	<link rel="icon" sizes="192x192" href="http://localhost:4000/assets/img/apple-touch-icon-180x180.png">

	<link rel="apple-touch-icon-precomposed" sizes="180x180" href="http://localhost:4000/assets/img/apple-touch-icon-180x180.png">

	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://localhost:4000/assets/img/apple-touch-icon-152x152.png">

	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://localhost:4000/assets/img/apple-touch-icon-144x144.png">

	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://localhost:4000/assets/img/apple-touch-icon-120x120.png">

	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://localhost:4000/assets/img/apple-touch-icon-114x114.png">

	
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://localhost:4000/assets/img/apple-touch-icon-76x76.png">

	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://localhost:4000/assets/img/apple-touch-icon-72x72.png">

	<link rel="apple-touch-icon-precomposed" href="http://localhost:4000/assets/img/apple-touch-icon.png">	

	<meta name="msapplication-TileImage" content="http://localhost:4000/assets/img/apple-touch-icon-144x144.png">

	<meta name="msapplication-TileColor" content="#fabb00">


	

	


		]]></xsl:text>
	</head>
	<body id="top-of-page">
		<xsl:text disable-output-escaping="yes"><![CDATA[
		
<div id="navigation" class="sticky">
  <nav class="top-bar" role="navigation" data-topbar>
    <ul class="title-area">
      <li class="name">
        <h1><a class="nav-logo" href="http://localhost:4000/" title="">
          <img src="http://localhost:4000/assets/img/logo-verysmall.png" alt="">
        </a></h1>
      </li>
       <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
      <li class="toggle-topbar menu-icon"><a href="#"><span>Nav</span></a></li>
    </ul>
    <section class="top-bar-section">

      <ul class="right">
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
            
            
              <li class="divider"></li>
              <li><a  href="http://localhost:4000/profile/">My Profile</a></li>

            
            
          
        

              



          
          
            
            
              <li class="divider"></li>
              <li><a  href="http://localhost:4000/references/">References</a></li>

            
            
          
        

              



          
          
            
            
              <li class="divider"></li>
              <li><a  href="http://localhost:4000/search/">Search</a></li>

            
            
          
        

              



          
          
            
            
              <li class="divider"></li>
              <li><a  href="http://localhost:4000/contact/">Contact</a></li>

            
            
          
        
        
      </ul>

      <ul class="left">
        

              

          
          

            
            
              <li><a  href="http://localhost:4000/"><svg class="nav-home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="vertical-align:middle;margin-right:5px;position:relative;top:-1px;"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>Essence Of Testing</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            

              <li class="has-dropdown">
                <a  href="http://localhost:4000/areas-of-specialization/">Areas of Specialization</a>

                  <ul class="dropdown">
                    

                      

                      <li><a  href="http://localhost:4000/areas-of-specialization/">All Areas of Specialization</a></li>
                    

                      

                      <li><a  href="http://localhost:4000/areas-of-specialization/quality-strategy/">Quality Strategy for AI-Accelerated Teams</a></li>
                    

                      

                      <li><a  href="http://localhost:4000/areas-of-specialization/test-automation/">Test Automation</a></li>
                    

                      

                      <li><a  href="http://localhost:4000/areas-of-specialization/trainings-and-workshops/">Trainings &amp; Workshops</a></li>
                    
                  </ul>

              </li>
              <li class="divider"></li>
            
          
        

              

          
          

            
            
              <li><a  href="http://localhost:4000/oss/">Open Source</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            

              <li class="has-dropdown">
                <a  href="http://localhost:4000/content/">Blogs &amp; Articles</a>

                  <ul class="dropdown">
                    

                      

                      <li><a  href="https://essenceoftesting.blogspot.com/" target="_blank">Essence of Testing Blog</a></li>
                    

                      

                      <li><a  href="https://applitools.com/blog/author/anandbagmar/" target="_blank">Applitools Blog</a></li>
                    

                      

                      <li><a  href="https://www.slideshare.net/abagmar/" target="_blank">Slides</a></li>
                    
                  </ul>

              </li>
              <li class="divider"></li>
            
          
        

              

          
          

            
            

              <li class="has-dropdown">
                <a  href="http://localhost:4000/talks-and-videos/">Talks &amp; Videos</a>

                  <ul class="dropdown">
                    

                      

                      <li><a  href="http://localhost:4000/talks-and-videos/#featured-talks">Featured Talks</a></li>
                    

                      

                      <li><a  href="http://localhost:4000/talks-and-videos/#all-talks">All Talks</a></li>
                    

                      

                      <li><a  href="https://www.youtube.com/channel/UCTBPUHgU5ezu8KdXhF4CAWw" target="_blank">YouTube Channel</a></li>
                    
                  </ul>

              </li>
              <li class="divider"></li>
            
          
        

              

          
          

            
            
              <li><a  href="http://localhost:4000/case-studies/">Case Studies</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          
        

              

          
          
        

              

          
          
        

              

          
          
        
        
      </ul>
    </section>
  </nav>
</div><!-- /#navigation -->

<script>
// Foundation 5 uses touchstart (not click) on mobile to drive its dropdown logic.
// We intercept BOTH touchstart and click in capture phase (runs before Foundation's
// bubble-phase jQuery handlers) and navigate directly to the parent href.
// A 'navigating' flag prevents the touchstart+click double-fire.
(function () {
  var navigating = false;

  function mobileBreakpoint() {
    return window.innerWidth <= 768 || ('ontouchstart' in window);
  }

  function handleNavTap(e) {
    if (!mobileBreakpoint()) return;
    var link = e.target.closest('.has-dropdown > a');
    if (!link) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    if (navigating) return;
    navigating = true;
    window.location.href = link.getAttribute('href');
    setTimeout(function () { navigating = false; }, 1000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('#navigation');
    if (!nav) return;
    nav.addEventListener('touchstart', handleNavTap, true); // capture before Foundation
    nav.addEventListener('click',      handleNavTap, true);
  });
}());
</script>

		

<div id="masthead-no-image-header">
	<div class="row">
		<div class="small-12 columns">
			<a id="logo" href="http://localhost:4000/" title=" – ">
				<img src="http://localhost:4000/assets/img/logo-verysmall.png" alt=" – ">
			</a>
		</div><!-- /.small-12.columns -->
	</div><!-- /.row -->
</div><!-- /#masthead -->








		


<div class="alert-box warning text-center"><p>This <a href="https://en.wikipedia.org/wiki/RSS" target="_blank">RSS feed</a> is meant to be used by <a href="https://en.wikipedia.org/wiki/Template:Aggregators" target="_blank">RSS reader applications and websites</a>.</p>
</div>



		]]></xsl:text>
		<header class="t30 row">
	<p class="subheadline"><xsl:value-of select="channel/description" disable-output-escaping="yes" /></p>
	<h1>
		<xsl:element name="a">
			<xsl:attribute name="href">
				<xsl:value-of select="channel/link" />
			</xsl:attribute>
			<xsl:value-of select="channel/title" disable-output-escaping="yes" />
		</xsl:element>
	</h1>
</header>
<ul class="accordion row" data-accordion="">
	<xsl:for-each select="channel/item">
		<li class="accordion-navigation">
			<xsl:variable name="slug-id">
				<xsl:call-template name="slugify">
					<xsl:with-param name="text" select="guid" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:element name="a">
				<xsl:attribute name="href"><xsl:value-of select="concat('#', $slug-id)"/></xsl:attribute>
				<xsl:value-of select="title"/>
				<br/>
				<small><xsl:value-of select="pubDate"/></small>
			</xsl:element>
			<xsl:element name="div">
				<xsl:attribute name="id"><xsl:value-of select="$slug-id"/></xsl:attribute>
				<xsl:attribute name="class">content</xsl:attribute>
				<h1>
					<xsl:element name="a">
						<xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
						<xsl:value-of select="title"/>
					</xsl:element>
				</h1>
				<xsl:value-of select="description" disable-output-escaping="yes" />
			</xsl:element>
		</li>
	</xsl:for-each>
</ul>

		<xsl:text disable-output-escaping="yes"><![CDATA[
		    <div id="up-to-top" class="row">
      <div class="small-12 columns" style="text-align: right;">
        <a class="iconfont" href="#top-of-page">&#xf108;</a>
      </div><!-- /.small-12.columns -->
    </div><!-- /.row -->


    <footer id="footer-content" class="bg-grau">
      <div id="footer">
        <div class="row">
          <div class="medium-6 large-5 columns">
            <h5 class="shadow-black">Essence Of Testing</h5>

            <p class="shadow-black">
              India (GMT +0530)
              <a href="http://localhost:4000/info/"></a>
            </p>
          </div><!-- /.large-6.columns -->


          <div class="small-6 medium-3 large-3 large-offset-1 columns">
            

              <ul class="no-bullet shadow-black">
              
              </ul>
          </div><!-- /.large-4.columns -->


          <div class="small-6 medium-3 large-3 columns">
            

            <ul class="no-bullet shadow-black">
            
            </ul>
          </div><!-- /.large-3.columns -->
        </div><!-- /.row -->

      </div><!-- /#footer -->


      <div id="subfooter">
        <nav class="row">
          <section id="subfooter-left" class="small-12 medium-6 columns credits">
            
          </section>

          <section id="subfooter-right" class="small-12 medium-6 columns">
            <ul class="inline-list social-icons">
            
              <li><a href="http://github.com/anandbagmar" target="_blank" class="icon-github" title="Code on GitHub"></a></li>
            
              <li><a href="http://twitter.com/BagmarAnand" target="_blank" class="icon-twitter" title="@BagmarAnand on Twitter"></a></li>
            
              <li><a href="https://www.linkedin.com/in/anandbagmar/" target="_blank" class="icon-linkedin" title="Anand Bagmar on LinkedIn"></a></li>
            
              <li><a href="https://www.youtube.com/c/AnandBagmar" target="_blank" class="icon-youtube" title="Videos on YouTube"></a></li>
            
            </ul>
          </section>
        </nav>
      </div><!-- /#subfooter -->
    </footer>

		


<script src="http://localhost:4000/assets/js/javascript.min.js"></script>












		]]></xsl:text>
	</body>
	</html>
</xsl:template>
<xsl:template name="slugify">
	<xsl:param name="text" select="''" />
	<xsl:variable name="dodgyChars" select="' ,.#_-!?*:;=+|&amp;/\\'" />
	<xsl:variable name="replacementChar" select="'-----------------'" />
	<xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
	<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
	<xsl:variable name="lowercased"><xsl:value-of select="translate( $text, $uppercase, $lowercase )" /></xsl:variable>
	<xsl:variable name="escaped"><xsl:value-of select="translate( $lowercased, $dodgyChars, $replacementChar )" /></xsl:variable>
	<xsl:value-of select="$escaped" />
</xsl:template>
</xsl:stylesheet>
