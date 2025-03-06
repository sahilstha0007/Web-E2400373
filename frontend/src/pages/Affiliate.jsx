import React from 'react';

function Affiliate() {
  return (
    <div className="gray-bg">
      <section className="menu-area with-border-btm">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-10 col-md-12 col-lg-12">
              <nav className="navbar my-nav navbar-expand-lg navbar-light bg-light">
                <ul className="mobile-header-buttons">
                  <li><a className="mobile-nav-trigger" href="#mobile-primary-nav">Menu<span></span></a></li>
                  <li>
                    <button type="button" className="btn btn-primary" style={{ marginTop: '-30px' }} data-toggle="collapse" data-target="#demo">
                      <i className="fa fa-search"></i>Search
                    </button>
                  </li>
                </ul>
                <a href="https://mero.school/home" className="navbar-brand">
                  <img src="https://mero.school/uploads/system/logo-dark.png" alt="" height="35" />
                </a>
                <div className="main-nav-wrap">
                  <div className="mobile-overlay"></div>
                  <ul className="mobile-main-nav">
                    <div className="mobile-menu-helper-top"></div>
                    <li className="has-children">
                      <a href="">
                        <i className="fas fa-th d-inline"></i>
                        <span>Courses</span>
                        <span className="has-sub-category">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="category corner-triangle top-left is-hidden">
                        <li className="go-back">
                          <a href="">
                            <i className="fas fa-angle-left"></i>
                            Menu
                          </a>
                        </li>
                        <li className="all-category-devided">
                          <a href="https://mero.school/courses" data-title="All courses" data-total-courses="137" onclick="allCoursesClicked()" data-category-id="0">
                            <span className="icon">
                              <i className="fa fa-align-justify"></i>
                            </span>
                            <span>All courses</span>
                          </a>
                        </li>
                        {/* Add other categories here */}
                      </ul>
                    </li>
                    <div className="mobile-menu-helper-bottom"></div>
                  </ul>
                </div>
                <div className="d-md-none d-lg-block d-xl-block" style={{ width: '100%' }}>
                  <form className="inline-form" action="https://mero.school/search" method="get" onsubmit="search(this, 'course')">
                    <div className="input-group search-box mobile-search">
                      <input type="text" name="query" className="form-control" placeholder="Search for courses" />
                      <div className="input-group-append">
                        <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="d-none d-md-block d-lg-none">
                  <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">
                    <i className="fa fa-search"></i>Search
                  </button>
                </div>
                <div className="d-none d-sm-none d-md-block d-lg-block">
                  <div className="cart-box menu-icon-box" id="cart_items">
                    <div className="icon">
                      <a href="https://mero.school/home/shopping_cart"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                    <div className="dropdown course-list-dropdown corner-triangle top-right">
                      <div className="list-wrapper">
                        <div className="item-list">
                          <ul></ul>
                        </div>
                        <div className="dropdown-footer">
                          <div className="cart-total-price clearfix">
                            <span>Total:</span>
                            <div className="float-right">
                              <span className="current-price">Rs</span>
                            </div>
                          </div>
                          <a href="https://mero.school/home/shopping_cart">Go to cart</a>
                        </div>
                      </div>
                      <div className="empty-box text-center d-none">
                        <p>Your cart is empty.</p>
                        <a href="">Keep Shopping</a>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="signin-box-move-desktop-helper"></span>
                <div className="sign-in-box btn-group">
                  <div className="d-none d-sm-block btn-group"></div>
                </div>
                <div className="sign-in-box btn-group" role="group" aria-label="Basic example">
                  <a href="https://mero.school/plans" className="btn btn-sign-in" onclick="allPlansClicked()" style={{ margin: '0px 5px', border: 'none' }}>All plans</a>
                  <a href="https://mero.school/ncellplans" className="btn btn-sign-in" style={{ margin: '0px 5px', border: 'none' }}>Ncell Plans Faq</a>
                  <a href="https://blog.mero.school/" className="btn btn-sign-in" style={{ margin: '0px 5px', border: 'none' }} target="_blank">Blog</a>
                  <a href="https://mero.school/affiliates" className="btn btn-sign-in" style={{ margin: '0px 5px' }}>Affiliates</a>
                  <a href="https://mero.school/login" className="btn btn-sign-in" style={{ margin: '0px 5px' }}>Log in</a>
                  <a href="https://mero.school/sign_up" className="btn btn-sign-up" style={{ margin: '0px 5px' }}>Sign up</a>
                </div>
              </nav>
            </div>
            <div className="col-2 col-sm-2 d-block d-sm-block d-md-none d-lg-none d-xl-none">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="cart-box menu-icon-box" id="cart_items" style={{ marginRight: '20px' }}>
                  <div className="main-nav-wrap">
                    <div className="mobile-overlay"></div>
                    <ul className="mobile-main-nav">
                      <div className="mobile-menu-helper-top"></div>
                      <li className="has-children">
                        <a href="">
                          <i className="fas fa-th d-inline"></i>
                          <span>Courses</span>
                          <span className="has-sub-category">
                            <i className="fas fa-angle-right"></i>
                          </span>
                        </a>
                        <ul className="category corner-triangle top-left is-hidden">
                          <li className="go-back">
                            <a href="">
                              <i className="fas fa-angle-left"></i>
                              Menu
                            </a>
                          </li>
                          <li className="all-category-devided">
                            <a href="https://mero.school/courses" data-title="All courses" data-total-courses="137" onclick="allCoursesClicked()" data-category-id="0">
                              <span className="icon">
                                <i className="fa fa-align-justify"></i>
                              </span>
                              <span>All courses</span>
                            </a>
                          </li>
                          {/* Add other categories here */}
                        </ul>
                      </li>
                      <div className="mobile-menu-helper-bottom"></div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div id="demo" className="collapse" style={{ width: '100%' }}>
              <form className="inline-form" action="https://mero.school/home/search" method="get" onsubmit="search(this, 'course')">
                <div className="input-group mobile-search">
                  <input type="text" name="query" className="form-control" placeholder="Search for courses" />
                  <div className="input-group-append">
                    <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-block affiliate-block" style={{ marginTop: '140px' }}>
        <div className="container-fluid">
          <div className="hero-wrap">
            <div className="hero-text-wrap">
              <div className="hero-text-block affiliate-text-block">
                <h1>Become a Mero School<br />affiliate</h1>
                <p>Partner with MeroSchool and earn extra income while helping students know about MeroSchool.</p>
                <div className="btn-hero-group">
                  <a href="https://mero.school/sign-up-affiliates" className="btn btn-lg btn-register btn-primary" style={{ borderColor: '#0062cc' }}>Apply Now</a>
                  <a href="https://mero.school/login" className="btn btn-lg btn-getstarted btn-outline-primary" style={{ borderColor: '#ec5252', color: '#fff' }}>Log In</a>
                </div>
              </div>
            </div>
            <div className="hero-image-wrap affiliate-image-wrap">
              <div className="shapes-bg-block">
                <div className="circle-big"></div>
                <div className="circle-small"></div>
              </div>
              <div className="hero-image-block affiliate-image-block">
                <img src="https://mero.school/themes/assets/images/affiliate-sample-2.png" alt="Mero School" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="program-overview how-it-works">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2><span>How it</span> works?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="program-overview-block">
                <div className="image-wrap">
                  <img src="https://mero.school/themes/assets/images/join-us.png" alt="" />
                </div>
                <h6>Join the program</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-overview-block">
                <div className="image-wrap">
                  <img src="https://mero.school/themes/assets/images/share-app.png" alt="" />
                </div>
                <h6>Promote Mero school</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-overview-block">
                <div className="image-wrap">
                  <img src="https://mero.school/themes/assets/images/earn.png" alt="" />
                </div>
                <h6>Earn Commission</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="program-overview become-affiliate">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2><span>Become</span> a Mero School Affiliate</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="program-overview-block">
                <h3>Step-1</h3>
                <p>Click on "Apply Now" and fill up the form to apply for MeroSchool Affiliate</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-overview-block">
                <h3>Step-2</h3>
                <p>We will review your application and notify you within 3 working days</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-overview-block">
                <h3>Step-3</h3>
                <p>Once approved, Start promoting Mero School through a coupon code, and get paid for every purchase made, using the coupon code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="program-overview faq-affiliate">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2><span>Frequently Asked</span> Questions</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-head" id="headingOne">
                    <h2 className="mb-0 text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is Mero School?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <span id="docs-internal-guid-7d4eb614-7fff-c4e7-372f-b66200464082">
                        <p dir="ltr" xss="removed">
                          <span xss="removed">Mero School brings a variety of courses based on the Nepalese Government Syllabus for the following grades:</span>
                        </p>
                        <p></p>
                        <ol xss="removed">
                          <li><span xss="removed">All Subjects of Grade 1-12</span></li>
                          <li><span xss="removed">IOE Engineering Entrance Preparation Course</span></li>
                          <li><span xss="removed">Engineering Courses</span></li>
                          <li><span xss="removed">Adobe Photoshop Course</span></li>
                          <li><span xss="removed">Adobe Illustrator Course</span></li>
                          <li><span xss="removed">Adobe Aftereffects Course</span></li>
                          <li><span xss="removed">Korean Language Courses</span></li>
                          <li><span xss="removed">Japanese Language Courses</span></li>
                          <li><span xss="removed">Basic and Advanced Share Training Courses</span></li>
                          <li><span xss="removed">Business and Entrepreneurship Courses</span></li>
                          <li><span xss="removed">Financial Management Courses</span></li>
                        </ol>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading1">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      What is Mero School Affiliate Program?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
                    <div className="card-body">
                      <span id="docs-internal-guid-b080e830-7fff-2f88-da1f-97c090fbe9d5">
                        <span xss="removed">Mero School Affiliate Program allows you to earn commission </span>
                        <span xss="removed">for customer referrals using your unique affiliate link or coupon in content such as emails, blog posts, tiktok and instagram videos, youtube videos and webinars. Joining the program gives you and your business a simple way to add value to your site and audience while creating new revenue opportunities.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading2">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                      Does it cost anything to become a Mero School Affiliate?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                    <div className="card-body">
                      <span id="docs-internal-guid-083f65e6-7fff-db7c-322b-a37da956b814">
                        <span xss="removed">Nope! Signing up and participating as a Mero School Affiliate is completely free. Plus, there are no minimum sales required to earn commission.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading3">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      Do I need to be a Mero School Customer?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                    <div className="card-body">
                      <span id="docs-internal-guid-5b5f94be-7fff-459b-f043-35b8392d03d6">
                        <span xss="removed">Not necessarily. We would love if you are a customer, but it is not compulsorily required.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading4">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                      What do I need to do to Sign Up?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                    <div className="card-body">
                      <span id="docs-internal-guid-4b87f67e-7fff-ad34-8802-e2fa8cb57430">
                        <span xss="removed">You can simply Apply here and fill up the form. We will then approve your application if it’s a good fit.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading5">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      Who is a Mero School Affiliate?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                    <div className="card-body">
                      Mero School Affiliates are promoting partners of Mero School. Affiliates are required to promote Mero School through their promoting techniques.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading6">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                      How to apply for affiliates?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                    <div className="card-body">
                      You have to apply for the affiliates. Registrations can be done, by clicking on "Affiliates" on the menu bar, and then clicking on "Apply Now". Submit all the required information and wait till your affiliation request is approved.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head" id="heading7">
                    <h2 className="mb-0 collapsed text-left" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                      What are the benefits to affiliates?<i className="fa fa-plus"></i>
                    </h2>
                  </div>
                  <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                    <div className="card-body">
                      Once, your affiliation is accepted, you can start promoting Mero School through your social media platforms or through any physical medium. You can request for coupon code. The coupon code provided will yield a commission for affiliates, which can be converted to actual cash. Thus, affiliation with Mero School will provide you with a passive way of earning.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L0 100 0 0 C40 100 60 100 100 0 L100 100 0 100 Z"></path>
      </svg>
      <footer className="main-footer">
        <div className="footer-block container">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="footer-title"><span>Mero</span>School</h4>
              <p className="text-justify footer-about">
                Mero School is an online learning app that provides online video
                classes that tend to cover every base intended for school, high
                school and bachelor’s level curriculum such as Engineering,
                Management, science. We also provide
                various language classes. We believe all students should have
                access to high quality learning experiences.
              </p>
              <div className="d-flex social-icons">
                <a target="_blank" href="https://mero.school/twitter" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="https://mero.school/youtube" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-youtube"></i>
                </a>
                <a target="_blank" href="https://mero.school/facebook" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a target="_blank" href="https://mero.school/instagram" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://mero.school/linkedin" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://mero.school/viber" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-viber"></i>
                </a>
                <a target="_blank" href="https://mero.school/youtube" className="mr-4 ml-2" style={{ color: '#a53a39' }}>
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2">
              <h4 className="footer-title">Courses</h4>
              <ul className="foot-nav">
                <li>
                  <a target="_blank" href="https://mero.school/courses?category=business-and-entrepreneurship">Business and  Entrepreneurship</a>
                </li>
                <li>
                  <a target="_blank" href="https://mero.school/courses?category=class-1">Class 1</a>
                </li>
                <li>
                  <a target="_blank" href="https://mero.school/courses?category=class-2">Class 2</a>
                </li>
                <li>
                  <a target="_blank" href="https://mero.school/courses?category=class-3">Class 3</a>
                </li>
                <li id="read-more-action" style={{ display: 'block', cursor: 'pointer' }}>
                  <a onClick="toggleEvent()" style={{ textDecoration: 'none' }} className="text-danger">
                    Show more..
                  </a>
                </li>
                <div id="read-more" style={{ display: 'none' }}>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-4">Class 4</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-5">Class 5</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-6">Class 6</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-7">Class 7</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-8">Class 8</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-9">Class 9</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-10">Class 10</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-11">Class 11</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=class-12">Class 12</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=design-and-creative-skills">Design and Creative Skills</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=engineering">Engineering</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=engineering-design-courses">Engineering Design Courses</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=engineering-preparation">Engineering Preparation</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=fluential">Fluential</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=language">Language</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=learn-about-mero-school">Learn about Mero School</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=license-and-loksewa-preparation">License and Loksewa preparation</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mero.school/courses?category=online-share-training">Online Share Training</a>
                  </li>
                  <li style={{ display: 'block', cursor: 'pointer' }}>
                    <a onClick="toggleEvent()" style={{ textDecoration: 'none' }} className="text-danger">
                      Show Less...
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-lg-2">
              <h4 className="footer-title">Company</h4>
              <ul className="foot-nav">
                <li>
                  <a href="https://mero.school/about">About</a>
                </li>
                <li>
                  <a href="https://blog.mero.school/">Blog</a>
                </li>
                <li>
                  <a href="https://mero.school/courses">Courses</a>
                </li>
                <li>
                  <a href="https://mero.school/plans">Plans</a>
                </li>
                <li>
                  <a href="https://mero.school/contact">Contact Us</a>
                </li>
                <li>
                  <a href="https://mero.school/terms_and_condition">Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="https://mero.school/privacy_policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://mero.school/footer_details/copyright/22">Copyright</a>
                </li>
                <li>
                  <a href="https://mero.school/faq">FAQ</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/groups/1842414202626952/?ref=share">Meroschool Community</a>
                </li>
                <li>
                  <a href="https://mero.school/sahiYo-FAQ">Sahiyo FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h4 className="footer-title">Download Mero School App</h4>
              <div style={{ marginTop: '20px' }}>
                <ul className="foot-nav">
                  <li>
                    <a href="https://www.google.com/maps/dir//Mero+School+Tripura+Marg+Kathmandu+44600/@27.6949878,85.310523,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x39eb19ab209e5327:0x160cf3bda1d49a30" target="_blank" rel="noopener">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      4th Floor, Orchid Hotel Building Tripureshwor,
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/dir//Mero+School+Tripura+Marg+Kathmandu+44600/@27.6949878,85.310523,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x39eb19ab209e5327:0x160cf3bda1d49a30" target="_blank" rel="noopener">
                      Kathmandu, Nepal
                    </a>
                  </li>
                  <li>
                    <a href="tel:+977  01-5320071">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      (+977) 01-5320071
                    </a>
                    <a href="tel:+977 9802350600">, +977 9802350600</a>
                  </li>
                  <li>
                    <a href="mailto:meroschoolnepal@gmail.com" target="_blank" rel="noopener">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      meroschoolnepal@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-clock" aria-hidden="true"></i>
                    9:00 AM to 6:00 PM
                  </li>
                  <li>
                    <i className="fas fa-calendar-day"></i>
                    Sunday to Friday
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="https://mero.school/app" className="btn btn-google-play ml-2">
                    <img src="https://mero.school/themes/assets/images/google-play-badge.png" alt="Get it on google play" />
                  </a>
                  <a href="https://mero.school/ios" className="btn btn-google-play ml-2">
                    <img src="https://mero.school/themes/assets/images/download.png" alt="Download on App Store" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <h4 className="footer-title">Payment Partners</h4>
              <ul className="payment-partner-list">
                <li><img src="https://mero.school/themes/assets/images/eSewa-new.png" alt="eSewa" /></li>
                <li><img src="https://mero.school/themes/assets/images/Khalti-new.png" alt="Khalti" /></li>
                <li><img src="https://mero.school/themes/assets/images/ConnectIPS-new.png" alt="ConnectIPS" /></li>
                <li><img src="https://mero.school/themes/assets/images/Fonepay-new.png" alt="Fonepay" /></li>
                <li><img src="https://mero.school/themes/assets/images/IMEPAY-new.png" alt="IMEPAY" /></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copy">
        <div className="container copy-container">
          <div className="row">
            <div className="col-md-6">
              <h6>© 2025. MeroSchool All rights reserved.</h6>
            </div>
            <div className="col-md-6 text-right">
              Driven By:
              <a className="wft-link" href="#">
                <img src="https://mero.school/assets/frontend/default/img/logo.png" alt="Waterflow Technology Pvt. Ltd" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiliate;