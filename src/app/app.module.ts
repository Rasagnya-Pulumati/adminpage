import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ReviewComponent } from './review/review.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelComponent } from './hotel/hotel.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfoPipeComponent } from './info-pipe/info-pipe.component';
import { InfoPipe } from './info-pipe';
const allLinks:Routes = [
  {path:'launchhotel',component:AdminWorkComponent},
  {path:'hotels',component:HotelComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'bookingdetails',component:BookingDetailsComponent },
  {path:'hotelDetail/:hid',component:HotelDetailComponent},
  {path:'paymenthistory',component:TransactionsComponent},
  {path:'review',component:ReviewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    HotelDetailComponent,
    BookingDetailsComponent,
    ReviewComponent,
    RoomsComponent,
    HotelComponent,
    TransactionsComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    InfoPipeComponent,
    InfoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
