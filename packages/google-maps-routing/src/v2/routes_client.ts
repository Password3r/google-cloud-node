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
} from 'google-gax';
import {PassThrough} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');

/**
 * Client JSON configuration object, loaded from
 * `src/v2/routes_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './routes_client_config.json';
const version = require('../../../package.json').version;

/**
 *  The Routes API.
 * @class
 * @memberof v2
 */
export class RoutesClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  private _universeDomain: string;
  private _servicePath: string;
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  routesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of RoutesClient.
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
   *     const client = new RoutesClient({fallback: true}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof RoutesClient;
    if (
      opts?.universe_domain &&
      opts?.universeDomain &&
      opts?.universe_domain !== opts?.universeDomain
    ) {
      throw new Error(
        'Please set either universe_domain or universeDomain, but not both.'
      );
    }
    const universeDomainEnvVar =
      typeof process === 'object' && typeof process.env === 'object'
        ? process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN']
        : undefined;
    this._universeDomain =
      opts?.universeDomain ??
      opts?.universe_domain ??
      universeDomainEnvVar ??
      'googleapis.com';
    this._servicePath = 'routes.' + this._universeDomain;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || this._servicePath;
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
    if (servicePath !== this._servicePath && !('scopes' in opts)) {
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
    this.auth.defaultServicePath = this._servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === this._servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process === 'object' && 'versions' in process) {
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

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this.descriptors.stream = {
      computeRouteMatrix: new this._gaxModule.StreamDescriptor(
        this._gaxModule.StreamType.SERVER_STREAMING,
        !!opts.fallback,
        !!opts.gaxServerStreamingRetries
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.maps.routing.v2.Routes',
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
    if (this.routesStub) {
      return this.routesStub;
    }

    // Put together the "service stub" for
    // google.maps.routing.v2.Routes.
    this.routesStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.maps.routing.v2.Routes'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.maps.routing.v2.Routes,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const routesStubMethods = ['computeRoutes', 'computeRouteMatrix'];
    for (const methodName of routesStubMethods) {
      const callPromise = this.routesStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              if (methodName in this.descriptors.stream) {
                const stream = new PassThrough();
                setImmediate(() => {
                  stream.emit(
                    'error',
                    new this._gaxModule.GoogleError(
                      'The client has already been closed.'
                    )
                  );
                });
                return stream;
              }
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.stream[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.routesStub;
  }

  /**
   * The DNS address for this API service.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      process.emitWarning(
        'Static servicePath is deprecated, please use the instance method instead.',
        'DeprecationWarning'
      );
    }
    return 'routes.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      process.emitWarning(
        'Static apiEndpoint is deprecated, please use the instance method instead.',
        'DeprecationWarning'
      );
    }
    return 'routes.googleapis.com';
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  get apiEndpoint() {
    return this._servicePath;
  }

  get universeDomain() {
    return this._universeDomain;
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
    return [];
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
   * Returns the primary route along with optional alternate routes, given a set
   * of terminal and intermediate waypoints.
   *
   * **NOTE:** This method requires that you specify a response field mask in
   * the input. You can provide the response field mask by using URL parameter
   * `$fields` or `fields`, or by using an HTTP/gRPC header `X-Goog-FieldMask`
   * (see the [available URL parameters and
   * headers](https://cloud.google.com/apis/docs/system-parameters)). The value
   * is a comma separated list of field paths. See detailed documentation about
   * [how to construct the field
   * paths](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto).
   *
   * For example, in this method:
   *
   * * Field mask of all available fields (for manual inspection):
   *   `X-Goog-FieldMask: *`
   * * Field mask of Route-level duration, distance, and polyline (an example
   * production setup):
   *   `X-Goog-FieldMask:
   *   routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline`
   *
   * Google discourage the use of the wildcard (`*`) response field mask, or
   * specifying the field mask at the top level (`routes`), because:
   *
   * * Selecting only the fields that you need helps our server save computation
   * cycles, allowing us to return the result to you with a lower latency.
   * * Selecting only the fields that you need
   * in your production job ensures stable latency performance. We might add
   * more response fields in the future, and those new fields might require
   * extra computation time. If you select all fields, or if you select all
   * fields at the top level, then you might experience performance degradation
   * because any new field we add will be automatically included in the
   * response.
   * * Selecting only the fields that you need results in a smaller response
   * size, and thus higher network throughput.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.maps.routing.v2.Waypoint} request.origin
   *   Required. Origin waypoint.
   * @param {google.maps.routing.v2.Waypoint} request.destination
   *   Required. Destination waypoint.
   * @param {number[]} [request.intermediates]
   *   Optional. A set of waypoints along the route (excluding terminal points),
   *   for either stopping at or passing by. Up to 25 intermediate waypoints are
   *   supported.
   * @param {google.maps.routing.v2.RouteTravelMode} [request.travelMode]
   *   Optional. Specifies the mode of transportation.
   * @param {google.maps.routing.v2.RoutingPreference} [request.routingPreference]
   *   Optional. Specifies how to compute the route. The server
   *   attempts to use the selected routing preference to compute the route. If
   *    the routing preference results in an error or an extra long latency, then
   *   an error is returned. You can specify this option only when the
   *   `travel_mode` is `DRIVE` or `TWO_WHEELER`, otherwise the request fails.
   * @param {google.maps.routing.v2.PolylineQuality} [request.polylineQuality]
   *   Optional. Specifies your preference for the quality of the polyline.
   * @param {google.maps.routing.v2.PolylineEncoding} [request.polylineEncoding]
   *   Optional. Specifies the preferred encoding for the polyline.
   * @param {google.protobuf.Timestamp} [request.departureTime]
   *   Optional. The departure time. If you don't set this value, then this value
   *   defaults to the time that you made the request.
   *   NOTE: You can only specify a `departure_time` in the past when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|`RouteTravelMode`} is set to
   *   `TRANSIT`. Transit trips are available for up to 7 days in the past or 100
   *   days in the future.
   * @param {google.protobuf.Timestamp} [request.arrivalTime]
   *   Optional. The arrival time.
   *   NOTE: Can only be set when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|RouteTravelMode} is set to
   *   `TRANSIT`. You can specify either `departure_time` or `arrival_time`, but
   *   not both. Transit trips are available for up to 7 days in the past or 100
   *   days in the future.
   * @param {boolean} [request.computeAlternativeRoutes]
   *   Optional. Specifies whether to calculate alternate routes in addition to
   *   the route. No alternative routes are returned for requests that have
   *   intermediate waypoints.
   * @param {google.maps.routing.v2.RouteModifiers} [request.routeModifiers]
   *   Optional. A set of conditions to satisfy that affect the way routes are
   *   calculated.
   * @param {string} [request.languageCode]
   *   Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more
   *   information, see [Unicode Locale
   *   Identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).
   *   See [Language
   *   Support](https://developers.google.com/maps/faq#languagesupport)
   *   for the list of supported languages. When you don't provide this value, the
   *   display language is inferred from the location of the route request.
   * @param {string} [request.regionCode]
   *   Optional. The region code, specified as a ccTLD ("top-level domain")
   *   two-character value. For more information see [Country code top-level
   *   domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains).
   * @param {google.maps.routing.v2.Units} [request.units]
   *   Optional. Specifies the units of measure for the display fields. These
   *   fields include the `instruction` field in
   *   {@link protos.google.maps.routing.v2.NavigationInstruction|`NavigationInstruction`}.
   *   The units of measure used for the route, leg, step distance, and duration
   *   are not affected by this value. If you don't provide this value, then the
   *   display units are inferred from the location of the first origin.
   * @param {boolean} [request.optimizeWaypointOrder]
   *   Optional. If set to true, the service attempts to minimize the overall cost
   *   of the route by re-ordering the specified intermediate waypoints. The
   *   request fails if any of the intermediate waypoints is a `via` waypoint. Use
   *   `ComputeRoutesResponse.Routes.optimized_intermediate_waypoint_index` to
   *   find the new ordering.
   *   If `ComputeRoutesResponseroutes.optimized_intermediate_waypoint_index` is
   *   not requested in the `X-Goog-FieldMask` header, the request fails.
   *   If `optimize_waypoint_order` is set to false,
   *   `ComputeRoutesResponse.optimized_intermediate_waypoint_index` will be
   *   empty.
   * @param {number[]} [request.requestedReferenceRoutes]
   *   Optional. Specifies what reference routes to calculate as part of the
   *   request in addition to the default route. A reference route is a route with
   *   a different route calculation objective than the default route. For example
   *   a `FUEL_EFFICIENT` reference route calculation takes into account various
   *   parameters that would generate an optimal fuel efficient route.
   * @param {number[]} [request.extraComputations]
   *   Optional. A list of extra computations which may be used to complete the
   *   request. Note: These extra computations may return extra fields on the
   *   response. These extra fields must also be specified in the field mask to be
   *   returned in the response.
   * @param {google.maps.routing.v2.TrafficModel} [request.trafficModel]
   *   Optional. Specifies the assumptions to use when calculating time in
   *   traffic. This setting affects the value returned in the duration field in
   *   the
   *   {@link protos.google.maps.routing.v2.Route|`Route`} and
   *   {@link protos.google.maps.routing.v2.RouteLeg|`RouteLeg`} which contains the predicted
   *   time in traffic based on historical averages.
   *   `TrafficModel` is only available for requests that have set
   *   {@link protos.google.maps.routing.v2.RoutingPreference|`RoutingPreference`} to
   *   `TRAFFIC_AWARE_OPTIMAL` and
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|`RouteTravelMode`} to `DRIVE`.
   *   Defaults to `BEST_GUESS` if traffic is requested and `TrafficModel` is not
   *   specified.
   * @param {google.maps.routing.v2.TransitPreferences} [request.transitPreferences]
   *   Optional. Specifies preferences that influence the route returned for
   *   `TRANSIT` routes. NOTE: You can only specify a `transit_preferences` when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|`RouteTravelMode`} is set to
   *   `TRANSIT`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.maps.routing.v2.ComputeRoutesResponse|ComputeRoutesResponse}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v2/routes.compute_routes.js</caption>
   * region_tag:routes_v2_generated_Routes_ComputeRoutes_async
   */
  computeRoutes(
    request?: protos.google.maps.routing.v2.IComputeRoutesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.maps.routing.v2.IComputeRoutesResponse,
      protos.google.maps.routing.v2.IComputeRoutesRequest | undefined,
      {} | undefined,
    ]
  >;
  computeRoutes(
    request: protos.google.maps.routing.v2.IComputeRoutesRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.maps.routing.v2.IComputeRoutesResponse,
      protos.google.maps.routing.v2.IComputeRoutesRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  computeRoutes(
    request: protos.google.maps.routing.v2.IComputeRoutesRequest,
    callback: Callback<
      protos.google.maps.routing.v2.IComputeRoutesResponse,
      protos.google.maps.routing.v2.IComputeRoutesRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  computeRoutes(
    request?: protos.google.maps.routing.v2.IComputeRoutesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.maps.routing.v2.IComputeRoutesResponse,
          | protos.google.maps.routing.v2.IComputeRoutesRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.maps.routing.v2.IComputeRoutesResponse,
      protos.google.maps.routing.v2.IComputeRoutesRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.maps.routing.v2.IComputeRoutesResponse,
      protos.google.maps.routing.v2.IComputeRoutesRequest | undefined,
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
    this.initialize();
    return this.innerApiCalls.computeRoutes(request, options, callback);
  }

  /**
   * Takes in a list of origins and destinations and returns a stream containing
   * route information for each combination of origin and destination.
   *
   * **NOTE:** This method requires that you specify a response field mask in
   * the input. You can provide the response field mask by using the URL
   * parameter `$fields` or `fields`, or by using the HTTP/gRPC header
   * `X-Goog-FieldMask` (see the [available URL parameters and
   * headers](https://cloud.google.com/apis/docs/system-parameters)).
   * The value is a comma separated list of field paths. See this detailed
   * documentation about [how to construct the field
   * paths](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto).
   *
   * For example, in this method:
   *
   * * Field mask of all available fields (for manual inspection):
   *   `X-Goog-FieldMask: *`
   * * Field mask of route durations, distances, element status, condition, and
   *   element indices (an example production setup):
   *   `X-Goog-FieldMask:
   *   originIndex,destinationIndex,status,condition,distanceMeters,duration`
   *
   * It is critical that you include `status` in your field mask as otherwise
   * all messages will appear to be OK. Google discourages the use of the
   * wildcard (`*`) response field mask, because:
   *
   * * Selecting only the fields that you need helps our server save computation
   * cycles, allowing us to return the result to you with a lower latency.
   * * Selecting only the fields that you need in your production job ensures
   * stable latency performance. We might add more response fields in the
   * future, and those new fields might require extra computation time. If you
   * select all fields, or if you select all fields at the top level, then you
   * might experience performance degradation because any new field we add will
   * be automatically included in the response.
   * * Selecting only the fields that you need results in a smaller response
   * size, and thus higher network throughput.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number[]} request.origins
   *   Required. Array of origins, which determines the rows of the response
   *   matrix. Several size restrictions apply to the cardinality of origins and
   *   destinations:
   *
   *   * The sum of the number of origins + the number of destinations specified
   *   as either `place_id` or `address` must be no greater than 50.
   *   * The product of number of origins × number of destinations must be no
   *   greater than 625 in any case.
   *   * The product of the number of origins × number of destinations must be no
   *   greater than 100 if routing_preference is set to `TRAFFIC_AWARE_OPTIMAL`.
   *   * The product of the number of origins × number of destinations must be no
   *   greater than 100 if travel_mode is set to `TRANSIT`.
   * @param {number[]} request.destinations
   *   Required. Array of destinations, which determines the columns of the
   *   response matrix.
   * @param {google.maps.routing.v2.RouteTravelMode} [request.travelMode]
   *   Optional. Specifies the mode of transportation.
   * @param {google.maps.routing.v2.RoutingPreference} [request.routingPreference]
   *   Optional. Specifies how to compute the route. The server attempts to use
   *   the selected routing preference to compute the route. If the routing
   *   preference results in an error or an extra long latency, an error is
   *   returned. You can specify this option only when the `travel_mode` is
   *   `DRIVE` or `TWO_WHEELER`, otherwise the request fails.
   * @param {google.protobuf.Timestamp} [request.departureTime]
   *   Optional. The departure time. If you don't set this value, then this value
   *   defaults to the time that you made the request.
   *   NOTE: You can only specify a `departure_time` in the past when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|`RouteTravelMode`} is set to
   *   `TRANSIT`.
   * @param {google.protobuf.Timestamp} [request.arrivalTime]
   *   Optional. The arrival time.
   *   NOTE: Can only be set when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|`RouteTravelMode`} is set to
   *   `TRANSIT`. You can specify either `departure_time` or `arrival_time`, but
   *   not both.
   * @param {string} [request.languageCode]
   *   Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more
   *   information, see [Unicode Locale
   *   Identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).
   *   See [Language
   *   Support](https://developers.google.com/maps/faq#languagesupport)
   *   for the list of supported languages. When you don't provide this value, the
   *   display language is inferred from the location of the first origin.
   * @param {string} [request.regionCode]
   *   Optional. The region code, specified as a ccTLD ("top-level domain")
   *   two-character value. For more information see [Country code top-level
   *   domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains).
   * @param {google.maps.routing.v2.Units} [request.units]
   *   Optional. Specifies the units of measure for the display fields.
   * @param {number[]} [request.extraComputations]
   *   Optional. A list of extra computations which may be used to complete the
   *   request. Note: These extra computations may return extra fields on the
   *   response. These extra fields must also be specified in the field mask to be
   *   returned in the response.
   * @param {google.maps.routing.v2.TrafficModel} [request.trafficModel]
   *   Optional. Specifies the assumptions to use when calculating time in
   *   traffic. This setting affects the value returned in the duration field in
   *   the {@link protos.google.maps.routing.v2.RouteMatrixElement|RouteMatrixElement} which
   *   contains the predicted time in traffic based on historical averages.
   *   {@link protos.google.maps.routing.v2.RoutingPreference|RoutingPreference} to
   *   `TRAFFIC_AWARE_OPTIMAL` and
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|RouteTravelMode} to `DRIVE`.
   *   Defaults to `BEST_GUESS` if traffic is requested and `TrafficModel` is not
   *   specified.
   * @param {google.maps.routing.v2.TransitPreferences} [request.transitPreferences]
   *   Optional. Specifies preferences that influence the route returned for
   *   `TRANSIT` routes. NOTE: You can only specify a `transit_preferences` when
   *   {@link protos.google.maps.routing.v2.RouteTravelMode|RouteTravelMode} is set to
   *   `TRANSIT`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits {@link protos.google.maps.routing.v2.RouteMatrixElement|RouteMatrixElement} on 'data' event.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#server-streaming | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v2/routes.compute_route_matrix.js</caption>
   * region_tag:routes_v2_generated_Routes_ComputeRouteMatrix_async
   */
  computeRouteMatrix(
    request?: protos.google.maps.routing.v2.IComputeRouteMatrixRequest,
    options?: CallOptions
  ): gax.CancellableStream {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.computeRouteMatrix(request, options);
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.routesStub && !this._terminated) {
      return this.routesStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
