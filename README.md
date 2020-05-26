## React Js MobX SPA Web App with Login, Starter Template Framework Design
 Ideal starter for your web app that requires sign in, login and authentication. 
 Another one coming up next for your SPA web app that is just merely a static site/app. 

#### Note: All batteries included like Angular (global state manager [MobX] hooked to localStorage for seamless persistence of your stores, and sound routing and navigation logic built on top of [mobx-state-router])

> Getting up and running:
>
* `$ git clone <this repo>` 
* `$ yarn install | npm install` 
* `$ yarn start | npm run start` 
* A browser window should automatically open to the application at http://localhost:3010
> 

And you are good to go!

## And now, the system breakdown in details

### Let's start here!

Hey there. So you have an SPA web app that you want to build with React Js.
And you need to come up with an app-wide, system design setup. That is, system breakdown to  
individual bits and pieces like, routing and navigation, controllers, app's global  state 
management, and sharing components' state information;  configuring security access for your 
pages, as to which are publicly accessible, and which  a user must be logged in and authenticated 
to access; and even different  types of access based on roles.
Well, this self-guiding design employed here in this,  "React Js SPA Web App with Login Starter 
Template Framework Design"  has got you covered.

### The design philosophy!
#### App working data and main components state/data (the stores):
All app working data, and main components state is managed in your "stores."
So, you have a main store "app" which, specifically, is for managing running app data.
Then you have other stores based on, and for your app's main components, in this showcase,  
that would be the components [page1, page2, page3, page4]. Those stores essential hold the 
component's  state globally, such that their information can be shared across each other. 
You will notice that when  working with these components in relation to the stores, especially, 
in "controller" function calls, I refer  to the components as "activity". This is inspired upon 
me from my android days, where  in android development design, you have an "activity" Java class 
which holds all the stuff  for its XML UI, to data for that UI, and rules for sharing it's data 
and information with other  "activities."

The stores mini-ecosystem within the the design is setup in its directory across multiple files  
that are very much self explanatory to their roles. As you use this design system, just 
go with  the flow there to extend (especially for "app" store) and add your own new stores for  
your app's components; and if you feel you can and want to improve on their design, of course, sure you can.

The stores are persisted to localStorage so that you don't lose your working data across page reloads.

#### Controllers functions:
The first Javascript framework I worked with was AngularJs. That very first iteration of Angular.
And that's where I really got introduced to the MVC design pattern, hands on, after a partial 
introduction in  Java's Swing. React is a view library and not a full blown framework like Angular. 
But I am sure like most  engineers, we like the practice of splitting things apart and dealing with 
them in pieces. So, let's  have React components' classes or functions only deal with mostly the 
UI rendering, while any and most  of functions that, that component/activity relies on be lifted 
out to a "controller" file for that  activity, and you can just import and use as you wish.
Just like the stores, the "controllers" are wrapped in their own directory for clean architecture  
encapsulation of bits and pieces.

#### Routing and navigation:
Again, React being a view library, well, no router and navigation pattern inherently included, and  
so it's up to the developer to pick and choose what they fancy. So I have picked a router that I  
found fitting from experience with it, for this template framework design around React. Details on  
this choice of router, and other parts of the system, in the next example page.
And so with the selected router, I built around it a navigation and routing logic that so far,  
so good, I can smile about, and I find serving the whole system design, pretty well.
Routing and navigation logic setup is wrapped up in its own "routing-and-navigation"  directory. 
Follow the pattern therein, to add your own new routes and navigation functionality  for your app.

So the above are the major parts of the system that needed a special mention. The rest are rather  
self explanatory from glance, container directory naming, and directory included "ABOUT.md"
Next up, what's in the box! What are bits and pieces that glue together, and power up this SPA 
starter  template framework design???

### All batteries included, and all the whistles and bells!
So, what's under the hood!!
#### State/Stores Manager: 
The extremely, philosophically, and amazingly powerful [MobX](https://mobx-state-tree.js.org/intro/philosophy).
You can read more about [Michel Weststrate's](https://twitter.com/mweststrate) powerful MobX state manager creation.

As mentioned earlier, currently, the system design persists your running app's state/stores to, localStorage, 
Web Storage, but you can upgrade to IndexedDb if you are dealing with heavy data. I have already  implemented 
IndexedDb in some parts of the system, so you have a point of reference to pick up from.

#### Router for routing and navigation:
Keeping with the beloved, extremely, philosophically, and amazingly powerful MobX, my routing and navigation logic and design, 
is wrapped around [MobX State Router](https://nareshbhatia.github.io/mobx-state-router/docs/guides-getting-started) created 
by [Naresh Bhatia](https://twitter.com/NareshJBhatia).

#### And there you have it folks:
So, Come up with frontend application design architecture from experience, over the years; 
get those components above, and put them together with React js; and you have an all batteries 
included,  shiny whistles and bells, React Js SPA web app template framework to start you off to 
build, both your web app  that facilitates a secure app with sign up, login and authentication; 
or even a static web app like  you would get with Gatsby Js or Next Js, the only difference being 
that those are Server Side Rendered  (SSR) while this is an all frontend side, single package packaged SPA.
This current design mode is for an SPA with built in Login and Sign Up facilities for a  secured web app. 
Next up after this, one for a completely unsecured web app from the start, for your  unsecured web app, 
static site starter; it will still have the facilities for setting up login and  sign up like in this design, 
so you can convert it for that use case if you wish.  And you can also, of course, tweak and turn off the 
login and sign up, facilities in this web app template framework if you wish, and just use it as an, 
unsecured  SPA web app, static site generator.

And now!

### About me, and S/Os and credits
#### About me:
Hi. I'm Kevin Barasa. A full stack software engineer currently based in my hometown and  country, Nairobi, Kenya. 
At this time of this build and writing (May, 2020), I have 3 and a half years of professional (hired) software 
engineering experience, and 5 to 6 yrs of  total software engineering experience, both professionally and personally.
I'm especially, particularly well versed with Java, SQL (MySQL/OracleSQL), Javascript and web technologies, 
Mobile app development with React Native and Android,  and I have, and can as well work with other languages 
and technologies like Python, C++, C#, Dart, NoSQL Dbs, and AWS cloud.

#### Let's connect:
LinkedIn: [Kevin Barasa (kaybarax)](https://www.linkedin.com/in/kaybarax/)

Github: [Kaybarax](https://github.com/Kaybarax)

Twitter: [Kaybarax](https://twitter.com/Kaybarax)

#### Shout out's and credits:
[Michel Weststrate](https://twitter.com/mweststrate) - Creator of [MobX](https://mobx-state-tree.js.org/intro/philosophy). 
The global state manager powering the app. 

[Naresh Bhatia](https://twitter.com/NareshJBhatia) - Author of [MobX State Router](https://nareshbhatia.github.io/mobx-state-router/docs/guides-getting-started). 
The selected router for the app. 

[Andy Haskell](https://twitter.com/AndyHaskell2013) - Tutorial guide on implementing IndexedDb. 
Thanks a lot dude for your tutorial I came across on [@Medium and Dev.to](https://dev.to/andyhaskell/build-a-basic-web-app-with-indexeddb-38ef). 


#### !! Have fun bringing your web app to life! Cheers !!