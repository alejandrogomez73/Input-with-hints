import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Input with hints
 */
@Component({
  selector: 'input-hint-example',
  templateUrl: 'input-hint-example.html',
  styleUrl: 'input-hint-example.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputHintExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */