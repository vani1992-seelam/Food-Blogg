Step1:Planning a React App

1.Component Tree /Component Structure - As per Requirement we should know that , what must be an self component and what not.
2. Application State (Data) - Keep Track of data ( what we need to consume and what we need to show) (Ingrediants&&payment method).
3. Components vs Containers - class/Functional components with statefull or state properties.


Step2: Planning- Layout and Component Tree

Pending: 150(Paint)

1. Layout (copy)
2.Structure (Main page and child components)

App> Layout > ToolBar
            > SideBar
            > backdrop
            > {props.children}(Routing for all Pages) > diffrent pages(statefull)





Creating Structure/Layout for the project


1. Create diff folders as needed 
2. Under the function components we can't use multiple Json JSX elements . For that either we have to use
   >> wrap elements with Array and give Key to each item.
  [ <div key=" xyzzzz">Toolbar, Sidebar, Backdrop</div>
        <main>{props.children}</main>);
  ]
   >> Create a Higher order components by creating extra Auxilatory components(Aux). So that we can wrap div with <Aux> component.
  <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>{props.children}</main>
    </Aux>