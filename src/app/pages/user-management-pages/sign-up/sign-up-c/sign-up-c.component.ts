import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
import { SignUpProps } from 'src/app/general/interfaces/sign-up.interface';
import { SnackBarService } from 'src/app/general/services/snack-bar.service';
import { UserQuery } from 'src/app/states/user/user.query';
import { UserService } from 'src/app/states/user/user.service';

@Component({
    selector: 'app-sign-up-c',
    templateUrl: './sign-up-c.component.html',
    styleUrls: ['./sign-up-c.component.scss'],
})
export class SignUpCComponent {
    genders$: Observable<string[]> = this.userQuery.genders$;
    years$: Observable<number[]> = this.userQuery.years$;
    months$: Observable<number[]> = this.userQuery.months$;
    days$: Observable<number[]> = this.userQuery.days$;
    birthPlaces$: Observable<string[]> = this.userQuery.birthPlaces$;

    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
        private readonly userQuery: UserQuery,
        private readonly snackBar: SnackBarService
    ) {}

    onReceivedClickSignUp(signUp: SignUpProps): void {
        this.userService
            .postUserRequest(signUp)
            .pipe(first())
            .subscribe((data) => {
                data
                    ? this.snackBar.open(
                          '入力されたEmailは既に使用されています'
                      )
                    : this.router.navigate(['/sign-in']);
            });
    }
}
