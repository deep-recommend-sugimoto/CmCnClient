import { NgModule } from '@angular/core'

import { LikeFromMeRoutingModule } from './like-from-me-routing.module'
import { LikeFromMeComponent } from './like-from-me.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'
import { LikeFromMeCComponent } from './like-from-me-c/like-from-me-c.component'
import { LikeFromMePComponent } from './like-from-me-p/like-from-me-p.component'

@NgModule({
    declarations: [LikeFromMeComponent, LikeFromMeCComponent, LikeFromMePComponent],
    imports: [DeepRecommendSharedModule, LikeFromMeRoutingModule],
})
export class LikeFromMeModule {}