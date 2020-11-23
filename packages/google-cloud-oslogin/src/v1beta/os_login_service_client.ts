// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import * as path from 'path';

import * as protos from '../../protos/protos';
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/os_login_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './os_login_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Cloud OS Login API
 *
 *  The Cloud OS Login API allows you to manage users and their associated SSH
 *  public keys for logging into virtual machines on Google Cloud Platform.
 * @class
 * @memberof v1beta
 */
export class OsLoginServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  osLoginServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of OsLoginServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof OsLoginServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      posixAccountPathTemplate: new this._gaxModule.PathTemplate(
        'users/{user}/projects/{project}'
      ),
      sshPublicKeyPathTemplate: new this._gaxModule.PathTemplate(
        'users/{user}/sshPublicKeys/{fingerprint}'
      ),
      userPathTemplate: new this._gaxModule.PathTemplate('users/{user}'),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.oslogin.v1beta.OsLoginService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.osLoginServiceStub) {
      return this.osLoginServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.oslogin.v1beta.OsLoginService.
    this.osLoginServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.oslogin.v1beta.OsLoginService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.oslogin.v1beta.OsLoginService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const osLoginServiceStubMethods = [
      'deletePosixAccount',
      'deleteSshPublicKey',
      'getLoginProfile',
      'getSshPublicKey',
      'importSshPublicKey',
      'updateSshPublicKey',
    ];
    for (const methodName of osLoginServiceStubMethods) {
      const callPromise = this.osLoginServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.osLoginServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'oslogin.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'oslogin.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-platform.read-only',
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/compute.readonly',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  deletePosixAccount(
    request: protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest | undefined,
      {} | undefined
    ]
  >;
  deletePosixAccount(
    request: protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  deletePosixAccount(
    request: protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes a POSIX account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. A reference to the POSIX account to update. POSIX accounts are identified
   *   by the project ID they are associated with. A reference to the POSIX
   *   account is in format `users/{user}/projects/{project}`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.deletePosixAccount(request);
   */
  deletePosixAccount(
    request: protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          | protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deletePosixAccount(request, options, callback);
  }
  deleteSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  >;
  deleteSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  deleteSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes an SSH public key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The fingerprint of the public key to update. Public keys are identified by
   *   their SHA-256 fingerprint. The fingerprint of the public key is in format
   *   `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.deleteSshPublicKey(request);
   */
  deleteSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          | protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteSshPublicKey(request, options, callback);
  }
  getLoginProfile(
    request: protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.oslogin.v1beta.ILoginProfile,
      protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest | undefined,
      {} | undefined
    ]
  >;
  getLoginProfile(
    request: protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.oslogin.v1beta.ILoginProfile,
      | protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getLoginProfile(
    request: protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
    callback: Callback<
      protos.google.cloud.oslogin.v1beta.ILoginProfile,
      | protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves the profile information used for logging in to a virtual machine
   * on Google Compute Engine.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The unique ID for the user in format `users/{user}`.
   * @param {string} request.projectId
   *   The project ID of the Google Cloud Platform project.
   * @param {string} request.systemId
   *   A system ID for filtering the results of the request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [LoginProfile]{@link google.cloud.oslogin.v1beta.LoginProfile}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.getLoginProfile(request);
   */
  getLoginProfile(
    request: protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.oslogin.v1beta.ILoginProfile,
          | protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.oslogin.v1beta.ILoginProfile,
      | protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.oslogin.v1beta.ILoginProfile,
      protos.google.cloud.oslogin.v1beta.IGetLoginProfileRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getLoginProfile(request, options, callback);
  }
  getSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.oslogin.common.ISshPublicKey,
      protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  >;
  getSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
    callback: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves an SSH public key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The fingerprint of the public key to retrieve. Public keys are identified
   *   by their SHA-256 fingerprint. The fingerprint of the public key is in
   *   format `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.getSshPublicKey(request);
   */
  getSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.oslogin.common.ISshPublicKey,
          | protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.oslogin.common.ISshPublicKey,
      protos.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getSshPublicKey(request, options, callback);
  }
  importSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  >;
  importSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
      | protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  importSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
    callback: Callback<
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
      | protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Adds an SSH public key and returns the profile information. Default POSIX
   * account information is set when no username and UID exist as part of the
   * login profile.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The unique ID for the user in format `users/{user}`.
   * @param {google.cloud.oslogin.common.SshPublicKey} request.sshPublicKey
   *   Required. The SSH public key and expiration time.
   * @param {string} request.projectId
   *   The project ID of the Google Cloud Platform project.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ImportSshPublicKeyResponse]{@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.importSshPublicKey(request);
   */
  importSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
          | protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
      | protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
      protos.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.importSshPublicKey(request, options, callback);
  }
  updateSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.oslogin.common.ISshPublicKey,
      protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  >;
  updateSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  updateSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
    callback: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Updates an SSH public key and returns the profile information. This method
   * supports patch semantics.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The fingerprint of the public key to update. Public keys are identified by
   *   their SHA-256 fingerprint. The fingerprint of the public key is in format
   *   `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {google.cloud.oslogin.common.SshPublicKey} request.sshPublicKey
   *   Required. The SSH public key and expiration time.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Mask to control which fields get updated. Updates all if not present.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.updateSshPublicKey(request);
   */
  updateSshPublicKey(
    request: protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.oslogin.common.ISshPublicKey,
          | protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.oslogin.common.ISshPublicKey,
      | protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.oslogin.common.ISshPublicKey,
      protos.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateSshPublicKey(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified posixAccount resource name string.
   *
   * @param {string} user
   * @param {string} project
   * @returns {string} Resource name string.
   */
  posixAccountPath(user: string, project: string) {
    return this.pathTemplates.posixAccountPathTemplate.render({
      user: user,
      project: project,
    });
  }

  /**
   * Parse the user from PosixAccount resource.
   *
   * @param {string} posixAccountName
   *   A fully-qualified path representing PosixAccount resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromPosixAccountName(posixAccountName: string) {
    return this.pathTemplates.posixAccountPathTemplate.match(posixAccountName)
      .user;
  }

  /**
   * Parse the project from PosixAccount resource.
   *
   * @param {string} posixAccountName
   *   A fully-qualified path representing PosixAccount resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromPosixAccountName(posixAccountName: string) {
    return this.pathTemplates.posixAccountPathTemplate.match(posixAccountName)
      .project;
  }

  /**
   * Return a fully-qualified sshPublicKey resource name string.
   *
   * @param {string} user
   * @param {string} fingerprint
   * @returns {string} Resource name string.
   */
  sshPublicKeyPath(user: string, fingerprint: string) {
    return this.pathTemplates.sshPublicKeyPathTemplate.render({
      user: user,
      fingerprint: fingerprint,
    });
  }

  /**
   * Parse the user from SshPublicKey resource.
   *
   * @param {string} sshPublicKeyName
   *   A fully-qualified path representing SshPublicKey resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromSshPublicKeyName(sshPublicKeyName: string) {
    return this.pathTemplates.sshPublicKeyPathTemplate.match(sshPublicKeyName)
      .user;
  }

  /**
   * Parse the fingerprint from SshPublicKey resource.
   *
   * @param {string} sshPublicKeyName
   *   A fully-qualified path representing SshPublicKey resource.
   * @returns {string} A string representing the fingerprint.
   */
  matchFingerprintFromSshPublicKeyName(sshPublicKeyName: string) {
    return this.pathTemplates.sshPublicKeyPathTemplate.match(sshPublicKeyName)
      .fingerprint;
  }

  /**
   * Return a fully-qualified user resource name string.
   *
   * @param {string} user
   * @returns {string} Resource name string.
   */
  userPath(user: string) {
    return this.pathTemplates.userPathTemplate.render({
      user: user,
    });
  }

  /**
   * Parse the user from User resource.
   *
   * @param {string} userName
   *   A fully-qualified path representing User resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromUserName(userName: string) {
    return this.pathTemplates.userPathTemplate.match(userName).user;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.osLoginServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
