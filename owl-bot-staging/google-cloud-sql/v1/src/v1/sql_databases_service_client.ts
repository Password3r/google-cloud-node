// Copyright 2023 Google LLC
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
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions, LocationsClient, LocationProtos} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/sql_databases_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './sql_databases_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service to manage databases.
 * @class
 * @memberof v1
 */
export class SqlDatabasesServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
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
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  locationsClient: LocationsClient;
  sqlDatabasesServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of SqlDatabasesServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
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
   * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new SqlDatabasesServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof SqlDatabasesServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }
    this.locationsClient = new this._gaxModule.LocationsClient(
      this._gaxGrpc,
      opts
    );
  

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.sql.v1.SqlDatabasesService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
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
    if (this.sqlDatabasesServiceStub) {
      return this.sqlDatabasesServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.sql.v1.SqlDatabasesService.
    this.sqlDatabasesServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.sql.v1.SqlDatabasesService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.sql.v1.SqlDatabasesService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const sqlDatabasesServiceStubMethods =
        ['delete', 'get', 'insert', 'list', 'patch', 'update'];
    for (const methodName of sqlDatabasesServiceStubMethods) {
      const callPromise = this.sqlDatabasesServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.sqlDatabasesServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'sqladmin.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'sqladmin.googleapis.com';
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
      'https://www.googleapis.com/auth/sqlservice.admin'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Deletes a database from a Cloud SQL instance.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Name of the database to be deleted in the instance.
 * @param {string} request.instance
 *   Database instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.Operation|Operation}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.delete.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_Delete_async
 */
  delete(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|undefined, {}|undefined
      ]>;
  delete(
      request: protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|null|undefined,
          {}|null|undefined>): void;
  delete(
      request: protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|null|undefined,
          {}|null|undefined>): void;
  delete(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesDeleteRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
      'database': request.database ?? '',
    });
    this.initialize();
    return this.innerApiCalls.delete(request, options, callback);
  }
/**
 * Retrieves a resource containing information about a database inside a Cloud
 * SQL instance.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Name of the database in the instance.
 * @param {string} request.instance
 *   Database instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.Database|Database}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.get.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_Get_async
 */
  get(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesGetRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IDatabase,
        protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|undefined, {}|undefined
      ]>;
  get(
      request: protos.google.cloud.sql.v1.ISqlDatabasesGetRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IDatabase,
          protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|null|undefined,
          {}|null|undefined>): void;
  get(
      request: protos.google.cloud.sql.v1.ISqlDatabasesGetRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IDatabase,
          protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|null|undefined,
          {}|null|undefined>): void;
  get(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesGetRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IDatabase,
          protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IDatabase,
          protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IDatabase,
        protos.google.cloud.sql.v1.ISqlDatabasesGetRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
      'database': request.database ?? '',
    });
    this.initialize();
    return this.innerApiCalls.get(request, options, callback);
  }
/**
 * Inserts a resource containing information about a database inside a Cloud
 * SQL instance.
 *
 * **Note:** You can't modify the default character set and collation.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instance
 *   Database instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {google.cloud.sql.v1.Database} request.body
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.Operation|Operation}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.insert.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_Insert_async
 */
  insert(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|undefined, {}|undefined
      ]>;
  insert(
      request: protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|null|undefined,
          {}|null|undefined>): void;
  insert(
      request: protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|null|undefined,
          {}|null|undefined>): void;
  insert(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesInsertRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
    });
    this.initialize();
    return this.innerApiCalls.insert(request, options, callback);
  }
