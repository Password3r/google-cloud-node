// Copyright 2019 Google LLC
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

import * as gax from 'google-gax';
import {
  APICallback,
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  PaginationResponse,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './contexts_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A context represents additional information included with user input or with
 *  an intent returned by the Dialogflow API. Contexts are helpful for
 *  differentiating user input which may be vague or have a different meaning
 *  depending on additional details from your application such as user setting
 *  and preferences, previous user input, where the user is in your application,
 *  geographic location, and so on.
 *
 *  You can include contexts as input parameters of a
 *  {@link google.cloud.dialogflow.v2beta1.Sessions.DetectIntent|DetectIntent} (or
 *  {@link google.cloud.dialogflow.v2beta1.Sessions.StreamingDetectIntent|StreamingDetectIntent}) request,
 *  or as output contexts included in the returned intent.
 *  Contexts expire when an intent is matched, after the number of `DetectIntent`
 *  requests specified by the `lifespan_count` parameter, or after 20 minutes
 *  if no intents are matched for a `DetectIntent` request.
 *
 *  For more information about contexts, see the
 *  [Dialogflow
 *  documentation](https://cloud.google.com/dialogflow/docs/contexts-overview).
 * @class
 * @memberof v2beta1
 */
export class ContextsClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _pathTemplates: {[name: string]: gax.PathTemplate};
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  contextsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ContextsClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
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
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof ContextsClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    this._gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof ContextsClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

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
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/agent'
      ),
      projectIntentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/agent/intents/{intent}'
      ),
      projectLocationPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/agent'
      ),
      projectLocationIntentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/agent/intents/{intent}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listContexts: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'contexts'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.Contexts',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};
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
    if (this.contextsStub) {
      return this.contextsStub;
    }

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.Contexts.
    this.contextsStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.dialogflow.v2beta1.Contexts'
          )
        : // tslint:disable-next-line no-any
          (this._protos as any).google.cloud.dialogflow.v2beta1.Contexts,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const contextsStubMethods = [
      'listContexts',
      'getContext',
      'createContext',
      'updateContext',
      'deleteContext',
      'deleteAllContexts',
    ];

    for (const methodName of contextsStubMethods) {
      const innerCallPromise = this.contextsStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          return stub[methodName].apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const apiCall = this._gaxModule.createApiCall(
        innerCallPromise,
        this._defaults[methodName],
        this._descriptors.page[methodName] ||
          this._descriptors.stream[methodName] ||
          this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
        return apiCall(argument, callOptions, callback);
      };
    }

    return this.contextsStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'dialogflow.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'dialogflow.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/dialogflow',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
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
  getContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  getContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Retrieves the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the context. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
   *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
   *   not specified, we assume default 'draft' environment. If `User ID` is not
   *   specified, we assume default '-' user.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  getContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.dialogflow.v2beta1.IContext,
          | protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IGetContextRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
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
    return this._innerApiCalls.getContext(request, options, callback);
  }
  createContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  createContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Creates a context.
   *
   * If the specified context already exists, overrides the context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to create a context for.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
   * @param {google.cloud.dialogflow.v2beta1.Context} request.context
   *   Required. The context to create.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  createContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.dialogflow.v2beta1.IContext,
          | protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.ICreateContextRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
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
    return this._innerApiCalls.createContext(request, options, callback);
  }
  updateContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  updateContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Updates the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.cloud.dialogflow.v2beta1.Context} request.context
   *   Required. The context to update.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Optional. The mask to control which fields get updated.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  updateContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.dialogflow.v2beta1.IContext,
          | protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      | protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IUpdateContextRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'context.name': request.context!.name || '',
    });
    this.initialize();
    return this._innerApiCalls.updateContext(request, options, callback);
  }
  deleteContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.protobuf.IEmpty,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  deleteContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.protobuf.IEmpty,
      | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Deletes the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the context to delete. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
   *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
   *   not specified, we assume default 'draft' environment. If `User ID` is not
   *   specified, we assume default '-' user.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  deleteContext(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.protobuf.IEmpty,
          | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.protobuf.IEmpty,
      | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.protobuf.IEmpty,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteContextRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
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
    return this._innerApiCalls.deleteContext(request, options, callback);
  }
  deleteAllContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.protobuf.IEmpty,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  deleteAllContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.protobuf.IEmpty,
      | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Deletes all active contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the session to delete all contexts from. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
   *   ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
   *   ID>`. If `Environment ID` is not specified we assume default 'draft'
   *   environment. If `User ID` is not specified, we assume default '-' user.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  deleteAllContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.protobuf.IEmpty,
          | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.protobuf.IEmpty,
      | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.protobuf.IEmpty,
      (
        | protosTypes.google.cloud.dialogflow.v2beta1.IDeleteAllContextsRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
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
    return this._innerApiCalls.deleteAllContexts(request, options, callback);
  }

  listContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext[],
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest | null,
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsResponse
    ]
  >;
  listContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext[],
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest | null,
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsResponse
    >
  ): void;
  /**
   * Returns the list of all contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to list all contexts from.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
   * @param {number} request.pageSize
   *   Optional. The maximum number of items to return in a single page. By
   *   default 100 and at most 1000.
   * @param {string} request.pageToken
   *   Optional. The next_page_token value returned from a previous list request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The client library support auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Context]{@link google.cloud.dialogflow.v2beta1.Context} that corresponds to
   *   the one page received from the API server.
   *   If the second element is not null it contains the request object of type [ListContextsRequest]{@link google.cloud.dialogflow.v2beta1.ListContextsRequest}
   *   that can be used to obtain the next page of the results.
   *   If it is null, the next page does not exist.
   *   The third element contains the raw response received from the API server. Its type is
   *   [ListContextsResponse]{@link google.cloud.dialogflow.v2beta1.ListContextsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  listContexts(
    request: protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.dialogflow.v2beta1.IContext[],
          protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest | null,
          protosTypes.google.cloud.dialogflow.v2beta1.IListContextsResponse
        >,
    callback?: Callback<
      protosTypes.google.cloud.dialogflow.v2beta1.IContext[],
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest | null,
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsResponse
    >
  ): Promise<
    [
      protosTypes.google.cloud.dialogflow.v2beta1.IContext[],
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest | null,
      protosTypes.google.cloud.dialogflow.v2beta1.IListContextsResponse
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
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
    return this._innerApiCalls.listContexts(request, options, callback);
  }

  /**
   * Equivalent to {@link listContexts}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listContexts} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to list all contexts from.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
   * @param {number} request.pageSize
   *   Optional. The maximum number of items to return in a single page. By
   *   default 100 and at most 1000.
   * @param {string} request.pageToken
   *   Optional. The next_page_token value returned from a previous list request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context} on 'data' event.
   */
  listContextsStream(
    request?: protosTypes.google.cloud.dialogflow.v2beta1.IListContextsRequest,
    options?: gax.CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this._descriptors.page.listContexts.createStream(
      this._innerApiCalls.listContexts as gax.GaxCall,
      request,
      callSettings
    );
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this._pathTemplates.projectPathTemplate.render({
      project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Return a fully-qualified projectIntent resource name string.
   *
   * @param {string} project
   * @param {string} intent
   * @returns {string} Resource name string.
   */
  projectIntentPath(project: string, intent: string) {
    return this._pathTemplates.projectIntentPathTemplate.render({
      project,
      intent,
    });
  }

  /**
   * Parse the project from ProjectIntent resource.
   *
   * @param {string} projectIntentName
   *   A fully-qualified path representing project_intent resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectIntentName(projectIntentName: string) {
    return this._pathTemplates.projectIntentPathTemplate.match(
      projectIntentName
    ).project;
  }

  /**
   * Parse the intent from ProjectIntent resource.
   *
   * @param {string} projectIntentName
   *   A fully-qualified path representing project_intent resource.
   * @returns {string} A string representing the intent.
   */
  matchIntentFromProjectIntentName(projectIntentName: string) {
    return this._pathTemplates.projectIntentPathTemplate.match(
      projectIntentName
    ).intent;
  }

  /**
   * Return a fully-qualified projectLocation resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @returns {string} Resource name string.
   */
  projectLocationPath(project: string, location: string) {
    return this._pathTemplates.projectLocationPathTemplate.render({
      project,
      location,
    });
  }

  /**
   * Parse the project from ProjectLocation resource.
   *
   * @param {string} projectLocationName
   *   A fully-qualified path representing project_location resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectLocationName(projectLocationName: string) {
    return this._pathTemplates.projectLocationPathTemplate.match(
      projectLocationName
    ).project;
  }

  /**
   * Parse the location from ProjectLocation resource.
   *
   * @param {string} projectLocationName
   *   A fully-qualified path representing project_location resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProjectLocationName(projectLocationName: string) {
    return this._pathTemplates.projectLocationPathTemplate.match(
      projectLocationName
    ).location;
  }

  /**
   * Return a fully-qualified projectLocationIntent resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} intent
   * @returns {string} Resource name string.
   */
  projectLocationIntentPath(project: string, location: string, intent: string) {
    return this._pathTemplates.projectLocationIntentPathTemplate.render({
      project,
      location,
      intent,
    });
  }

  /**
   * Parse the project from ProjectLocationIntent resource.
   *
   * @param {string} projectLocationIntentName
   *   A fully-qualified path representing project_location_intent resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectLocationIntentName(projectLocationIntentName: string) {
    return this._pathTemplates.projectLocationIntentPathTemplate.match(
      projectLocationIntentName
    ).project;
  }

  /**
   * Parse the location from ProjectLocationIntent resource.
   *
   * @param {string} projectLocationIntentName
   *   A fully-qualified path representing project_location_intent resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromProjectLocationIntentName(
    projectLocationIntentName: string
  ) {
    return this._pathTemplates.projectLocationIntentPathTemplate.match(
      projectLocationIntentName
    ).location;
  }

  /**
   * Parse the intent from ProjectLocationIntent resource.
   *
   * @param {string} projectLocationIntentName
   *   A fully-qualified path representing project_location_intent resource.
   * @returns {string} A string representing the intent.
   */
  matchIntentFromProjectLocationIntentName(projectLocationIntentName: string) {
    return this._pathTemplates.projectLocationIntentPathTemplate.match(
      projectLocationIntentName
    ).intent;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.contextsStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
