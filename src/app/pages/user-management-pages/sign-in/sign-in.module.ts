import { NgModule } from '@angular/core';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInCComponent } from './sign-in-c/sign-in-c.component';
import { SignInPComponent } from './sign-in-p/sign-in-p.component';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';

@NgModule({
    declarations: [SignInComponent, SignInCComponent, SignInPComponent],
    imports: [DeepRecommendSharedModule, SignInRoutingModule],
})
export class SignInModule {}