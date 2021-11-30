import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BenefitComponent } from './dasboard/benefits/benefit/benefit.component';
import { BenefitsComponent } from './dasboard/benefits/benefits/benefits.component';
import { ClientComponent } from './dasboard/clients/client/client.component';
import { ClientsComponent } from './dasboard/clients/clients/clients.component';
import { DashboardComponent } from './dasboard/dashboard/dashboard.component';
import { PoliciesComponent } from './dasboard/policy/policies/policies.component';
import { PolicyDetailsComponent } from './dasboard/policy/policy-details/policy-details.component';
import { PolicyComponent } from './dasboard/policy/policy/policy.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { OurVisionMissionValuesComponent } from './our-vision-mission-values/our-vision-mission-values.component';
import { QouteComponent } from './qoute/qoute.component';
import { ServicesComponent } from './services/services.component';
import { BannerWidgetComponent } from './shared/banner-widget/banner-widget.component';
import { CardComponent } from './shared/card/card.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { HomeSliderComponent } from './shared/home-slider/home-slider.component';
import { ImageWidgetComponent } from './shared/image-widget/image-widget.component';
import { ItemsWidgetComponent } from './shared/items-widget/items-widget.component';
import { NavComponent } from './shared/nav/nav.component';
import { WideCardImageRightComponent } from './shared/wide-card/wide-card-image-right/wide-card-image-right.component';
import { WideCardComponent } from './shared/wide-card/wide-card.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-vision-mission-values', component: OurVisionMissionValuesComponent },
  { path: 'book', component: BookNowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client/:id', component: ClientComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'policy/:id', component: PolicyComponent },
  { path: 'policy-details/:id', component: PolicyDetailsComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'benefit/:id', component: BenefitComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'qoute', component: QouteComponent },
];

export const declarations = [
  AppComponent,
  HomeComponent,
  NavComponent,
  HomeSliderComponent,
  CardComponent,
  ServicesComponent,
  AboutUsComponent,
  OurVisionMissionValuesComponent,
  ContactUsComponent,
  BookNowComponent,
  BannerWidgetComponent,
  WideCardComponent,
  WideCardImageRightComponent,
  LoginComponent,
  DashboardComponent,
  ClientComponent,
  ClientsComponent,
  FeedbackComponent,
  ImageWidgetComponent,
  PoliciesComponent,
  PolicyComponent,
  ItemsWidgetComponent,
  BenefitComponent,
  BenefitsComponent,
  LandingPageComponent,
  PolicyDetailsComponent,
  QouteComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
