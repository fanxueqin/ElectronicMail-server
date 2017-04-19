'use strict';

/**
 * @ngdoc overview
 * @name shoppingMallApp
 * @description
 * # shoppingMallApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingMallApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mgcrea.ngStrap'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
      $urlRouterProvider.when("", "/main");
      $stateProvider
          .state("main", {
              url: "/main",
              views:{
                '':{
                  templateUrl: "views/main.html"
                }
              }
              
          })
          .state("about", {
              url:"/about",
              views:{
                '':{
                  templateUrl: "views/about.html"
                }
              }
          })
          .state("contact", {
              url:"/contact",
              views:{
                '':{
                  templateUrl: "views/contact.html"
                }
              }
          })
          .state("login",{
            url:"/login",
            views:{
              '':{
                templateUrl: "views/login.html",
                controller:"loginController"
              }
            }
          })
          .state("adminLogin",{
            url: "/adminLogin",
            views:{
              '':{
                templateUrl:"views/adminLogin.html",
              }
            }
            })
           .state("adminIndex",{
            url: "/adminIndex",
            views:{
              '':{
                templateUrl:"views/adminIndex.html",
              }
            }
            })
           .state("adminChangePass",{
            url:"/adminChangePass",
            views:{
              '':{
                templateUrl:"views/adminChangePassword.html"
              }
            }
           })
           .state("adminManager_goods",{
            url:"adminManager_goods",
            views:{
              '':{
                templateUrl:"views/adminManager_goods.html"
              }
            }
           })
          .state("adminManager_order",{
            views:"adminManager_order",
            views:{
              '':{
                templateUrl:"views/adminManager_order.html"
              }
            }
          })
          .state("register",{
            url:"/register",
            views: {
              '':{
                templateUrl: "views/register.html",
                controller:"signUpController"
              }
            }
          })
          .state("changePass",{
            url:"/changePass",
            views: {
              '':{
                templateUrl: "views/changePassword.html",
                controller:"changePassController"
              }
            }
          })
          .state("shop_hufu",{
            url:"/shop_hufu",
            views: {
              '':{
                templateUrl: "views/shop_hufu.html"
              }
            }
          })
          .state("shop_makeup",{
            url:"/shop_makeup",
            views: {
              '':{
                templateUrl: "views/shop_makeup.html"
              }
            }
          })
          .state("shop_fashion",{
            url:"/shop_fashion",
            views: {
              '':{
                templateUrl: "views/shop_fashion.html"
              }
            }
          })
          .state("shop_accesory",{
            url:"/shop_accesory",
            views: {
              '':{
                templateUrl: "views/shop_accesory.html"
              }
            }
          })
          .state("shop_home",{
            url:"/shop_home",
            views: {
              '':{
                templateUrl: "views/shop_home.html"
              }
            }
          })
          .state("detail",{
            url:"/detail",
            views: {
              '':{
                templateUrl: "views/detail.html"
              }
            }
          })
          .state("order_list",{
            url:"/order_list",
            views:{
              '':{
                templateUrl: "views/order_list.html"
              }
            }
          })
          .state("order_success",{
            url:"/order_success",
            views:{
              '':{
                templateUrl: "views/order_success.html"
              }
            }
          })
          .state("order_manager",{
            url:"/order_manager",
            views:{
              '':{
                templateUrl: "views/order_manager.html"
              }
            }
          })
          .state("adminAdd_goods",{
            url:"/adminAdd_goods",
            views:{
              '':{
                templateUrl: "views/adminAdd_goods.html"
              }
            }
          })

  });
