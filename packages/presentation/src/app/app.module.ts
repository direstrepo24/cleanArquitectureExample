import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CORE_IOC } from 'src/di/counter.ioc';
@NgModule({
    declarations: [AppComponent],

    imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],

    providers: [...CORE_IOC],

    bootstrap: [AppComponent],
})
export class AppModule {}
