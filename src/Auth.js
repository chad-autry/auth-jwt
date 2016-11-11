"use strict";
/**
 * Since only a single constructor is being exported as module.exports this comment isn't documented.
 * The class and module are the same thing, the contructor comment takes precedence.
 * @module Auth
 */
 
/**
 * Auth service, provides the API used
 * @constructor
 * @param originRmiService - The service used to call the host server
 */
 module.exports = function Auth(originRmiService) {
    //Protect the constructor from being called as a normal method
    if (!(this instanceof Auth)) {
        return new Auth();
    }
    auth = this;
    this.originRmiService = originRmiService;

   /**
    * Login directlly to the origin server 
    */
    this.login = (user, options) => auth.originRmiService.login(user, options);
     
   /**
    * Signup on the origin server for a new account
    */
    this.signup = (user, options) => auth.originRmiService.signup(user, options);
    this.logout = function() => SatellizerShared.logout(),
    this.authenticate = function(name, data) => SatellizerOAuth.authenticate(name, data),
    this.link = function(name, data) => SatellizerOAuth.authenticate(name, data),
    this.unlink = function(name, options) => SatellizerOAuth.unlink(name, options),
    this.isAuthenticated = function() => SatellizerShared.isAuthenticated(),
    this.getPayload = function() => SatellizerShared.getPayload(),
    this.getToken = function() => SatellizerShared.getToken(),
    this.setToken = function(token) => SatellizerShared.setToken({ access_token: token }),
    this.removeToken = function() => SatellizerShared.removeToken(),
    this.setStorageType = function(type) => SatellizerShared.setStorageType(type)
};
