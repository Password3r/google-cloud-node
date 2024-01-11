// Copyright 2024 Google LLC
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
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/regional_inventory_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './regional_inventory_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service to manage regional inventory for products. There is also separate
 *  `regions` resource and API to manage regions definitions.
 * @class
 * @memberof v1beta
 */
export class RegionalInventoryServiceClient {
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
  pathTemplates: {[name: string]: gax.PathTemplate};
  regionalInventoryServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of RegionalInventoryServiceClient.
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
   *     const client = new RegionalInventoryServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof RegionalInventoryServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

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
    } else {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      localInventoryPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/products/{product}/localInventories/{store_code}'
      ),
      regionalInventoryPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/products/{product}/regionalInventories/{region}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listRegionalInventories: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'regionalInventories'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.shopping.merchant.inventories.v1beta.RegionalInventoryService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    if (this.regionalInventoryServiceStub) {
      return this.regionalInventoryServiceStub;
    }

    // Put together the "service stub" for
    // google.shopping.merchant.inventories.v1beta.RegionalInventoryService.
    this.regionalInventoryServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.shopping.merchant.inventories.v1beta.RegionalInventoryService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.shopping.merchant.inventories.v1beta
            .RegionalInventoryService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const regionalInventoryServiceStubMethods = [
      'listRegionalInventories',
      'insertRegionalInventory',
      'deleteRegionalInventory',
    ];
    for (const methodName of regionalInventoryServiceStubMethods) {
      const callPromise = this.regionalInventoryServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
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

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.regionalInventoryServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'merchantapi.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'merchantapi.googleapis.com';
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
    return ['https://www.googleapis.com/auth/content'];
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
  /**
   * Inserts a `RegionalInventory` to a given product in your
   * merchant account.
   *
   * Replaces the full `RegionalInventory` resource if an entry with the same
   * {@link protos.google.shopping.merchant.inventories.v1beta.RegionalInventory.region|`region`}
   * already exists for the product.
   *
   * It might take up to 30 minutes for the new or updated `RegionalInventory`
   * resource to appear in products.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The account and product where this inventory will be inserted.
   *   Format: `accounts/{account}/products/{product}`
   * @param {google.shopping.merchant.inventories.v1beta.RegionalInventory} request.regionalInventory
   *   Required. Regional inventory information to add to the product. If the
   *   product already has a `RegionalInventory` resource for the same `region`,
   *   full replacement of the `RegionalInventory` resource is performed.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.shopping.merchant.inventories.v1beta.RegionalInventory|RegionalInventory}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/regional_inventory_service.insert_regional_inventory.js</caption>
   * region_tag:merchantapi_v1beta_generated_RegionalInventoryService_InsertRegionalInventory_async
   */
  insertRegionalInventory(
    request?: protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
      (
        | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
        | undefined
      ),
      {} | undefined,
    ]
  >;
  insertRegionalInventory(
    request: protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
      | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  insertRegionalInventory(
    request: protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest,
    callback: Callback<
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
      | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  insertRegionalInventory(
    request?: protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
          | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
      | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory,
      (
        | protos.google.shopping.merchant.inventories.v1beta.IInsertRegionalInventoryRequest
        | undefined
      ),
      {} | undefined,
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
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.insertRegionalInventory(
      request,
      options,
      callback
    );
  }
  /**
   * Deletes the specified `RegionalInventory` resource from the given product
   * in your merchant account.  It might take up to an hour for the
   * `RegionalInventory` to be deleted from the specific product.
   * Once you have received a successful delete response, wait for that
   * period before attempting a delete again.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the `RegionalInventory` resource to delete.
   *   Format:
   *   `accounts/{account}/products/{product}/regionalInventories/{region}`
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/regional_inventory_service.delete_regional_inventory.js</caption>
   * region_tag:merchantapi_v1beta_generated_RegionalInventoryService_DeleteRegionalInventory_async
   */
  deleteRegionalInventory(
    request?: protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      (
        | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
        | undefined
      ),
      {} | undefined,
    ]
  >;
  deleteRegionalInventory(
    request: protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  deleteRegionalInventory(
    request: protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  deleteRegionalInventory(
    request?: protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      (
        | protos.google.shopping.merchant.inventories.v1beta.IDeleteRegionalInventoryRequest
        | undefined
      ),
      {} | undefined,
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
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        name: request.name ?? '',
      });
    this.initialize();
    return this.innerApiCalls.deleteRegionalInventory(
      request,
      options,
      callback
    );
  }

  /**
   * Lists the `RegionalInventory` resources for the given product in your
   * merchant account. The response might contain fewer items than specified by
   * `pageSize`.  If `pageToken` was returned in previous request, it can be
   * used to obtain additional results.
   *
   * `RegionalInventory` resources are listed per product for a given account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The `name` of the parent product to list `RegionalInventory`
   *   resources for. Format: `accounts/{account}/products/{product}`
   * @param {number} request.pageSize
   *   The maximum number of `RegionalInventory` resources for the given product
   *   to return. The service returns fewer than this value if the number of
   *   inventories for the given product is less that than the `pageSize`. The
   *   default value is 25000. The maximum value is 100000; If a value higher than
   *   the maximum is specified, then the `pageSize` will default to the maximum.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListRegionalInventories` call.
   *   Provide the page token to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListRegionalInventories`
   *   must match the call that provided the page token. The token returned as
   *   {@link protos.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesResponse.next_page_token|nextPageToken}
   *   in the response to the previous request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of {@link protos.google.shopping.merchant.inventories.v1beta.RegionalInventory|RegionalInventory}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listRegionalInventoriesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listRegionalInventories(
    request?: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory[],
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest | null,
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse,
    ]
  >;
  listRegionalInventories(
    request: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
      | protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse
      | null
      | undefined,
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory
    >
  ): void;
  listRegionalInventories(
    request: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    callback: PaginationCallback<
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
      | protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse
      | null
      | undefined,
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory
    >
  ): void;
  listRegionalInventories(
    request?: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
          | protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse
          | null
          | undefined,
          protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory
        >,
    callback?: PaginationCallback<
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
      | protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse
      | null
      | undefined,
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory
    >
  ): Promise<
    [
      protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory[],
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest | null,
      protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesResponse,
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
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.listRegionalInventories(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The `name` of the parent product to list `RegionalInventory`
   *   resources for. Format: `accounts/{account}/products/{product}`
   * @param {number} request.pageSize
   *   The maximum number of `RegionalInventory` resources for the given product
   *   to return. The service returns fewer than this value if the number of
   *   inventories for the given product is less that than the `pageSize`. The
   *   default value is 25000. The maximum value is 100000; If a value higher than
   *   the maximum is specified, then the `pageSize` will default to the maximum.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListRegionalInventories` call.
   *   Provide the page token to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListRegionalInventories`
   *   must match the call that provided the page token. The token returned as
   *   {@link protos.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesResponse.next_page_token|nextPageToken}
   *   in the response to the previous request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing {@link protos.google.shopping.merchant.inventories.v1beta.RegionalInventory|RegionalInventory} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listRegionalInventoriesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listRegionalInventoriesStream(
    request?: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    const defaultCallSettings = this._defaults['listRegionalInventories'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listRegionalInventories.createStream(
      this.innerApiCalls.listRegionalInventories as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listRegionalInventories`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The `name` of the parent product to list `RegionalInventory`
   *   resources for. Format: `accounts/{account}/products/{product}`
   * @param {number} request.pageSize
   *   The maximum number of `RegionalInventory` resources for the given product
   *   to return. The service returns fewer than this value if the number of
   *   inventories for the given product is less that than the `pageSize`. The
   *   default value is 25000. The maximum value is 100000; If a value higher than
   *   the maximum is specified, then the `pageSize` will default to the maximum.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListRegionalInventories` call.
   *   Provide the page token to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListRegionalInventories`
   *   must match the call that provided the page token. The token returned as
   *   {@link protos.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesResponse.next_page_token|nextPageToken}
   *   in the response to the previous request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
   *   When you iterate the returned iterable, each element will be an object representing
   *   {@link protos.google.shopping.merchant.inventories.v1beta.RegionalInventory|RegionalInventory}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/regional_inventory_service.list_regional_inventories.js</caption>
   * region_tag:merchantapi_v1beta_generated_RegionalInventoryService_ListRegionalInventories_async
   */
  listRegionalInventoriesAsync(
    request?: protos.google.shopping.merchant.inventories.v1beta.IListRegionalInventoriesRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    const defaultCallSettings = this._defaults['listRegionalInventories'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listRegionalInventories.asyncIterate(
      this.innerApiCalls['listRegionalInventories'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.shopping.merchant.inventories.v1beta.IRegionalInventory>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified localInventory resource name string.
   *
   * @param {string} account
   * @param {string} product
   * @param {string} store_code
   * @returns {string} Resource name string.
   */
  localInventoryPath(account: string, product: string, storeCode: string) {
    return this.pathTemplates.localInventoryPathTemplate.render({
      account: account,
      product: product,
      store_code: storeCode,
    });
  }

  /**
   * Parse the account from LocalInventory resource.
   *
   * @param {string} localInventoryName
   *   A fully-qualified path representing LocalInventory resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromLocalInventoryName(localInventoryName: string) {
    return this.pathTemplates.localInventoryPathTemplate.match(
      localInventoryName
    ).account;
  }

  /**
   * Parse the product from LocalInventory resource.
   *
   * @param {string} localInventoryName
   *   A fully-qualified path representing LocalInventory resource.
   * @returns {string} A string representing the product.
   */
  matchProductFromLocalInventoryName(localInventoryName: string) {
    return this.pathTemplates.localInventoryPathTemplate.match(
      localInventoryName
    ).product;
  }

  /**
   * Parse the store_code from LocalInventory resource.
   *
   * @param {string} localInventoryName
   *   A fully-qualified path representing LocalInventory resource.
   * @returns {string} A string representing the store_code.
   */
  matchStoreCodeFromLocalInventoryName(localInventoryName: string) {
    return this.pathTemplates.localInventoryPathTemplate.match(
      localInventoryName
    ).store_code;
  }

  /**
   * Return a fully-qualified regionalInventory resource name string.
   *
   * @param {string} account
   * @param {string} product
   * @param {string} region
   * @returns {string} Resource name string.
   */
  regionalInventoryPath(account: string, product: string, region: string) {
    return this.pathTemplates.regionalInventoryPathTemplate.render({
      account: account,
      product: product,
      region: region,
    });
  }

  /**
   * Parse the account from RegionalInventory resource.
   *
   * @param {string} regionalInventoryName
   *   A fully-qualified path representing RegionalInventory resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromRegionalInventoryName(regionalInventoryName: string) {
    return this.pathTemplates.regionalInventoryPathTemplate.match(
      regionalInventoryName
    ).account;
  }

  /**
   * Parse the product from RegionalInventory resource.
   *
   * @param {string} regionalInventoryName
   *   A fully-qualified path representing RegionalInventory resource.
   * @returns {string} A string representing the product.
   */
  matchProductFromRegionalInventoryName(regionalInventoryName: string) {
    return this.pathTemplates.regionalInventoryPathTemplate.match(
      regionalInventoryName
    ).product;
  }

  /**
   * Parse the region from RegionalInventory resource.
   *
   * @param {string} regionalInventoryName
   *   A fully-qualified path representing RegionalInventory resource.
   * @returns {string} A string representing the region.
   */
  matchRegionFromRegionalInventoryName(regionalInventoryName: string) {
    return this.pathTemplates.regionalInventoryPathTemplate.match(
      regionalInventoryName
    ).region;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.regionalInventoryServiceStub && !this._terminated) {
      return this.regionalInventoryServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}