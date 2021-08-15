import { NgModule } from '@angular/core';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { MyPageCComponent } from './my-page-c/my-page-c.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { MyPagePComponent } from './my-page-p/my-page-p.component';
import { MyPageActionsPComponent } from './my-page-actions-p/my-page-actions-p.component';

@NgModule({
    declarations: [MyPageComponent, MyPageCComponent, MyPagePComponent, MyPageActionsPComponent],
    imports: [DeepRecommendSharedModule, MyPageRoutingModule],
})
export class MyPageModule {}
