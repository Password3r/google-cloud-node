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
import type {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v2/comment_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './comment_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  A service to manage comments on cases.
 * @class
 * @memberof v2
 */
export class CommentServiceClient {
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
  commentServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CommentServiceClient.
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
   *     const client = new CommentServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof CommentServiceClient;
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

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      organizationCasePathTemplate: new this._gaxModule.PathTemplate(
        'organizations/{organization}/cases/{case}'
      ),
      organizationCaseAttachmentIdPathTemplate: new this._gaxModule.PathTemplate(
        'organizations/{organization}/cases/{case}/attachments/{attachment_id}'
      ),
      organizationCaseCommentPathTemplate: new this._gaxModule.PathTemplate(
        'organizations/{organization}/cases/{case}/comments/{comment}'
      ),
      projectCasePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/cases/{case}'
      ),
      projectCaseAttachmentIdPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/cases/{case}/attachments/{attachment_id}'
      ),
      projectCaseCommentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/cases/{case}/comments/{comment}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listComments:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'comments')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.support.v2.CommentService', gapicConfig as gax.ClientConfig,
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
    if (this.commentServiceStub) {
      return this.commentServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.support.v2.CommentService.
    this.commentServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.support.v2.CommentService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.support.v2.CommentService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const commentServiceStubMethods =
        ['listComments', 'createComment'];
    for (const methodName of commentServiceStubMethods) {
      const callPromise = this.commentServiceStub.then(
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
        this.descriptors.page[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.commentServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'cloudsupport.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'cloudsupport.googleapis.com';
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
      'https://www.googleapis.com/auth/cloud-platform'
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
 * Add a new comment to the specified Case.
 * The comment object must have the following fields set: body.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name of Case to which this comment should be added.
 * @param {google.cloud.support.v2.Comment} request.comment
 *   Required. The Comment object to be added to this Case.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.cloud.support.v2.Comment|Comment}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v2/comment_service.create_comment.js</caption>
 * region_tag:cloudsupport_v2_generated_CommentService_CreateComment_async
 */
  createComment(
      request?: protos.google.cloud.support.v2.ICreateCommentRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.support.v2.IComment,
        protos.google.cloud.support.v2.ICreateCommentRequest|undefined, {}|undefined
      ]>;
  createComment(
      request: protos.google.cloud.support.v2.ICreateCommentRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.support.v2.IComment,
          protos.google.cloud.support.v2.ICreateCommentRequest|null|undefined,
          {}|null|undefined>): void;
  createComment(
      request: protos.google.cloud.support.v2.ICreateCommentRequest,
      callback: Callback<
          protos.google.cloud.support.v2.IComment,
          protos.google.cloud.support.v2.ICreateCommentRequest|null|undefined,
          {}|null|undefined>): void;
  createComment(
      request?: protos.google.cloud.support.v2.ICreateCommentRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.support.v2.IComment,
          protos.google.cloud.support.v2.ICreateCommentRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.support.v2.IComment,
          protos.google.cloud.support.v2.ICreateCommentRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.support.v2.IComment,
        protos.google.cloud.support.v2.ICreateCommentRequest|undefined, {}|undefined
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
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.createComment(request, options, callback);
  }

 /**
 * Retrieve all Comments associated with the Case object.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name of Case object for which comments should be
 *   listed.
 * @param {number} request.pageSize
 *   The maximum number of comments fetched with each request. Defaults to 10.
 * @param {string} request.pageToken
 *   A token identifying the page of results to return. If unspecified, the
 *   first page is retrieved.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of {@link protos.google.cloud.support.v2.Comment|Comment}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listCommentsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
 *   for more details and examples.
 */
  listComments(
      request?: protos.google.cloud.support.v2.IListCommentsRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.support.v2.IComment[],
        protos.google.cloud.support.v2.IListCommentsRequest|null,
        protos.google.cloud.support.v2.IListCommentsResponse
      ]>;
  listComments(
      request: protos.google.cloud.support.v2.IListCommentsRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.google.cloud.support.v2.IListCommentsRequest,
          protos.google.cloud.support.v2.IListCommentsResponse|null|undefined,
          protos.google.cloud.support.v2.IComment>): void;
  listComments(
      request: protos.google.cloud.support.v2.IListCommentsRequest,
      callback: PaginationCallback<
          protos.google.cloud.support.v2.IListCommentsRequest,
          protos.google.cloud.support.v2.IListCommentsResponse|null|undefined,
          protos.google.cloud.support.v2.IComment>): void;
  listComments(
      request?: protos.google.cloud.support.v2.IListCommentsRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.google.cloud.support.v2.IListCommentsRequest,
          protos.google.cloud.support.v2.IListCommentsResponse|null|undefined,
          protos.google.cloud.support.v2.IComment>,
      callback?: PaginationCallback<
          protos.google.cloud.support.v2.IListCommentsRequest,
          protos.google.cloud.support.v2.IListCommentsResponse|null|undefined,
          protos.google.cloud.support.v2.IComment>):
      Promise<[
        protos.google.cloud.support.v2.IComment[],
        protos.google.cloud.support.v2.IListCommentsRequest|null,
        protos.google.cloud.support.v2.IListCommentsResponse
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
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.listComments(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name of Case object for which comments should be
 *   listed.
 * @param {number} request.pageSize
 *   The maximum number of comments fetched with each request. Defaults to 10.
 * @param {string} request.pageToken
 *   A token identifying the page of results to return. If unspecified, the
 *   first page is retrieved.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing {@link protos.google.cloud.support.v2.Comment|Comment} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listCommentsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
 *   for more details and examples.
 */
  listCommentsStream(
      request?: protos.google.cloud.support.v2.IListCommentsRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listComments'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listComments.createStream(
      this.innerApiCalls.listComments as GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listComments`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name of Case object for which comments should be
 *   listed.
 * @param {number} request.pageSize
 *   The maximum number of comments fetched with each request. Defaults to 10.
 * @param {string} request.pageToken
 *   A token identifying the page of results to return. If unspecified, the
 *   first page is retrieved.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
 *   When you iterate the returned iterable, each element will be an object representing
 *   {@link protos.google.cloud.support.v2.Comment|Comment}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v2/comment_service.list_comments.js</caption>
 * region_tag:cloudsupport_v2_generated_CommentService_ListComments_async
 */
  listCommentsAsync(
      request?: protos.google.cloud.support.v2.IListCommentsRequest,
      options?: CallOptions):
    AsyncIterable<protos.google.cloud.support.v2.IComment>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listComments'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listComments.asyncIterate(
      this.innerApiCalls['listComments'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.cloud.support.v2.IComment>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified organizationCase resource name string.
   *
   * @param {string} organization
   * @param {string} caseParam
   * @returns {string} Resource name string.
   */
  organizationCasePath(organization:string,caseParam:string) {
    return this.pathTemplates.organizationCasePathTemplate.render({
      organization: organization,
      case: caseParam,
    });
  }

  /**
   * Parse the organization from OrganizationCase resource.
   *
   * @param {string} organizationCaseName
   *   A fully-qualified path representing organization_case resource.
   * @returns {string} A string representing the organization.
   */
  matchOrganizationFromOrganizationCaseName(organizationCaseName: string) {
    return this.pathTemplates.organizationCasePathTemplate.match(organizationCaseName).organization;
  }

  /**
   * Parse the case from OrganizationCase resource.
   *
   * @param {string} organizationCaseName
   *   A fully-qualified path representing organization_case resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromOrganizationCaseName(organizationCaseName: string) {
    return this.pathTemplates.organizationCasePathTemplate.match(organizationCaseName).case;
  }

  /**
   * Return a fully-qualified organizationCaseAttachmentId resource name string.
   *
   * @param {string} organization
   * @param {string} caseParam
   * @param {string} attachment_id
   * @returns {string} Resource name string.
   */
  organizationCaseAttachmentIdPath(organization:string,caseParam:string,attachmentId:string) {
    return this.pathTemplates.organizationCaseAttachmentIdPathTemplate.render({
      organization: organization,
      case: caseParam,
      attachment_id: attachmentId,
    });
  }

  /**
   * Parse the organization from OrganizationCaseAttachmentId resource.
   *
   * @param {string} organizationCaseAttachmentIdName
   *   A fully-qualified path representing organization_case_attachment_id resource.
   * @returns {string} A string representing the organization.
   */
  matchOrganizationFromOrganizationCaseAttachmentIdName(organizationCaseAttachmentIdName: string) {
    return this.pathTemplates.organizationCaseAttachmentIdPathTemplate.match(organizationCaseAttachmentIdName).organization;
  }

  /**
   * Parse the case from OrganizationCaseAttachmentId resource.
   *
   * @param {string} organizationCaseAttachmentIdName
   *   A fully-qualified path representing organization_case_attachment_id resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromOrganizationCaseAttachmentIdName(organizationCaseAttachmentIdName: string) {
    return this.pathTemplates.organizationCaseAttachmentIdPathTemplate.match(organizationCaseAttachmentIdName).case;
  }

  /**
   * Parse the attachment_id from OrganizationCaseAttachmentId resource.
   *
   * @param {string} organizationCaseAttachmentIdName
   *   A fully-qualified path representing organization_case_attachment_id resource.
   * @returns {string} A string representing the attachment_id.
   */
  matchAttachmentIdFromOrganizationCaseAttachmentIdName(organizationCaseAttachmentIdName: string) {
    return this.pathTemplates.organizationCaseAttachmentIdPathTemplate.match(organizationCaseAttachmentIdName).attachment_id;
  }

  /**
   * Return a fully-qualified organizationCaseComment resource name string.
   *
   * @param {string} organization
   * @param {string} caseParam
   * @param {string} comment
   * @returns {string} Resource name string.
   */
  organizationCaseCommentPath(organization:string,caseParam:string,comment:string) {
    return this.pathTemplates.organizationCaseCommentPathTemplate.render({
      organization: organization,
      case: caseParam,
      comment: comment,
    });
  }

  /**
   * Parse the organization from OrganizationCaseComment resource.
   *
   * @param {string} organizationCaseCommentName
   *   A fully-qualified path representing organization_case_comment resource.
   * @returns {string} A string representing the organization.
   */
  matchOrganizationFromOrganizationCaseCommentName(organizationCaseCommentName: string) {
    return this.pathTemplates.organizationCaseCommentPathTemplate.match(organizationCaseCommentName).organization;
  }

  /**
   * Parse the case from OrganizationCaseComment resource.
   *
   * @param {string} organizationCaseCommentName
   *   A fully-qualified path representing organization_case_comment resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromOrganizationCaseCommentName(organizationCaseCommentName: string) {
    return this.pathTemplates.organizationCaseCommentPathTemplate.match(organizationCaseCommentName).case;
  }

  /**
   * Parse the comment from OrganizationCaseComment resource.
   *
   * @param {string} organizationCaseCommentName
   *   A fully-qualified path representing organization_case_comment resource.
   * @returns {string} A string representing the comment.
   */
  matchCommentFromOrganizationCaseCommentName(organizationCaseCommentName: string) {
    return this.pathTemplates.organizationCaseCommentPathTemplate.match(organizationCaseCommentName).comment;
  }

  /**
   * Return a fully-qualified projectCase resource name string.
   *
   * @param {string} project
   * @param {string} caseParam
   * @returns {string} Resource name string.
   */
  projectCasePath(project:string,caseParam:string) {
    return this.pathTemplates.projectCasePathTemplate.render({
      project: project,
      case: caseParam,
    });
  }

  /**
   * Parse the project from ProjectCase resource.
   *
   * @param {string} projectCaseName
   *   A fully-qualified path representing project_case resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectCaseName(projectCaseName: string) {
    return this.pathTemplates.projectCasePathTemplate.match(projectCaseName).project;
  }

  /**
   * Parse the case from ProjectCase resource.
   *
   * @param {string} projectCaseName
   *   A fully-qualified path representing project_case resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromProjectCaseName(projectCaseName: string) {
    return this.pathTemplates.projectCasePathTemplate.match(projectCaseName).case;
  }

  /**
   * Return a fully-qualified projectCaseAttachmentId resource name string.
   *
   * @param {string} project
   * @param {string} caseParam
   * @param {string} attachment_id
   * @returns {string} Resource name string.
   */
  projectCaseAttachmentIdPath(project:string,caseParam:string,attachmentId:string) {
    return this.pathTemplates.projectCaseAttachmentIdPathTemplate.render({
      project: project,
      case: caseParam,
      attachment_id: attachmentId,
    });
  }

  /**
   * Parse the project from ProjectCaseAttachmentId resource.
   *
   * @param {string} projectCaseAttachmentIdName
   *   A fully-qualified path representing project_case_attachment_id resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectCaseAttachmentIdName(projectCaseAttachmentIdName: string) {
    return this.pathTemplates.projectCaseAttachmentIdPathTemplate.match(projectCaseAttachmentIdName).project;
  }

  /**
   * Parse the case from ProjectCaseAttachmentId resource.
   *
   * @param {string} projectCaseAttachmentIdName
   *   A fully-qualified path representing project_case_attachment_id resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromProjectCaseAttachmentIdName(projectCaseAttachmentIdName: string) {
    return this.pathTemplates.projectCaseAttachmentIdPathTemplate.match(projectCaseAttachmentIdName).case;
  }

  /**
   * Parse the attachment_id from ProjectCaseAttachmentId resource.
   *
   * @param {string} projectCaseAttachmentIdName
   *   A fully-qualified path representing project_case_attachment_id resource.
   * @returns {string} A string representing the attachment_id.
   */
  matchAttachmentIdFromProjectCaseAttachmentIdName(projectCaseAttachmentIdName: string) {
    return this.pathTemplates.projectCaseAttachmentIdPathTemplate.match(projectCaseAttachmentIdName).attachment_id;
  }

  /**
   * Return a fully-qualified projectCaseComment resource name string.
   *
   * @param {string} project
   * @param {string} caseParam
   * @param {string} comment
   * @returns {string} Resource name string.
   */
  projectCaseCommentPath(project:string,caseParam:string,comment:string) {
    return this.pathTemplates.projectCaseCommentPathTemplate.render({
      project: project,
      case: caseParam,
      comment: comment,
    });
  }

  /**
   * Parse the project from ProjectCaseComment resource.
   *
   * @param {string} projectCaseCommentName
   *   A fully-qualified path representing project_case_comment resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectCaseCommentName(projectCaseCommentName: string) {
    return this.pathTemplates.projectCaseCommentPathTemplate.match(projectCaseCommentName).project;
  }

  /**
   * Parse the case from ProjectCaseComment resource.
   *
   * @param {string} projectCaseCommentName
   *   A fully-qualified path representing project_case_comment resource.
   * @returns {string} A string representing the case.
   */
  matchCaseFromProjectCaseCommentName(projectCaseCommentName: string) {
    return this.pathTemplates.projectCaseCommentPathTemplate.match(projectCaseCommentName).case;
  }

  /**
   * Parse the comment from ProjectCaseComment resource.
   *
   * @param {string} projectCaseCommentName
   *   A fully-qualified path representing project_case_comment resource.
   * @returns {string} A string representing the comment.
   */
  matchCommentFromProjectCaseCommentName(projectCaseCommentName: string) {
    return this.pathTemplates.projectCaseCommentPathTemplate.match(projectCaseCommentName).comment;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.commentServiceStub && !this._terminated) {
      return this.commentServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
