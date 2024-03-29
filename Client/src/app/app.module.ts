import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { NavComponent } from './nav/nav.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { ConvertToDatePipe } from './_pipes/convert-to-date.pipe';
import { ConvertToTimePipe } from './_pipes/convert-to-time.pipe';
import { ConvertToHgPipe } from './_pipes/convert-to-hg.pipe';
import { ConvertToPercPipe } from './_pipes/convert-to-perc.pipe';
import { ConvertToMilesPipe } from './_pipes/convert-to-miles.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WeatherAlertsComponent } from './weather-alerts/weather-alerts.component';
import { ConvertToDatetimePipe } from './_pipes/convert-to-datetime.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HourlyWeatherDetailsComponent } from './hourly-weather-details/hourly-weather-details.component';
import { ConvertToDateStringPipe } from './_pipes/convert-to-date-string.pipe';
import { DailyWeatherDetailsComponent } from './daily-weather-details/daily-weather-details.component';
import { WeatherHistoryComponent } from './weather-history/weather-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherHistoryDetailsComponent } from './weather-history-details/weather-history-details.component';
import { HourlyRainCheckComponent } from './hourly-rain-check/hourly-rain-check.component';
import { WeatherStatisticsComponent } from './weather-statistics/weather-statistics.component';
import { CloudyDaysComponent } from './cloudy-days/cloudy-days.component';
import { RainyDaysComponent } from './rainy-days/rainy-days.component';
import { ColdDaysComponent } from './cold-days/cold-days.component';
import { HotDaysComponent } from './hot-days/hot-days.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ConvertToTempPipe } from './_pipes/convert-to-temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    WeatherComponent,
    WeatherCardComponent,
    NavComponent,
    WeatherDetailsComponent,
    HomeComponent,
    ConvertToDatePipe,
    ConvertToTimePipe,
    ConvertToHgPipe,
    ConvertToPercPipe,
    ConvertToMilesPipe,
    WeatherAlertsComponent,
    ConvertToDatetimePipe,
    HourlyWeatherDetailsComponent,
    ConvertToDateStringPipe,
    DailyWeatherDetailsComponent,
    WeatherHistoryComponent,
    WeatherHistoryDetailsComponent,
    HourlyRainCheckComponent,
    WeatherStatisticsComponent,
    CloudyDaysComponent,
    RainyDaysComponent,
    ColdDaysComponent,
    HotDaysComponent,
    ConvertToTempPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
