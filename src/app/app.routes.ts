import { Routes } from '@angular/router';
import { AdvanceTopicComponent } from './components/advance-topic/advance-topic.component';
import { BasicConceptComponent } from './components/basic-concept/basic-concept.component';
import { ChildToParentComponent } from './components/basic-concept/child-to-parent/child-to-parent.component';
import { DataBindingComponent } from './components/basic-concept/data-binding/data-binding.component';
import { EventBindingComponent } from './components/basic-concept/data-binding/event-binding/event-binding.component';


export const routes: Routes = [
    {
        path: "", // Use to define the path if empty then it means main/home url
        redirectTo:'basic-concept',
        pathMatch:'full'
    },
    {
        path: "basic-concept", // Use to define the path if empty then it means main/home url
        component:BasicConceptComponent, //define the which component is load on the defined path
        title:"Angular Basic Concept", //title property is used to update the title of the webpage in the brower 
        pathMatch:'full'
    },
    {
        path: "basic-concept", // Use to define the path if empty then it means main/home url
        children: [
            {
                path: "child-to-parent", // Use to define the path if empty then it means main/home url
                component:ChildToParentComponent, //define the which component is load on the defined path
                title:"Send Data Child to Parent" //title property is used to update the title of the webpage in the brower 
            },
            {
                path: "data-binding", // Use to define the path if empty then it means main/home url
                component:DataBindingComponent, //define the which component is load on the defined path
                title:"Data Binding" //title property is used to update the title of the webpage in the brower 
            }
        ]
    },
    {
        path: "basic-concept/data-binding", // Use to define the path if empty then it means main/home url
        children: [
            {
                path: "event-binding", // Use to define the path if empty then it means main/home url
                component:EventBindingComponent, //define the which component is load on the defined path
                title:"Event Binding" //title property is used to update the title of the webpage in the brower 
            }
        ]
    },
    {
        path: "advance-topic",
        component:AdvanceTopicComponent,
        title:"Angular Advance Concept"
    },
    {
        path: "**", // double ** means if user will hit that url which not exist. We must define is to the end because below defined routes are not working. It is end point of all routes.
        redirectTo:"basic-concept" // it is used to redirect the route to another route
        // component:Page404Component,
        // title:"404 Page"
    }
];
