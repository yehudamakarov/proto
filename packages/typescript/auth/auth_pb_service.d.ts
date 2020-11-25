// package: auth
// file: auth/auth.proto

import * as auth_auth_pb from "../auth/auth_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthuLogin = {
  readonly methodName: string;
  readonly service: typeof Authu;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_pb.LoginRequest;
  readonly responseType: typeof auth_auth_pb.LoginResponse;
};

type AuthuLogout = {
  readonly methodName: string;
  readonly service: typeof Authu;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_pb.LogoutRequest;
  readonly responseType: typeof auth_auth_pb.LogoutResponse;
};

export class Authu {
  static readonly serviceName: string;
  static readonly Login: AuthuLogin;
  static readonly Logout: AuthuLogout;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthuClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: auth_auth_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_auth_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: auth_auth_pb.LoginResponse|null) => void
  ): UnaryResponse;
  logout(
    requestMessage: auth_auth_pb.LogoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_pb.LogoutResponse|null) => void
  ): UnaryResponse;
  logout(
    requestMessage: auth_auth_pb.LogoutRequest,
    callback: (error: ServiceError|null, responseMessage: auth_auth_pb.LogoutResponse|null) => void
  ): UnaryResponse;
}