/**
 * Lists databases in the specified Cloud SQL instance.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instance
 *   Cloud SQL instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.DatabasesListResponse|DatabasesListResponse}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.list.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_List_async
 */
  list(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesListRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IDatabasesListResponse,
        protos.google.cloud.sql.v1.ISqlDatabasesListRequest|undefined, {}|undefined
      ]>;
  list(
      request: protos.google.cloud.sql.v1.ISqlDatabasesListRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IDatabasesListResponse,
          protos.google.cloud.sql.v1.ISqlDatabasesListRequest|null|undefined,
          {}|null|undefined>): void;
  list(
      request: protos.google.cloud.sql.v1.ISqlDatabasesListRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IDatabasesListResponse,
          protos.google.cloud.sql.v1.ISqlDatabasesListRequest|null|undefined,
          {}|null|undefined>): void;
  list(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesListRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IDatabasesListResponse,
          protos.google.cloud.sql.v1.ISqlDatabasesListRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IDatabasesListResponse,
          protos.google.cloud.sql.v1.ISqlDatabasesListRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IDatabasesListResponse,
        protos.google.cloud.sql.v1.ISqlDatabasesListRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
    });
    this.initialize();
    return this.innerApiCalls.list(request, options, callback);
  }
/**
 * Partially updates a resource containing information about a database inside
 * a Cloud SQL instance. This method supports patch semantics.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Name of the database to be updated in the instance.
 * @param {string} request.instance
 *   Database instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {google.cloud.sql.v1.Database} request.body
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.Operation|Operation}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.patch.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_Patch_async
 */
  patch(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|undefined, {}|undefined
      ]>;
  patch(
      request: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>): void;
  patch(
      request: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>): void;
  patch(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
      'database': request.database ?? '',
    });
    this.initialize();
    return this.innerApiCalls.patch(request, options, callback);
  }
/**
 * Updates a resource containing information about a database inside a Cloud
 * SQL instance.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Name of the database to be updated in the instance.
 * @param {string} request.instance
 *   Database instance ID. This does not include the project ID.
 * @param {string} request.project
 *   Project ID of the project that contains the instance.
 * @param {google.cloud.sql.v1.Database} request.body
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.sql.v1.Operation|Operation}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/sql_databases_service.update.js</caption>
 * region_tag:sqladmin_v1_generated_SqlDatabasesService_Update_async
 */
  update(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|undefined, {}|undefined
      ]>;
  update(
      request: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>): void;
  update(
      request: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      callback: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>): void;
  update(
      request?: protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.sql.v1.IOperation,
          protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.sql.v1.IOperation,
        protos.google.cloud.sql.v1.ISqlDatabasesUpdateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'project': request.project ?? '',
      'instance': request.instance ?? '',
      'database': request.database ?? '',
    });
    this.initialize();
    return this.innerApiCalls.update(request, options, callback);
  }

/**
   * Gets information about a location.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name for the location.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html | CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link google.cloud.location.Location | Location}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example
   * ```
   * const [response] = await client.getLocation(request);
   * ```
   */
  getLocation(
    request: LocationProtos.google.cloud.location.IGetLocationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          LocationProtos.google.cloud.location.ILocation,
          | LocationProtos.google.cloud.location.IGetLocationRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LocationProtos.google.cloud.location.ILocation,
      | LocationProtos.google.cloud.location.IGetLocationRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<LocationProtos.google.cloud.location.ILocation> {
    return this.locationsClient.getLocation(request, options, callback);
  }

/**
   * Lists information about the supported locations for this service. Returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource that owns the locations collection, if applicable.
   * @param {string} request.filter
   *   The standard list filter.
   * @param {number} request.pageSize
   *   The standard list page size.
   * @param {string} request.pageToken
   *   The standard list page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
   *   When you iterate the returned iterable, each element will be an object representing
   *   {@link google.cloud.location.Location | Location}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   * @example
   * ```
   * const iterable = client.listLocationsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   * ```
   */
  listLocationsAsync(
    request: LocationProtos.google.cloud.location.IListLocationsRequest,
    options?: CallOptions
  ): AsyncIterable<LocationProtos.google.cloud.location.ILocation> {
    return this.locationsClient.listLocationsAsync(request, options);
  }


  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.sqlDatabasesServiceStub && !this._terminated) {
      return this.sqlDatabasesServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
        this.locationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
