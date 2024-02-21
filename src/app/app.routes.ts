import { Routes } from '@angular/router';
import { AdvanceTopicComponent } from './components/advance-topic/advance-topic.component';
import { BasicConceptComponent } from './components/basic-concept/basic-concept.component';
import { ChildToParentComponent } from './components/basic-concept/child-to-parent/child-to-parent.component';
import { DataBindingComponent } from './components/basic-concept/data-binding/data-binding.component';
import { EventBindingComponent } from './components/basic-concept/data-binding/event-binding/event-binding.component';
import { FirstComponent } from './components/basic-concept/first/first.component';
import { HostListenerComponent } from './components/basic-concept/host-listener/host-listener.component';
import { SelectorComponent } from './components/basic-concept/selector/selector.component';
import { PreWhiteSpaComponent } from './components/basic-concept/pre-white-spa/pre-white-spa.component';
import { ViewProviderComponent } from './components/basic-concept/view-provider/view-provider.component';
import { EncapsulationComponent } from './components/basic-concept/encapsulation/encapsulation.component';
import { ParentToChildComponent } from './components/basic-concept/parent-to-child/parent-to-child.component';
import { DirectiveComponent } from './components/basic-concept/directive/directive.component';
import { TwoWayDataBindingComponent } from './components/basic-concept/two-way-data-binding/two-way-data-binding.component';
import { PipesComponent } from './components/basic-concept/pipes/pipes.component';
import { ServiceComponent } from './components/advance-topic/service/service.component';
import { RoutingComponent } from './components/advance-topic/routing/routing.component';
import { HooksComponent } from './components/advance-topic/hooks/hooks.component';



export const routes: Routes = [
    {
        path: "", // Use to define the path if empty then it means main/home url
        component:FirstComponent,
        title:"Learn Angular",
        // redirectTo:'basic-concept',
        // pathMatch:'full'
    },
    {
        path: "basic-concept",
        redirectTo: "basic-concept/host-listener", // Redirect to host-listener by default
        pathMatch: "full",
    },
    {
        path: "basic-concept", // Use to define the path if empty then it means main/home url
        component:BasicConceptComponent, //define the which component is load on the defined path
        title:"Angular Basic Concept", //title property is used to update the title of the webpage in the brower 
        children: [
            {
                path: "host-listener", // Use to define the path if empty then it means main/home url
                component:HostListenerComponent, //define the which component is load on the defined path
                title:"Host Listener" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "selector", // Use to define the path if empty then it means main/home url
                component:SelectorComponent, //define the which component is load on the defined path
                title:"Angular Selector" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "pre-white-spa", // Use to define the path if empty then it means main/home url
                component:PreWhiteSpaComponent, //define the which component is load on the defined path
                title:"Preserve White Space" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "view-provider", // Use to define the path if empty then it means main/home url
                component:ViewProviderComponent, //define the which component is load on the defined path
                title:"View Provider" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "encapsulation", // Use to define the path if empty then it means main/home url
                component:EncapsulationComponent, //define the which component is load on the defined path
                title:"Encapsilation" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "parent-to-child", // Use to define the path if empty then it means main/home url
                component:ParentToChildComponent, //define the which component is load on the defined path
                title:"Parent To Child" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "child-to-parent", // Use to define the path if empty then it means main/home url
                component:ChildToParentComponent, //define the which component is load on the defined path
                title:"Send Data Child to Parent" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "directive", // Use to define the path if empty then it means main/home url
                component:DirectiveComponent, //define the which component is load on the defined path
                title:"Directive" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "data-binding", // Use to define the path if empty then it means main/home url
                component:DataBindingComponent, //define the which component is load on the defined path
                title:"Data Binding" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "two-way-data-binding", // Use to define the path if empty then it means main/home url
                component:TwoWayDataBindingComponent, //define the which component is load on the defined path
                title:"Two Way Data Binding" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "pipes", // Use to define the path if empty then it means main/home url
                component:PipesComponent, //define the which component is load on the defined path
                title:"Pipes" //title property is used to update the title of the webpage in the brower 
            }
        ]
    },
    {
        path: "advance-topic",
        redirectTo: "advance-topic/services", // Redirect to host-listener by default
        pathMatch: "full",
    },
    {
        path: "advance-topic",
        component:AdvanceTopicComponent,
        title:"Angular Advance Concept",
        children: [
            {
                path: "services", // Use to define the path if empty then it means main/home url
                component:ServiceComponent, //define the which component is load on the defined path
                title:"Angular Service" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "routing", // Use to define the path if empty then it means main/home url
                component:RoutingComponent, //define the which component is load on the defined path
                title:"Angular Routing" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "hooks", // Use to define the path if empty then it means main/home url
                component:HooksComponent, //define the which component is load on the defined path
                title:"Lifecycle Hooks" //title property is used to update the title of the webpage in the brower 
            }
        ]
    },
    {
        path: "**", // double ** means if user will hit that url which not exist. We must define is to the end because below defined routes are not working. It is end point of all routes.
        redirectTo:"/" // it is used to redirect the route to another route
        // component:Page404Component,
        // title:"404 Page"
    }
];
