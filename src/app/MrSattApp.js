import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import MrSattLayoutView from './views/MrSattLayoutView';

export default class App extends Marionette.Application{
	initialize() {

		this.application = new Marionette.Application();
	
		this.application.addRegions({
			main: "#mr-satt"
		});

		this.application.getRegion('main')
			.show(this._getInitializedView());

		this.application.start();

		return this;
	};

	_getInitializedView() {
		let bootstrappedData = {
			"photography":[
				{
					images: [
				      {
				        imgUrl: 'static/images/portfolio/wbyc1.jpg'
				      }
				    ]
				}
			],
			"resume":[
				{
				    name: "Mark Ryan Satt",
				    email: "ryansatt@gmail.com",
				    experienceHeader: 'I live for experience',
				    experienceText: 'I love trying new things. I thrive in an environment of meeting and consistently interacting with people. I feel accomplished by seeing other pleased with my work, so I strive for that with each task. I am welcoming and friendly, honest and loyal. I do well with spontaneity and a good challenge. I especially look to work for something or someone whose products, services or mission statement coincides with what I believe and support. I love all forms of art and love creating websites that are visually appealing as well as functional across all platforms.',
				    workHeader: 'Experience',
				    jobs: [
				      {
				        title: 'Best Buy',
				        dates: 'Dec. 2012 - Current',
				        position: 'Web Developer/Designer',
				        description: 'Work on the development team producing various projects for different divisions of the company. My role requires a knowledge and working practice of such technologies such as Freemarker, Dust, Grunt, Sass/Less, Node, Ajax, JSON and a heavy amount of Backbone/Marionette. I get to design and develop at various levels depending on the need of the particular project. I have developed/designed enterprise level websites and applications used by millions of people for various divisions of the company utilizing all of my skills and talents.  I also have been building a style guide, refactoring all css and html markup to be used site/company wide.  I have built several components that are also being used and shared across engineering teams.'
				      },
				      {
				        title: 'Olson',
				        dates: 'June 2012 - October 2012',
				        position: 'Web Developer/Designer',
				        description: 'Worked closely with a team on a website rebuild/redesign for J.R. Watkins. This project required utilizing skills from just about every aspect of web development. We used site core as the CMS platform to make integration with their existing store/product api much smoother. Much of the development I conducted on this project was HTML, CSS, with a heavy amount of JAVASCRIPT/AJAX to tie together all of the custom functionality. Ensuring all markup was semantic and clean was a standard throughout every aspect of the development process.'
				      },
				      {
				        title: 'U4EA Design',
				        dates: 'February 2010 - February 2012',
				        position: 'Web Developer/Designer',
				        description: 'Web Developer/Designer Involved in all aspects of projects for clients ranging from graphic design to interactive components, website design, and implementation of designs onto the web. I was also in charge of day-to-day maintenance, projections, budgeting and managing departments personnel and resources. Specialized in building sites with Wordpress as a CMS. I worked closely with clients and partners to create websites that were visually appealing as well as functional.'
				      },
				      {
				        title: 'Koechel Peterson',
				        dates: 'April 2008 - January 2010',
				        position: 'Web Developer/Designer',
				        description: 'Was the lead developer and in charge of all aspects of the develoment department. From conception of ideas and designing to implementation of coding and taking care of server issues/maintenance. Also kept e-commerce sites up to date along with forums, blogs, designs, keeping stats on analytics, designing/coding emails, customer relations and much more.'
				      },
				      {
				        title: 'Brain Magnet',
				        dates: 'March 2007 - April 2008',
				        position: 'Web Developer/Designer',
				        description: 'Interned here, then got hired. Was in charge of interactive department. Main duties consisted of a project getting interactive maps for the entire state of Minnestoa online. Seemingly dealt with every type of file, code, or edge case imaginable. Designed and developed hundreds of interactive banner ads. Updated/created web sites, blogs, and CMS systems. Did a lot more than my job description would describe.'
				      }
				    ],
				    skills: [
				    	{
					        "skill": "Html"
					    },
					    {
					        "skill": "Css"
					    },
					    {
					        "skill": "Javascript"
					    },
					    {
					        "skill": "Backbone"
					    },
					    {
					        "skill": "Grunt"
					    },
					    {
					        "skill": "Ember"
					    },
					    {
					        "skill": "Node.js"
					    },
					    {
					        "skill": "Ajax"
					    },
					    {
					        "skill": "Testing"
					    },
					    {
					        "skill": "Seo"
					    },
					    {
					        "skill": "Wordpress"
					    },
					    {
					        "skill": "Photoshop"
					    },
					    {
					        "skill": "Illustrator"
					    },
					    {
					        "skill": "Ui+Ux"
					    },
					    {
					        "skill": "MySql"
					    },
					    {
					        "skill": "React"
					    },
					    {
					        "skill": "Tdd"
					    },
					    {
					        "skill": "Less+Sass"
					    },
					    {
					        "skill": "Responsive"
					    },
					    {
					        "skill": "Single"
					    },
					    {
					        "skill": "Page"
					    },
					    {
					        "skill": "Applications"
					    },
					    {
					        "skill": "Architecting"
					    },
					    {
					        "skill": "Lead Development"
					    },
					    {
					        "skill": "Git"
					    },
					    {
					        "skill": "Ruby on Rails"
					    },
					    {
					        "skill": "Webpack"
					    },
					    {
					        "skill": "Templating"
					    },
					    {
					        "skill": "Api’s"
					    },
					    {
					        "skill": "Scaffolding"
					    },
					    {
					        "skill": "Agile"
					    }
				    ]
				}
			],
			"portfolio":[
				{
				    title: "Dairy Queen",
				    description: "Dairy Queen wanted an application that allowed a user/customer order a customized cake online.  We decided to leverage Angular.js early in its infancy to help with data binding and manage view states.  Worked closely with DQ's development team to ensure data flow and structure was consistent and delivered smoothly.",
				    skills: [
				      "Html",
				      "Css",
				      "Javascript",
				      "Angular",
				      "Google Maps Api"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/dq-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/dq-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/dq-3.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/dq-4.jpg'
				      }
				    ]
				  },
				  {
				    title: "Windsong Farms",
				    description: "There isn't much more in life I love than golf and when I got the opportunity to create a website for Windsong Farm, it was a perfect match.  I have conducted all the design, development, photography, architecturing, etc.  Leveraging Keystone.js, the site displays the club in a fitting manner while allowing members to manage their accounts, pay bills, make reservations, and more while displaying the club's most important assest, the course.",
				    skills:[
				      "Keystone.js",
				      "Node.js",
				      "Html",
				      "Css",
				      "Design",
				      "Photography"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/ws-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/ws-3.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/ws-4.jpg'
				      }
				    ]
				  },
				  {
				    title: "Pacific Sales",
				    description: "Pacific Sales was in need of a complete overhaul of their web presence, they didn't even have products on their previous site, and needed a fully responsive solution to assert themselves in the appliance market.  We built them a state of the art website utilizing Backbone, Node, Bing Maps and other modern technologies to deliver a site that helps engage a users interest.  I worked closely with Backend teams and various groups to get all the data streamlined and sorted for easy editing and maintainability.  I also took charge of leveraging subtle css transitions/animations to help keep a users attention and bring the site alive.",
				    skills: [
				      "Node.js",
				      "Html",
				      "Css",
				      "Javascript",
				      "Backbone.js",
				      "Custom Bing Maps Implementation",
				      "Responsive Design & Development"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/pac-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/pac-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/pac-3.jpg'
				      }
				    ]
				  },
				  {
				    title: "Rush River",
				    description: "Rush River needed a site that matched their top-notch design to help bring even more business to the exploding brewing company.  They wanted a easy-to-use and maintain Wordpress site that allowed them to connect with customers and even sell some of their swag online.  The result was a stylish and functional website that makes people thirsty.",
				    skills:[
				      "Custom Wordpress Implementation",
				      "Html",
				      "Css",
				      "Javascript"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/rush-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/rush-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/rush-3.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/rush-4.jpg'
				      }
				    ]
				  },
				  {
				    title: "Geek Squad In-Home Scheduling",
				    description: "Geek Squad needed a solution to help cust back on call-center costs and an easier way for customers to schedule appointments for in-home services (deliveries, repairs, etc).  I helped create a single-page application that connects with the various vendors and data avenues to give users real-time scheduling capabilities.  I had to create a custom calendar module that could react to a users location and requests while maintaining information across views and events to allow for maximum flexibility when scheduling an appointment.",
				    skills: [
				      "Backbone.js",
				      "Node.js",
				      "Html",
				      "Css",
				      "Custom built calendar"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/bby-repair-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bby-repair-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bby-repair-3.jpg'
				      }
				    ]
				  },
				  {
				    title: "Geek Squad Installation Scheduling",
				    description: "Similar to in-hom scheduling, Geek Squad needed a solution to allow customers to schedule, re-schedule and place installation services and orders.  Making use of my modularized calendar widget from the previous application, it was easy to bring in and re-purpose the calendar to this projects various and many needs.  I had a part in the design and layout and made sure to make use of all the latest coding practices to make the experience as seamless as possible.",
				    skills: [
				      "Backbone.js",
				      "Node.js",
				      "Html",
				      "Css",
				      "Custom built calendar"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/bby-install-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bby-install-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bby-install-3.jpg'
				      }
				    ]
				  },
				  {
				    title: "Boise State University",
				    description: "Boise State needed a custom wordpress theme that could expand across their many departments so they could each have their own fully functioning Wordpress site.  Creating custom widgets and plugins as well as strategizing was essential in delivering a website that met all the needs.",
				    skills:[
				      "Custom Wordpress Implementation",
				      "Html",
				      "Css",
				      "Javascript"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/boise-1.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/boise-2.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/boise-3.png'
				      }
				    ]
				  },
				  {
				    title: "JR Watkins",
				    description: "JR Watkins was needing a revamped web experience to engage customers and help present their products and company in a proper light.  The result was a beautifully designed and functioning website that allowed users to view, buy and review their products.  Working with the Backend team was crucial as a large amount of data interaction and transfer was integrated all over the site.  Writing a custom Google Maps implementation, custom reviews widget, shopping cart and customer interface was just some of the customization put into this Sitecore site of the year.",
				    skills: [
				      "Custom Sitecore Implementation",
				      "Html",
				      "Css",
				      "Javascript",
				      "Custom Google Maps Implementation"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/jr-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/jr-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/jr-3.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/jr-4.jpg'
				      }
				    ]
				  },
				  {
				    title: "Ideas That Kick",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/kick-1.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/kick-2.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/kick-3.png'
				      }
				    ]
				  },
				  {
				    title: "Kozlaks Royal Oak",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/kozlaks-1.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/kozlaks-2.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/kozlaks-3.png'
				      }
				    ]
				  },
				  {
				    title: "Best Buy For Business",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/bbfb-1.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bbfb-2.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/bbfb-3.png'
				      }
				    ]
				  },
				  {
				    title: "Geek Squad Express Replacement",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/er-1.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/er-2.png'
				      },
				      {
				        imgUrl: 'static/images/portfolio/er-3.png'
				      }
				    ]
				  },
				  {
				    title: "GeekSquad Renewals",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/renewals-1.png'
				      }
				    ]
				  },
				  {
				    title: "Best Buy Digital Library",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/digital-library-1.png'
				      }
				    ]
				  },
				  {
				    title: "Tarmac",
				    description: "Tarmac needed a site that matched their modern personality and cutting edge development.  I fully designed, created and developed a custom website that leveraged animations and modern design to help peak a visitors interest.  The result was a very fun and modern responsive webpage.  I also developed a custom Backend Rails Applicaiton for the Tarmac team that allowed for project management, project status, developer/client communication and much more.",
				    skills: [
				      "Html",
				      "Css",
				      "Css Animations",
				      "Rails",
				      "Javascript",
				      "Design"
				    ],
				    images: [
				      {
				        imgUrl: 'static/images/portfolio/tarmac-1.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/tarmac-2.jpg'
				      },
				      {
				        imgUrl: 'static/images/portfolio/tarmac-3.jpg'
				      }
				    ]
				 }
			]
		}

		return new MrSattLayoutView({
			el: '.mr-satt',
			data: bootstrappedData
		});
	}
};