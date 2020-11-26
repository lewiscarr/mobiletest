// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AddonModPageIndexComponent } from '../../components/index/index';

/**
 * Page that displays a page.
 */
@IonicPage({ segment: 'addon-mod-page-index' })
@Component({
    selector: 'page-addon-mod-page-index',
    templateUrl: 'index.html',
})
export class AddonModPageIndexPage {
    @ViewChild(AddonModPageIndexComponent) pageComponent: AddonModPageIndexComponent;

    title: string;
    module: any;
    courseId: number;

    constructor(navParams: NavParams) {
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
        this.title = this.module.name;
    }

    /**
     * Update some data based on the page instance.
     *
     * @param page Page instance.
     */
    updateData(page: any): void {
        this.title = page.name || this.title;
    }
}
