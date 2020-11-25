// package: auth
// file: auth/auth.proto

var auth_auth_pb = require("../auth/auth_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Authu = (function () {
  function Authu() {}
  Authu.serviceName = "auth.Authu";
  return Authu;
}());

Authu.Login = {
  methodName: "Login",
  service: Authu,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_pb.LoginRequest,
  responseType: auth_auth_pb.LoginResponse
};

Authu.Logout = {
  methodName: "Logout",
  service: Authu,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_pb.LogoutRequest,
  responseType: auth_auth_pb.LogoutResponse
};

exports.Authu = Authu;

function AuthuClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthuClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Authu.Login, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthuClient.prototype.logout = function logout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Authu.Logout, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthuClient = AuthuClient;

