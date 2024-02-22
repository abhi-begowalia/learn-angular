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
import { StructuralComponent } from './components/basic-concept/directive/structural/structural.component';
import { AttributeComponent } from './components/basic-concept/directive/attribute/attribute.component';
import { DynamicComponent } from './components/advance-topic/routing/dynamic/dynamic.component';
import { AuxiliaryComponent } from './components/advance-topic/routing/auxiliary/auxiliary.component';
import { BasicComponent } from './components/advance-topic/routing/basic/basic.component';
import { NgOnChangesComponent } from './components/advance-topic/hooks/ng-on-changes/ng-on-changes.component';
import { NgAfterViewInitComponent } from './components/advance-topic/hooks/ng-after-view-init/ng-after-view-init.component';
import { NgOnInitComponent } from './components/advance-topic/hooks/ng-on-init/ng-on-init.component';
import { NgAfterViewCheckedComponent } from './components/advance-topic/hooks/ng-after-view-checked/ng-after-view-checked.component';
import { NgAfterContentInitComponent } from './components/advance-topic/hooks/ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckedComponent } from './components/advance-topic/hooks/ng-after-content-checked/ng-after-content-checked.component';
import { NgOnDestroyComponent } from './components/advance-topic/hooks/ng-on-destroy/ng-on-destroy.component';
import { NgDoCheckComponent } from './components/advance-topic/hooks/ng-do-check/ng-do-check.component';



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
                path: "host-listener", 
                component:HostListenerComponent, 
                title:"Host Listener"  
            },
            {
                path: "selector", 
                component:SelectorComponent, 
                title:"Angular Selector"  
            },
            {
                path: "pre-white-spa", 
                component:PreWhiteSpaComponent, 
                title:"Preserve White Space"  
            },
            {
                path: "view-provider", 
                component:ViewProviderComponent, 
                title:"View Provider"  
            },
            {
                path: "encapsulation", 
                component:EncapsulationComponent, 
                title:"Encapsilation"  
            },
            {
                path: "parent-to-child", 
                component:ParentToChildComponent, 
                title:"Parent To Child"  
            },
            {
                path: "child-to-parent", 
                component:ChildToParentComponent, 
                title:"Send Data Child to Parent"  
            },
            {
                path: "directive", 
                component:DirectiveComponent, 
                title:"Directive",  
                children:[
                    {
                        path:"structural-directive",
                        component:StructuralComponent,
                        title:"Structural Directive"
                    },
                    {
                        path:"attribute-directive",
                        component:AttributeComponent,
                        title:"Attribute Directive"
                    }
                ]
            },
            {
                path: "data-binding", 
                component:DataBindingComponent, 
                title:"Data Binding"  
            },
            {
                path: "two-way-data-binding", 
                component:TwoWayDataBindingComponent, 
                title:"Two Way Data Binding"  
            },
            {
                path: "pipes", 
                component:PipesComponent, 
                title:"Pipes"  
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
                path: "services", 
                component:ServiceComponent, 
                title:"Angular Service"  
            },
            {
                path: "routing", 
                component:RoutingComponent, 
                title:"Angular Routing",
                children:[
                    {
                        path:"basic",
                        component:BasicComponent,
                        title:"Basic Routing"
                    },
                    {
                        path:"dynamic",
                        component:DynamicComponent,
                        title:"Dynamic Routing"
                    },
                    {
                        path:"auxiliary",
                        component:AuxiliaryComponent,
                        title:"Auxiliary Routing"
                    }
                ]
            },
            {
                path: "hooks", 
                component:HooksComponent, 
                title:"Lifecycle Hooks" ,
                children:[
                    {
                        path: 'ng-on-changes',
                        component: NgOnChangesComponent,
                        title: 'NgOnChanges'
                    },
                    {
                        path: 'ng-on-init',
                        component: NgOnInitComponent,
                        title: 'NgOnInit'
                    },
                    {
                        path: 'ng-after-view-init',
                        component: NgAfterViewInitComponent,
                        title: 'NgAfterViewInit'
                    },
                    {
                        path: 'ng-do-check',
                        component: NgDoCheckComponent,
                        title: 'NgDoCheck'
                    },
                    {
                        path: 'ng-after-view-checked',
                        component: NgAfterViewCheckedComponent,
                        title: 'NgAfterViewChecked'
                    },
                    {
                        path: 'ng-after-content-init',
                        component: NgAfterContentInitComponent,
                        title: 'NgAfterContentInit'
                    },
                    {
                        path: 'ng-after-content-checked',
                        component: NgAfterContentCheckedComponent,
                        title: 'NgAfterContentChecked'
                    },
                    {
                        path: 'ng-on-destroy',
                        component: NgOnDestroyComponent,
                        title: 'NgOnDestroy'
                    }
                      
                ]
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
