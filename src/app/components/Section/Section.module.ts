import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SectionRoutingModule } from './SectionRouting.module';
import { SectionComponent } from './Section.component';

import { ContentComponent } from '../Content/Content.component';
import { LocationsComponent } from '../Locations/Locations.component';
import { RateMyAgentComponent } from '../RateMyAgent/RateMyAgent.component';
import { VideoTestimonialsComponent } from '../VideoTestimonials/VideoTestimonials.component';
import { PortalUpgradeTractionComponent } from '../PortalUpgradeTraction/PortalUpgradeTraction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionRoutingModule
  ],
  declarations: [
    SectionComponent,
    ContentComponent,
    LocationsComponent,
    RateMyAgentComponent,
    VideoTestimonialsComponent,
    PortalUpgradeTractionComponent
  ]
})
export class SectionModule {}
