# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Description:
    This is a book shopping web application and here is my project's information mentioned below.

## User Register:
- Designed the project logo and placed as a header.
- Created the **Register page** with required fields and gave routing element to navigate to login page.
- Here we used angular mat elements to design this page like <mat-form-field>, <mat-label> etc., and script code to password visibility.
- Created api's as per the user registration.
-![This is image]("../assets/reference/signup.png")

## User Login:
- Here also we use angular mat elements for text box and done styling as per that.
- Gave navigation for the users who forgot email and to update the email.
-![This is image]("../assets/reference/login.png")

## Dashboard:
- Here this our header for whole application with features search the book, to check cart items and to check our profile.
- Here provided navigations as per the feature.
-![This is image]("../assets/reference/dashboard.png")

## Get All Books:
- Here we listing all our books with some basic infomation like name, price, discount, rating.
- Along with that we added option to sort our books as per user's convenience on what basis he want to list books.
  Ex: Low to High, High to Low, Newest arrivals first.
- We gave page slide bar to go to particular page.
-![This is image]("../assets/reference/books.png")

## Quick View:
- Here we can view a particular book and information related to that book.
- So to navigate to this view page we provided a navigation link by clicking on a particular book, it navigate to that book data.
- Apart from book information, we provided cart option. We can select the number of books here and we can view in cart list.
- We also provided wishlist option, once we select the wishlist it directly added to wishlist and navigate to that wishlist page to view all our wishlist content.
-![This is image]("../assets/reference/viewpage.png")

## Cart:
- In this we are listing all our cart items, where we are adding from quick view page.
- Here we provided option to incerase the count of books quantity and provided to decrease also.
- After that to move forward, we provided place order option which navigates to address part, where we will provide address for delivery purpose.
- Here without filling address part we can't go to next step.
- Once we provide all the user infomation then we will continue to summary part.
- Here in summary we are able to see the items what we are ordering and there will be a checkout option, which places our order successfully.
- After selecting checkout, our data will send and navigate to order successfull page.
-![This is image]("../assets/reference/cart.png")
-![This is image]("../assets/reference/cartAddress.png")
-![This is image]("../assets/reference/cartAddress2.png")
-![This is image]("../assets/reference/summary.png")
-![This is image]("../assets/reference/order.png")

## Wishlist:
- In this we are listing all our wishlist items, where we are adding from quick view page.
- Here we provided option to delete the item also.
-![This is image]("../assets/reference/wishlist.png")

## Profile:
- In this page, all the user infomation is provided like full name, email, contact number and address.
- This page is just to view the user infomation.
- Here we provided logout option also for user.
-![This is image]("../assets/reference/profile.png")


