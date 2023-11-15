// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("google-gax/build/src/protobuf").protobufMinimal);

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots._google_cloud_publicca_protos || ($protobuf.roots._google_cloud_publicca_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.cloud = (function() {
    
            /**
             * Namespace cloud.
             * @memberof google
             * @namespace
             */
            var cloud = {};
    
            cloud.security = (function() {
    
                /**
                 * Namespace security.
                 * @memberof google.cloud
                 * @namespace
                 */
                var security = {};
    
                security.publicca = (function() {
    
                    /**
                     * Namespace publicca.
                     * @memberof google.cloud.security
                     * @namespace
                     */
                    var publicca = {};
    
                    publicca.v1beta1 = (function() {
    
                        /**
                         * Namespace v1beta1.
                         * @memberof google.cloud.security.publicca
                         * @namespace
                         */
                        var v1beta1 = {};
    
                        v1beta1.ExternalAccountKey = (function() {
    
                            /**
                             * Properties of an ExternalAccountKey.
                             * @memberof google.cloud.security.publicca.v1beta1
                             * @interface IExternalAccountKey
                             * @property {string|null} [name] ExternalAccountKey name
                             * @property {string|null} [keyId] ExternalAccountKey keyId
                             * @property {Uint8Array|null} [b64MacKey] ExternalAccountKey b64MacKey
                             */
    
                            /**
                             * Constructs a new ExternalAccountKey.
                             * @memberof google.cloud.security.publicca.v1beta1
                             * @classdesc Represents an ExternalAccountKey.
                             * @implements IExternalAccountKey
                             * @constructor
                             * @param {google.cloud.security.publicca.v1beta1.IExternalAccountKey=} [properties] Properties to set
                             */
                            function ExternalAccountKey(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * ExternalAccountKey name.
                             * @member {string} name
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @instance
                             */
                            ExternalAccountKey.prototype.name = "";
    
                            /**
                             * ExternalAccountKey keyId.
                             * @member {string} keyId
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @instance
                             */
                            ExternalAccountKey.prototype.keyId = "";
    
                            /**
                             * ExternalAccountKey b64MacKey.
                             * @member {Uint8Array} b64MacKey
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @instance
                             */
                            ExternalAccountKey.prototype.b64MacKey = $util.newBuffer([]);
    
                            /**
                             * Creates a new ExternalAccountKey instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.IExternalAccountKey=} [properties] Properties to set
                             * @returns {google.cloud.security.publicca.v1beta1.ExternalAccountKey} ExternalAccountKey instance
                             */
                            ExternalAccountKey.create = function create(properties) {
                                return new ExternalAccountKey(properties);
                            };
    
                            /**
                             * Encodes the specified ExternalAccountKey message. Does not implicitly {@link google.cloud.security.publicca.v1beta1.ExternalAccountKey.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.IExternalAccountKey} message ExternalAccountKey message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExternalAccountKey.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                                if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.keyId);
                                if (message.b64MacKey != null && Object.hasOwnProperty.call(message, "b64MacKey"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.b64MacKey);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified ExternalAccountKey message, length delimited. Does not implicitly {@link google.cloud.security.publicca.v1beta1.ExternalAccountKey.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.IExternalAccountKey} message ExternalAccountKey message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExternalAccountKey.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an ExternalAccountKey message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.security.publicca.v1beta1.ExternalAccountKey} ExternalAccountKey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExternalAccountKey.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.name = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.keyId = reader.string();
                                            break;
                                        }
                                    case 3: {
                                            message.b64MacKey = reader.bytes();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an ExternalAccountKey message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.security.publicca.v1beta1.ExternalAccountKey} ExternalAccountKey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExternalAccountKey.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an ExternalAccountKey message.
                             * @function verify
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ExternalAccountKey.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.name != null && message.hasOwnProperty("name"))
                                    if (!$util.isString(message.name))
                                        return "name: string expected";
                                if (message.keyId != null && message.hasOwnProperty("keyId"))
                                    if (!$util.isString(message.keyId))
                                        return "keyId: string expected";
                                if (message.b64MacKey != null && message.hasOwnProperty("b64MacKey"))
                                    if (!(message.b64MacKey && typeof message.b64MacKey.length === "number" || $util.isString(message.b64MacKey)))
                                        return "b64MacKey: buffer expected";
                                return null;
                            };
    
                            /**
                             * Creates an ExternalAccountKey message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.security.publicca.v1beta1.ExternalAccountKey} ExternalAccountKey
                             */
                            ExternalAccountKey.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey)
                                    return object;
                                var message = new $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey();
                                if (object.name != null)
                                    message.name = String(object.name);
                                if (object.keyId != null)
                                    message.keyId = String(object.keyId);
                                if (object.b64MacKey != null)
                                    if (typeof object.b64MacKey === "string")
                                        $util.base64.decode(object.b64MacKey, message.b64MacKey = $util.newBuffer($util.base64.length(object.b64MacKey)), 0);
                                    else if (object.b64MacKey.length >= 0)
                                        message.b64MacKey = object.b64MacKey;
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an ExternalAccountKey message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.ExternalAccountKey} message ExternalAccountKey
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ExternalAccountKey.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.name = "";
                                    object.keyId = "";
                                    if (options.bytes === String)
                                        object.b64MacKey = "";
                                    else {
                                        object.b64MacKey = [];
                                        if (options.bytes !== Array)
                                            object.b64MacKey = $util.newBuffer(object.b64MacKey);
                                    }
                                }
                                if (message.name != null && message.hasOwnProperty("name"))
                                    object.name = message.name;
                                if (message.keyId != null && message.hasOwnProperty("keyId"))
                                    object.keyId = message.keyId;
                                if (message.b64MacKey != null && message.hasOwnProperty("b64MacKey"))
                                    object.b64MacKey = options.bytes === String ? $util.base64.encode(message.b64MacKey, 0, message.b64MacKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.b64MacKey) : message.b64MacKey;
                                return object;
                            };
    
                            /**
                             * Converts this ExternalAccountKey to JSON.
                             * @function toJSON
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ExternalAccountKey.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for ExternalAccountKey
                             * @function getTypeUrl
                             * @memberof google.cloud.security.publicca.v1beta1.ExternalAccountKey
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            ExternalAccountKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.security.publicca.v1beta1.ExternalAccountKey";
                            };
    
                            return ExternalAccountKey;
                        })();
    
                        v1beta1.PublicCertificateAuthorityService = (function() {
    
                            /**
                             * Constructs a new PublicCertificateAuthorityService service.
                             * @memberof google.cloud.security.publicca.v1beta1
                             * @classdesc Represents a PublicCertificateAuthorityService
                             * @extends $protobuf.rpc.Service
                             * @constructor
                             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                             */
                            function PublicCertificateAuthorityService(rpcImpl, requestDelimited, responseDelimited) {
                                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                            }
    
                            (PublicCertificateAuthorityService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PublicCertificateAuthorityService;
    
                            /**
                             * Creates new PublicCertificateAuthorityService service using the specified rpc implementation.
                             * @function create
                             * @memberof google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService
                             * @static
                             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                             * @returns {PublicCertificateAuthorityService} RPC service. Useful where requests and/or responses are streamed.
                             */
                            PublicCertificateAuthorityService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                                return new this(rpcImpl, requestDelimited, responseDelimited);
                            };
    
                            /**
                             * Callback as used by {@link google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService|createExternalAccountKey}.
                             * @memberof google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService
                             * @typedef CreateExternalAccountKeyCallback
                             * @type {function}
                             * @param {Error|null} error Error, if any
                             * @param {google.cloud.security.publicca.v1beta1.ExternalAccountKey} [response] ExternalAccountKey
                             */
    
                            /**
                             * Calls CreateExternalAccountKey.
                             * @function createExternalAccountKey
                             * @memberof google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService
                             * @instance
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest} request CreateExternalAccountKeyRequest message or plain object
                             * @param {google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService.CreateExternalAccountKeyCallback} callback Node-style callback called with the error, if any, and ExternalAccountKey
                             * @returns {undefined}
                             * @variation 1
                             */
                            Object.defineProperty(PublicCertificateAuthorityService.prototype.createExternalAccountKey = function createExternalAccountKey(request, callback) {
                                return this.rpcCall(createExternalAccountKey, $root.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest, $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey, request, callback);
                            }, "name", { value: "CreateExternalAccountKey" });
    
                            /**
                             * Calls CreateExternalAccountKey.
                             * @function createExternalAccountKey
                             * @memberof google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityService
                             * @instance
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest} request CreateExternalAccountKeyRequest message or plain object
                             * @returns {Promise<google.cloud.security.publicca.v1beta1.ExternalAccountKey>} Promise
                             * @variation 2
                             */
    
                            return PublicCertificateAuthorityService;
                        })();
    
                        v1beta1.CreateExternalAccountKeyRequest = (function() {
    
                            /**
                             * Properties of a CreateExternalAccountKeyRequest.
                             * @memberof google.cloud.security.publicca.v1beta1
                             * @interface ICreateExternalAccountKeyRequest
                             * @property {string|null} [parent] CreateExternalAccountKeyRequest parent
                             * @property {google.cloud.security.publicca.v1beta1.IExternalAccountKey|null} [externalAccountKey] CreateExternalAccountKeyRequest externalAccountKey
                             */
    
                            /**
                             * Constructs a new CreateExternalAccountKeyRequest.
                             * @memberof google.cloud.security.publicca.v1beta1
                             * @classdesc Represents a CreateExternalAccountKeyRequest.
                             * @implements ICreateExternalAccountKeyRequest
                             * @constructor
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest=} [properties] Properties to set
                             */
                            function CreateExternalAccountKeyRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * CreateExternalAccountKeyRequest parent.
                             * @member {string} parent
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @instance
                             */
                            CreateExternalAccountKeyRequest.prototype.parent = "";
    
                            /**
                             * CreateExternalAccountKeyRequest externalAccountKey.
                             * @member {google.cloud.security.publicca.v1beta1.IExternalAccountKey|null|undefined} externalAccountKey
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @instance
                             */
                            CreateExternalAccountKeyRequest.prototype.externalAccountKey = null;
    
                            /**
                             * Creates a new CreateExternalAccountKeyRequest instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest=} [properties] Properties to set
                             * @returns {google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest} CreateExternalAccountKeyRequest instance
                             */
                            CreateExternalAccountKeyRequest.create = function create(properties) {
                                return new CreateExternalAccountKeyRequest(properties);
                            };
    
                            /**
                             * Encodes the specified CreateExternalAccountKeyRequest message. Does not implicitly {@link google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest} message CreateExternalAccountKeyRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CreateExternalAccountKeyRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                                if (message.externalAccountKey != null && Object.hasOwnProperty.call(message, "externalAccountKey"))
                                    $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey.encode(message.externalAccountKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified CreateExternalAccountKeyRequest message, length delimited. Does not implicitly {@link google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.ICreateExternalAccountKeyRequest} message CreateExternalAccountKeyRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CreateExternalAccountKeyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a CreateExternalAccountKeyRequest message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest} CreateExternalAccountKeyRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CreateExternalAccountKeyRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.parent = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.externalAccountKey = $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey.decode(reader, reader.uint32());
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a CreateExternalAccountKeyRequest message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest} CreateExternalAccountKeyRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CreateExternalAccountKeyRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a CreateExternalAccountKeyRequest message.
                             * @function verify
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            CreateExternalAccountKeyRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.parent != null && message.hasOwnProperty("parent"))
                                    if (!$util.isString(message.parent))
                                        return "parent: string expected";
                                if (message.externalAccountKey != null && message.hasOwnProperty("externalAccountKey")) {
                                    var error = $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey.verify(message.externalAccountKey);
                                    if (error)
                                        return "externalAccountKey." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a CreateExternalAccountKeyRequest message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest} CreateExternalAccountKeyRequest
                             */
                            CreateExternalAccountKeyRequest.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest)
                                    return object;
                                var message = new $root.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest();
                                if (object.parent != null)
                                    message.parent = String(object.parent);
                                if (object.externalAccountKey != null) {
                                    if (typeof object.externalAccountKey !== "object")
                                        throw TypeError(".google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest.externalAccountKey: object expected");
                                    message.externalAccountKey = $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey.fromObject(object.externalAccountKey);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a CreateExternalAccountKeyRequest message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest} message CreateExternalAccountKeyRequest
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            CreateExternalAccountKeyRequest.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.parent = "";
                                    object.externalAccountKey = null;
                                }
                                if (message.parent != null && message.hasOwnProperty("parent"))
                                    object.parent = message.parent;
                                if (message.externalAccountKey != null && message.hasOwnProperty("externalAccountKey"))
                                    object.externalAccountKey = $root.google.cloud.security.publicca.v1beta1.ExternalAccountKey.toObject(message.externalAccountKey, options);
                                return object;
                            };
    
                            /**
                             * Converts this CreateExternalAccountKeyRequest to JSON.
                             * @function toJSON
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            CreateExternalAccountKeyRequest.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for CreateExternalAccountKeyRequest
                             * @function getTypeUrl
                             * @memberof google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            CreateExternalAccountKeyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest";
                            };
    
                            return CreateExternalAccountKeyRequest;
                        })();
    
                        return v1beta1;
                    })();
    
                    return publicca;
                })();
    
                return security;
            })();
    
            return cloud;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            /**
             * FieldBehavior enum.
             * @name google.api.FieldBehavior
             * @enum {number}
             * @property {number} FIELD_BEHAVIOR_UNSPECIFIED=0 FIELD_BEHAVIOR_UNSPECIFIED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REQUIRED=2 REQUIRED value
             * @property {number} OUTPUT_ONLY=3 OUTPUT_ONLY value
             * @property {number} INPUT_ONLY=4 INPUT_ONLY value
             * @property {number} IMMUTABLE=5 IMMUTABLE value
             * @property {number} UNORDERED_LIST=6 UNORDERED_LIST value
             * @property {number} NON_EMPTY_DEFAULT=7 NON_EMPTY_DEFAULT value
             */
            api.FieldBehavior = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIELD_BEHAVIOR_UNSPECIFIED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REQUIRED"] = 2;
                values[valuesById[3] = "OUTPUT_ONLY"] = 3;
                values[valuesById[4] = "INPUT_ONLY"] = 4;
                values[valuesById[5] = "IMMUTABLE"] = 5;
                values[valuesById[6] = "UNORDERED_LIST"] = 6;
                values[valuesById[7] = "NON_EMPTY_DEFAULT"] = 7;
                return values;
            })();
    
            api.ResourceDescriptor = (function() {
    
                /**
                 * Properties of a ResourceDescriptor.
                 * @memberof google.api
                 * @interface IResourceDescriptor
                 * @property {string|null} [type] ResourceDescriptor type
                 * @property {Array.<string>|null} [pattern] ResourceDescriptor pattern
                 * @property {string|null} [nameField] ResourceDescriptor nameField
                 * @property {google.api.ResourceDescriptor.History|null} [history] ResourceDescriptor history
                 * @property {string|null} [plural] ResourceDescriptor plural
                 * @property {string|null} [singular] ResourceDescriptor singular
                 * @property {Array.<google.api.ResourceDescriptor.Style>|null} [style] ResourceDescriptor style
                 */
    
                /**
                 * Constructs a new ResourceDescriptor.
                 * @memberof google.api
                 * @classdesc Represents a ResourceDescriptor.
                 * @implements IResourceDescriptor
                 * @constructor
                 * @param {google.api.IResourceDescriptor=} [properties] Properties to set
                 */
                function ResourceDescriptor(properties) {
                    this.pattern = [];
                    this.style = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ResourceDescriptor type.
                 * @member {string} type
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.type = "";
    
                /**
                 * ResourceDescriptor pattern.
                 * @member {Array.<string>} pattern
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.pattern = $util.emptyArray;
    
                /**
                 * ResourceDescriptor nameField.
                 * @member {string} nameField
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.nameField = "";
    
                /**
                 * ResourceDescriptor history.
                 * @member {google.api.ResourceDescriptor.History} history
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.history = 0;
    
                /**
                 * ResourceDescriptor plural.
                 * @member {string} plural
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.plural = "";
    
                /**
                 * ResourceDescriptor singular.
                 * @member {string} singular
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.singular = "";
    
                /**
                 * ResourceDescriptor style.
                 * @member {Array.<google.api.ResourceDescriptor.Style>} style
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.style = $util.emptyArray;
    
                /**
                 * Creates a new ResourceDescriptor instance using the specified properties.
                 * @function create
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor=} [properties] Properties to set
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor instance
                 */
                ResourceDescriptor.create = function create(properties) {
                    return new ResourceDescriptor(properties);
                };
    
                /**
                 * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor} message ResourceDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceDescriptor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.pattern != null && message.pattern.length)
                        for (var i = 0; i < message.pattern.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pattern[i]);
                    if (message.nameField != null && Object.hasOwnProperty.call(message, "nameField"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nameField);
                    if (message.history != null && Object.hasOwnProperty.call(message, "history"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.history);
                    if (message.plural != null && Object.hasOwnProperty.call(message, "plural"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.plural);
                    if (message.singular != null && Object.hasOwnProperty.call(message, "singular"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.singular);
                    if (message.style != null && message.style.length) {
                        writer.uint32(/* id 10, wireType 2 =*/82).fork();
                        for (var i = 0; i < message.style.length; ++i)
                            writer.int32(message.style[i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor} message ResourceDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ResourceDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceDescriptor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ResourceDescriptor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.pattern && message.pattern.length))
                                    message.pattern = [];
                                message.pattern.push(reader.string());
                                break;
                            }
                        case 3: {
                                message.nameField = reader.string();
                                break;
                            }
                        case 4: {
                                message.history = reader.int32();
                                break;
                            }
                        case 5: {
                                message.plural = reader.string();
                                break;
                            }
                        case 6: {
                                message.singular = reader.string();
                                break;
                            }
                        case 10: {
                                if (!(message.style && message.style.length))
                                    message.style = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.style.push(reader.int32());
                                } else
                                    message.style.push(reader.int32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceDescriptor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ResourceDescriptor message.
                 * @function verify
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceDescriptor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.pattern != null && message.hasOwnProperty("pattern")) {
                        if (!Array.isArray(message.pattern))
                            return "pattern: array expected";
                        for (var i = 0; i < message.pattern.length; ++i)
                            if (!$util.isString(message.pattern[i]))
                                return "pattern: string[] expected";
                    }
                    if (message.nameField != null && message.hasOwnProperty("nameField"))
                        if (!$util.isString(message.nameField))
                            return "nameField: string expected";
                    if (message.history != null && message.hasOwnProperty("history"))
                        switch (message.history) {
                        default:
                            return "history: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        if (!$util.isString(message.plural))
                            return "plural: string expected";
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        if (!$util.isString(message.singular))
                            return "singular: string expected";
                    if (message.style != null && message.hasOwnProperty("style")) {
                        if (!Array.isArray(message.style))
                            return "style: array expected";
                        for (var i = 0; i < message.style.length; ++i)
                            switch (message.style[i]) {
                            default:
                                return "style: enum value[] expected";
                            case 0:
                            case 1:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 */
                ResourceDescriptor.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ResourceDescriptor)
                        return object;
                    var message = new $root.google.api.ResourceDescriptor();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.pattern) {
                        if (!Array.isArray(object.pattern))
                            throw TypeError(".google.api.ResourceDescriptor.pattern: array expected");
                        message.pattern = [];
                        for (var i = 0; i < object.pattern.length; ++i)
                            message.pattern[i] = String(object.pattern[i]);
                    }
                    if (object.nameField != null)
                        message.nameField = String(object.nameField);
                    switch (object.history) {
                    default:
                        if (typeof object.history === "number") {
                            message.history = object.history;
                            break;
                        }
                        break;
                    case "HISTORY_UNSPECIFIED":
                    case 0:
                        message.history = 0;
                        break;
                    case "ORIGINALLY_SINGLE_PATTERN":
                    case 1:
                        message.history = 1;
                        break;
                    case "FUTURE_MULTI_PATTERN":
                    case 2:
                        message.history = 2;
                        break;
                    }
                    if (object.plural != null)
                        message.plural = String(object.plural);
                    if (object.singular != null)
                        message.singular = String(object.singular);
                    if (object.style) {
                        if (!Array.isArray(object.style))
                            throw TypeError(".google.api.ResourceDescriptor.style: array expected");
                        message.style = [];
                        for (var i = 0; i < object.style.length; ++i)
                            switch (object.style[i]) {
                            default:
                                if (typeof object.style[i] === "number") {
                                    message.style[i] = object.style[i];
                                    break;
                                }
                            case "STYLE_UNSPECIFIED":
                            case 0:
                                message.style[i] = 0;
                                break;
                            case "DECLARATIVE_FRIENDLY":
                            case 1:
                                message.style[i] = 1;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.ResourceDescriptor} message ResourceDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResourceDescriptor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.pattern = [];
                        object.style = [];
                    }
                    if (options.defaults) {
                        object.type = "";
                        object.nameField = "";
                        object.history = options.enums === String ? "HISTORY_UNSPECIFIED" : 0;
                        object.plural = "";
                        object.singular = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.pattern && message.pattern.length) {
                        object.pattern = [];
                        for (var j = 0; j < message.pattern.length; ++j)
                            object.pattern[j] = message.pattern[j];
                    }
                    if (message.nameField != null && message.hasOwnProperty("nameField"))
                        object.nameField = message.nameField;
                    if (message.history != null && message.hasOwnProperty("history"))
                        object.history = options.enums === String ? $root.google.api.ResourceDescriptor.History[message.history] === undefined ? message.history : $root.google.api.ResourceDescriptor.History[message.history] : message.history;
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        object.plural = message.plural;
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        object.singular = message.singular;
                    if (message.style && message.style.length) {
                        object.style = [];
                        for (var j = 0; j < message.style.length; ++j)
                            object.style[j] = options.enums === String ? $root.google.api.ResourceDescriptor.Style[message.style[j]] === undefined ? message.style[j] : $root.google.api.ResourceDescriptor.Style[message.style[j]] : message.style[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this ResourceDescriptor to JSON.
                 * @function toJSON
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResourceDescriptor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ResourceDescriptor
                 * @function getTypeUrl
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ResourceDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ResourceDescriptor";
                };
    
                /**
                 * History enum.
                 * @name google.api.ResourceDescriptor.History
                 * @enum {number}
                 * @property {number} HISTORY_UNSPECIFIED=0 HISTORY_UNSPECIFIED value
                 * @property {number} ORIGINALLY_SINGLE_PATTERN=1 ORIGINALLY_SINGLE_PATTERN value
                 * @property {number} FUTURE_MULTI_PATTERN=2 FUTURE_MULTI_PATTERN value
                 */
                ResourceDescriptor.History = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "HISTORY_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "ORIGINALLY_SINGLE_PATTERN"] = 1;
                    values[valuesById[2] = "FUTURE_MULTI_PATTERN"] = 2;
                    return values;
                })();
    
                /**
                 * Style enum.
                 * @name google.api.ResourceDescriptor.Style
                 * @enum {number}
                 * @property {number} STYLE_UNSPECIFIED=0 STYLE_UNSPECIFIED value
                 * @property {number} DECLARATIVE_FRIENDLY=1 DECLARATIVE_FRIENDLY value
                 */
                ResourceDescriptor.Style = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STYLE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "DECLARATIVE_FRIENDLY"] = 1;
                    return values;
                })();
    
                return ResourceDescriptor;
            })();
    
            api.ResourceReference = (function() {
    
                /**
                 * Properties of a ResourceReference.
                 * @memberof google.api
                 * @interface IResourceReference
                 * @property {string|null} [type] ResourceReference type
                 * @property {string|null} [childType] ResourceReference childType
                 */
    
                /**
                 * Constructs a new ResourceReference.
                 * @memberof google.api
                 * @classdesc Represents a ResourceReference.
                 * @implements IResourceReference
                 * @constructor
                 * @param {google.api.IResourceReference=} [properties] Properties to set
                 */
                function ResourceReference(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ResourceReference type.
                 * @member {string} type
                 * @memberof google.api.ResourceReference
                 * @instance
                 */
                ResourceReference.prototype.type = "";
    
                /**
                 * ResourceReference childType.
                 * @member {string} childType
                 * @memberof google.api.ResourceReference
                 * @instance
                 */
                ResourceReference.prototype.childType = "";
    
                /**
                 * Creates a new ResourceReference instance using the specified properties.
                 * @function create
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference=} [properties] Properties to set
                 * @returns {google.api.ResourceReference} ResourceReference instance
                 */
                ResourceReference.create = function create(properties) {
                    return new ResourceReference(properties);
                };
    
                /**
                 * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference} message ResourceReference message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceReference.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.childType != null && Object.hasOwnProperty.call(message, "childType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.childType);
                    return writer;
                };
    
                /**
                 * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference} message ResourceReference message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceReference.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ResourceReference message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ResourceReference} ResourceReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceReference.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ResourceReference();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                message.childType = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ResourceReference} ResourceReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceReference.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ResourceReference message.
                 * @function verify
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceReference.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.childType != null && message.hasOwnProperty("childType"))
                        if (!$util.isString(message.childType))
                            return "childType: string expected";
                    return null;
                };
    
                /**
                 * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ResourceReference} ResourceReference
                 */
                ResourceReference.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ResourceReference)
                        return object;
                    var message = new $root.google.api.ResourceReference();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.childType != null)
                        message.childType = String(object.childType);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.ResourceReference} message ResourceReference
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResourceReference.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.childType = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.childType != null && message.hasOwnProperty("childType"))
                        object.childType = message.childType;
                    return object;
                };
    
                /**
                 * Converts this ResourceReference to JSON.
                 * @function toJSON
                 * @memberof google.api.ResourceReference
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResourceReference.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ResourceReference
                 * @function getTypeUrl
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ResourceReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ResourceReference";
                };
    
                return ResourceReference;
            })();
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && Object.hasOwnProperty.call(message, "fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.rules && message.rules.length))
                                    message.rules = [];
                                message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                message.fullyDecodeReservedExpansion = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Http
                 * @function getTypeUrl
                 * @memberof google.api.Http
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Http.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.Http";
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string|null|undefined} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = null;
    
                /**
                 * HttpRule put.
                 * @member {string|null|undefined} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = null;
    
                /**
                 * HttpRule post.
                 * @member {string|null|undefined} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = null;
    
                /**
                 * HttpRule delete.
                 * @member {string|null|undefined} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = null;
    
                /**
                 * HttpRule patch.
                 * @member {string|null|undefined} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = null;
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && Object.hasOwnProperty.call(message, "responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.selector = reader.string();
                                break;
                            }
                        case 2: {
                                message.get = reader.string();
                                break;
                            }
                        case 3: {
                                message.put = reader.string();
                                break;
                            }
                        case 4: {
                                message.post = reader.string();
                                break;
                            }
                        case 5: {
                                message["delete"] = reader.string();
                                break;
                            }
                        case 6: {
                                message.patch = reader.string();
                                break;
                            }
                        case 8: {
                                message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.body = reader.string();
                                break;
                            }
                        case 12: {
                                message.responseBody = reader.string();
                                break;
                            }
                        case 11: {
                                if (!(message.additionalBindings && message.additionalBindings.length))
                                    message.additionalBindings = [];
                                message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for HttpRule
                 * @function getTypeUrl
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                HttpRule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.HttpRule";
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.kind = reader.string();
                                break;
                            }
                        case 2: {
                                message.path = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CustomHttpPattern
                 * @function getTypeUrl
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CustomHttpPattern.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CustomHttpPattern";
                };
    
                return CustomHttpPattern;
            })();
    
            api.CommonLanguageSettings = (function() {
    
                /**
                 * Properties of a CommonLanguageSettings.
                 * @memberof google.api
                 * @interface ICommonLanguageSettings
                 * @property {string|null} [referenceDocsUri] CommonLanguageSettings referenceDocsUri
                 * @property {Array.<google.api.ClientLibraryDestination>|null} [destinations] CommonLanguageSettings destinations
                 */
    
                /**
                 * Constructs a new CommonLanguageSettings.
                 * @memberof google.api
                 * @classdesc Represents a CommonLanguageSettings.
                 * @implements ICommonLanguageSettings
                 * @constructor
                 * @param {google.api.ICommonLanguageSettings=} [properties] Properties to set
                 */
                function CommonLanguageSettings(properties) {
                    this.destinations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CommonLanguageSettings referenceDocsUri.
                 * @member {string} referenceDocsUri
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 */
                CommonLanguageSettings.prototype.referenceDocsUri = "";
    
                /**
                 * CommonLanguageSettings destinations.
                 * @member {Array.<google.api.ClientLibraryDestination>} destinations
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 */
                CommonLanguageSettings.prototype.destinations = $util.emptyArray;
    
                /**
                 * Creates a new CommonLanguageSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings=} [properties] Properties to set
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings instance
                 */
                CommonLanguageSettings.create = function create(properties) {
                    return new CommonLanguageSettings(properties);
                };
    
                /**
                 * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings} message CommonLanguageSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommonLanguageSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.referenceDocsUri != null && Object.hasOwnProperty.call(message, "referenceDocsUri"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceDocsUri);
                    if (message.destinations != null && message.destinations.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.destinations.length; ++i)
                            writer.int32(message.destinations[i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings} message CommonLanguageSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommonLanguageSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CommonLanguageSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommonLanguageSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CommonLanguageSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.referenceDocsUri = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.destinations && message.destinations.length))
                                    message.destinations = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.destinations.push(reader.int32());
                                } else
                                    message.destinations.push(reader.int32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommonLanguageSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CommonLanguageSettings message.
                 * @function verify
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommonLanguageSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.referenceDocsUri != null && message.hasOwnProperty("referenceDocsUri"))
                        if (!$util.isString(message.referenceDocsUri))
                            return "referenceDocsUri: string expected";
                    if (message.destinations != null && message.hasOwnProperty("destinations")) {
                        if (!Array.isArray(message.destinations))
                            return "destinations: array expected";
                        for (var i = 0; i < message.destinations.length; ++i)
                            switch (message.destinations[i]) {
                            default:
                                return "destinations: enum value[] expected";
                            case 0:
                            case 10:
                            case 20:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 */
                CommonLanguageSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CommonLanguageSettings)
                        return object;
                    var message = new $root.google.api.CommonLanguageSettings();
                    if (object.referenceDocsUri != null)
                        message.referenceDocsUri = String(object.referenceDocsUri);
                    if (object.destinations) {
                        if (!Array.isArray(object.destinations))
                            throw TypeError(".google.api.CommonLanguageSettings.destinations: array expected");
                        message.destinations = [];
                        for (var i = 0; i < object.destinations.length; ++i)
                            switch (object.destinations[i]) {
                            default:
                                if (typeof object.destinations[i] === "number") {
                                    message.destinations[i] = object.destinations[i];
                                    break;
                                }
                            case "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED":
                            case 0:
                                message.destinations[i] = 0;
                                break;
                            case "GITHUB":
                            case 10:
                                message.destinations[i] = 10;
                                break;
                            case "PACKAGE_MANAGER":
                            case 20:
                                message.destinations[i] = 20;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.CommonLanguageSettings} message CommonLanguageSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommonLanguageSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.destinations = [];
                    if (options.defaults)
                        object.referenceDocsUri = "";
                    if (message.referenceDocsUri != null && message.hasOwnProperty("referenceDocsUri"))
                        object.referenceDocsUri = message.referenceDocsUri;
                    if (message.destinations && message.destinations.length) {
                        object.destinations = [];
                        for (var j = 0; j < message.destinations.length; ++j)
                            object.destinations[j] = options.enums === String ? $root.google.api.ClientLibraryDestination[message.destinations[j]] === undefined ? message.destinations[j] : $root.google.api.ClientLibraryDestination[message.destinations[j]] : message.destinations[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this CommonLanguageSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommonLanguageSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CommonLanguageSettings
                 * @function getTypeUrl
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CommonLanguageSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CommonLanguageSettings";
                };
    
                return CommonLanguageSettings;
            })();
    
            api.ClientLibrarySettings = (function() {
    
                /**
                 * Properties of a ClientLibrarySettings.
                 * @memberof google.api
                 * @interface IClientLibrarySettings
                 * @property {string|null} [version] ClientLibrarySettings version
                 * @property {google.api.LaunchStage|null} [launchStage] ClientLibrarySettings launchStage
                 * @property {boolean|null} [restNumericEnums] ClientLibrarySettings restNumericEnums
                 * @property {google.api.IJavaSettings|null} [javaSettings] ClientLibrarySettings javaSettings
                 * @property {google.api.ICppSettings|null} [cppSettings] ClientLibrarySettings cppSettings
                 * @property {google.api.IPhpSettings|null} [phpSettings] ClientLibrarySettings phpSettings
                 * @property {google.api.IPythonSettings|null} [pythonSettings] ClientLibrarySettings pythonSettings
                 * @property {google.api.INodeSettings|null} [nodeSettings] ClientLibrarySettings nodeSettings
                 * @property {google.api.IDotnetSettings|null} [dotnetSettings] ClientLibrarySettings dotnetSettings
                 * @property {google.api.IRubySettings|null} [rubySettings] ClientLibrarySettings rubySettings
                 * @property {google.api.IGoSettings|null} [goSettings] ClientLibrarySettings goSettings
                 */
    
                /**
                 * Constructs a new ClientLibrarySettings.
                 * @memberof google.api
                 * @classdesc Represents a ClientLibrarySettings.
                 * @implements IClientLibrarySettings
                 * @constructor
                 * @param {google.api.IClientLibrarySettings=} [properties] Properties to set
                 */
                function ClientLibrarySettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ClientLibrarySettings version.
                 * @member {string} version
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.version = "";
    
                /**
                 * ClientLibrarySettings launchStage.
                 * @member {google.api.LaunchStage} launchStage
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.launchStage = 0;
    
                /**
                 * ClientLibrarySettings restNumericEnums.
                 * @member {boolean} restNumericEnums
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.restNumericEnums = false;
    
                /**
                 * ClientLibrarySettings javaSettings.
                 * @member {google.api.IJavaSettings|null|undefined} javaSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.javaSettings = null;
    
                /**
                 * ClientLibrarySettings cppSettings.
                 * @member {google.api.ICppSettings|null|undefined} cppSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.cppSettings = null;
    
                /**
                 * ClientLibrarySettings phpSettings.
                 * @member {google.api.IPhpSettings|null|undefined} phpSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.phpSettings = null;
    
                /**
                 * ClientLibrarySettings pythonSettings.
                 * @member {google.api.IPythonSettings|null|undefined} pythonSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.pythonSettings = null;
    
                /**
                 * ClientLibrarySettings nodeSettings.
                 * @member {google.api.INodeSettings|null|undefined} nodeSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.nodeSettings = null;
    
                /**
                 * ClientLibrarySettings dotnetSettings.
                 * @member {google.api.IDotnetSettings|null|undefined} dotnetSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.dotnetSettings = null;
    
                /**
                 * ClientLibrarySettings rubySettings.
                 * @member {google.api.IRubySettings|null|undefined} rubySettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.rubySettings = null;
    
                /**
                 * ClientLibrarySettings goSettings.
                 * @member {google.api.IGoSettings|null|undefined} goSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.goSettings = null;
    
                /**
                 * Creates a new ClientLibrarySettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings=} [properties] Properties to set
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings instance
                 */
                ClientLibrarySettings.create = function create(properties) {
                    return new ClientLibrarySettings(properties);
                };
    
                /**
                 * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings} message ClientLibrarySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientLibrarySettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                    if (message.launchStage != null && Object.hasOwnProperty.call(message, "launchStage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.launchStage);
                    if (message.restNumericEnums != null && Object.hasOwnProperty.call(message, "restNumericEnums"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.restNumericEnums);
                    if (message.javaSettings != null && Object.hasOwnProperty.call(message, "javaSettings"))
                        $root.google.api.JavaSettings.encode(message.javaSettings, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                    if (message.cppSettings != null && Object.hasOwnProperty.call(message, "cppSettings"))
                        $root.google.api.CppSettings.encode(message.cppSettings, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                    if (message.phpSettings != null && Object.hasOwnProperty.call(message, "phpSettings"))
                        $root.google.api.PhpSettings.encode(message.phpSettings, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                    if (message.pythonSettings != null && Object.hasOwnProperty.call(message, "pythonSettings"))
                        $root.google.api.PythonSettings.encode(message.pythonSettings, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                    if (message.nodeSettings != null && Object.hasOwnProperty.call(message, "nodeSettings"))
                        $root.google.api.NodeSettings.encode(message.nodeSettings, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                    if (message.dotnetSettings != null && Object.hasOwnProperty.call(message, "dotnetSettings"))
                        $root.google.api.DotnetSettings.encode(message.dotnetSettings, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                    if (message.rubySettings != null && Object.hasOwnProperty.call(message, "rubySettings"))
                        $root.google.api.RubySettings.encode(message.rubySettings, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                    if (message.goSettings != null && Object.hasOwnProperty.call(message, "goSettings"))
                        $root.google.api.GoSettings.encode(message.goSettings, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings} message ClientLibrarySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientLibrarySettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ClientLibrarySettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientLibrarySettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ClientLibrarySettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.version = reader.string();
                                break;
                            }
                        case 2: {
                                message.launchStage = reader.int32();
                                break;
                            }
                        case 3: {
                                message.restNumericEnums = reader.bool();
                                break;
                            }
                        case 21: {
                                message.javaSettings = $root.google.api.JavaSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 22: {
                                message.cppSettings = $root.google.api.CppSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 23: {
                                message.phpSettings = $root.google.api.PhpSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 24: {
                                message.pythonSettings = $root.google.api.PythonSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 25: {
                                message.nodeSettings = $root.google.api.NodeSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 26: {
                                message.dotnetSettings = $root.google.api.DotnetSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 27: {
                                message.rubySettings = $root.google.api.RubySettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 28: {
                                message.goSettings = $root.google.api.GoSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientLibrarySettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ClientLibrarySettings message.
                 * @function verify
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientLibrarySettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.launchStage != null && message.hasOwnProperty("launchStage"))
                        switch (message.launchStage) {
                        default:
                            return "launchStage: enum value expected";
                        case 0:
                        case 6:
                        case 7:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.restNumericEnums != null && message.hasOwnProperty("restNumericEnums"))
                        if (typeof message.restNumericEnums !== "boolean")
                            return "restNumericEnums: boolean expected";
                    if (message.javaSettings != null && message.hasOwnProperty("javaSettings")) {
                        var error = $root.google.api.JavaSettings.verify(message.javaSettings);
                        if (error)
                            return "javaSettings." + error;
                    }
                    if (message.cppSettings != null && message.hasOwnProperty("cppSettings")) {
                        var error = $root.google.api.CppSettings.verify(message.cppSettings);
                        if (error)
                            return "cppSettings." + error;
                    }
                    if (message.phpSettings != null && message.hasOwnProperty("phpSettings")) {
                        var error = $root.google.api.PhpSettings.verify(message.phpSettings);
                        if (error)
                            return "phpSettings." + error;
                    }
                    if (message.pythonSettings != null && message.hasOwnProperty("pythonSettings")) {
                        var error = $root.google.api.PythonSettings.verify(message.pythonSettings);
                        if (error)
                            return "pythonSettings." + error;
                    }
                    if (message.nodeSettings != null && message.hasOwnProperty("nodeSettings")) {
                        var error = $root.google.api.NodeSettings.verify(message.nodeSettings);
                        if (error)
                            return "nodeSettings." + error;
                    }
                    if (message.dotnetSettings != null && message.hasOwnProperty("dotnetSettings")) {
                        var error = $root.google.api.DotnetSettings.verify(message.dotnetSettings);
                        if (error)
                            return "dotnetSettings." + error;
                    }
                    if (message.rubySettings != null && message.hasOwnProperty("rubySettings")) {
                        var error = $root.google.api.RubySettings.verify(message.rubySettings);
                        if (error)
                            return "rubySettings." + error;
                    }
                    if (message.goSettings != null && message.hasOwnProperty("goSettings")) {
                        var error = $root.google.api.GoSettings.verify(message.goSettings);
                        if (error)
                            return "goSettings." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 */
                ClientLibrarySettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ClientLibrarySettings)
                        return object;
                    var message = new $root.google.api.ClientLibrarySettings();
                    if (object.version != null)
                        message.version = String(object.version);
                    switch (object.launchStage) {
                    default:
                        if (typeof object.launchStage === "number") {
                            message.launchStage = object.launchStage;
                            break;
                        }
                        break;
                    case "LAUNCH_STAGE_UNSPECIFIED":
                    case 0:
                        message.launchStage = 0;
                        break;
                    case "UNIMPLEMENTED":
                    case 6:
                        message.launchStage = 6;
                        break;
                    case "PRELAUNCH":
                    case 7:
                        message.launchStage = 7;
                        break;
                    case "EARLY_ACCESS":
                    case 1:
                        message.launchStage = 1;
                        break;
                    case "ALPHA":
                    case 2:
                        message.launchStage = 2;
                        break;
                    case "BETA":
                    case 3:
                        message.launchStage = 3;
                        break;
                    case "GA":
                    case 4:
                        message.launchStage = 4;
                        break;
                    case "DEPRECATED":
                    case 5:
                        message.launchStage = 5;
                        break;
                    }
                    if (object.restNumericEnums != null)
                        message.restNumericEnums = Boolean(object.restNumericEnums);
                    if (object.javaSettings != null) {
                        if (typeof object.javaSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.javaSettings: object expected");
                        message.javaSettings = $root.google.api.JavaSettings.fromObject(object.javaSettings);
                    }
                    if (object.cppSettings != null) {
                        if (typeof object.cppSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.cppSettings: object expected");
                        message.cppSettings = $root.google.api.CppSettings.fromObject(object.cppSettings);
                    }
                    if (object.phpSettings != null) {
                        if (typeof object.phpSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.phpSettings: object expected");
                        message.phpSettings = $root.google.api.PhpSettings.fromObject(object.phpSettings);
                    }
                    if (object.pythonSettings != null) {
                        if (typeof object.pythonSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.pythonSettings: object expected");
                        message.pythonSettings = $root.google.api.PythonSettings.fromObject(object.pythonSettings);
                    }
                    if (object.nodeSettings != null) {
                        if (typeof object.nodeSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.nodeSettings: object expected");
                        message.nodeSettings = $root.google.api.NodeSettings.fromObject(object.nodeSettings);
                    }
                    if (object.dotnetSettings != null) {
                        if (typeof object.dotnetSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.dotnetSettings: object expected");
                        message.dotnetSettings = $root.google.api.DotnetSettings.fromObject(object.dotnetSettings);
                    }
                    if (object.rubySettings != null) {
                        if (typeof object.rubySettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.rubySettings: object expected");
                        message.rubySettings = $root.google.api.RubySettings.fromObject(object.rubySettings);
                    }
                    if (object.goSettings != null) {
                        if (typeof object.goSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.goSettings: object expected");
                        message.goSettings = $root.google.api.GoSettings.fromObject(object.goSettings);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.ClientLibrarySettings} message ClientLibrarySettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientLibrarySettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.version = "";
                        object.launchStage = options.enums === String ? "LAUNCH_STAGE_UNSPECIFIED" : 0;
                        object.restNumericEnums = false;
                        object.javaSettings = null;
                        object.cppSettings = null;
                        object.phpSettings = null;
                        object.pythonSettings = null;
                        object.nodeSettings = null;
                        object.dotnetSettings = null;
                        object.rubySettings = null;
                        object.goSettings = null;
                    }
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.launchStage != null && message.hasOwnProperty("launchStage"))
                        object.launchStage = options.enums === String ? $root.google.api.LaunchStage[message.launchStage] === undefined ? message.launchStage : $root.google.api.LaunchStage[message.launchStage] : message.launchStage;
                    if (message.restNumericEnums != null && message.hasOwnProperty("restNumericEnums"))
                        object.restNumericEnums = message.restNumericEnums;
                    if (message.javaSettings != null && message.hasOwnProperty("javaSettings"))
                        object.javaSettings = $root.google.api.JavaSettings.toObject(message.javaSettings, options);
                    if (message.cppSettings != null && message.hasOwnProperty("cppSettings"))
                        object.cppSettings = $root.google.api.CppSettings.toObject(message.cppSettings, options);
                    if (message.phpSettings != null && message.hasOwnProperty("phpSettings"))
                        object.phpSettings = $root.google.api.PhpSettings.toObject(message.phpSettings, options);
                    if (message.pythonSettings != null && message.hasOwnProperty("pythonSettings"))
                        object.pythonSettings = $root.google.api.PythonSettings.toObject(message.pythonSettings, options);
                    if (message.nodeSettings != null && message.hasOwnProperty("nodeSettings"))
                        object.nodeSettings = $root.google.api.NodeSettings.toObject(message.nodeSettings, options);
                    if (message.dotnetSettings != null && message.hasOwnProperty("dotnetSettings"))
                        object.dotnetSettings = $root.google.api.DotnetSettings.toObject(message.dotnetSettings, options);
                    if (message.rubySettings != null && message.hasOwnProperty("rubySettings"))
                        object.rubySettings = $root.google.api.RubySettings.toObject(message.rubySettings, options);
                    if (message.goSettings != null && message.hasOwnProperty("goSettings"))
                        object.goSettings = $root.google.api.GoSettings.toObject(message.goSettings, options);
                    return object;
                };
    
                /**
                 * Converts this ClientLibrarySettings to JSON.
                 * @function toJSON
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientLibrarySettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ClientLibrarySettings
                 * @function getTypeUrl
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientLibrarySettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ClientLibrarySettings";
                };
    
                return ClientLibrarySettings;
            })();
    
            api.Publishing = (function() {
    
                /**
                 * Properties of a Publishing.
                 * @memberof google.api
                 * @interface IPublishing
                 * @property {Array.<google.api.IMethodSettings>|null} [methodSettings] Publishing methodSettings
                 * @property {string|null} [newIssueUri] Publishing newIssueUri
                 * @property {string|null} [documentationUri] Publishing documentationUri
                 * @property {string|null} [apiShortName] Publishing apiShortName
                 * @property {string|null} [githubLabel] Publishing githubLabel
                 * @property {Array.<string>|null} [codeownerGithubTeams] Publishing codeownerGithubTeams
                 * @property {string|null} [docTagPrefix] Publishing docTagPrefix
                 * @property {google.api.ClientLibraryOrganization|null} [organization] Publishing organization
                 * @property {Array.<google.api.IClientLibrarySettings>|null} [librarySettings] Publishing librarySettings
                 * @property {string|null} [protoReferenceDocumentationUri] Publishing protoReferenceDocumentationUri
                 */
    
                /**
                 * Constructs a new Publishing.
                 * @memberof google.api
                 * @classdesc Represents a Publishing.
                 * @implements IPublishing
                 * @constructor
                 * @param {google.api.IPublishing=} [properties] Properties to set
                 */
                function Publishing(properties) {
                    this.methodSettings = [];
                    this.codeownerGithubTeams = [];
                    this.librarySettings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Publishing methodSettings.
                 * @member {Array.<google.api.IMethodSettings>} methodSettings
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.methodSettings = $util.emptyArray;
    
                /**
                 * Publishing newIssueUri.
                 * @member {string} newIssueUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.newIssueUri = "";
    
                /**
                 * Publishing documentationUri.
                 * @member {string} documentationUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.documentationUri = "";
    
                /**
                 * Publishing apiShortName.
                 * @member {string} apiShortName
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.apiShortName = "";
    
                /**
                 * Publishing githubLabel.
                 * @member {string} githubLabel
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.githubLabel = "";
    
                /**
                 * Publishing codeownerGithubTeams.
                 * @member {Array.<string>} codeownerGithubTeams
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.codeownerGithubTeams = $util.emptyArray;
    
                /**
                 * Publishing docTagPrefix.
                 * @member {string} docTagPrefix
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.docTagPrefix = "";
    
                /**
                 * Publishing organization.
                 * @member {google.api.ClientLibraryOrganization} organization
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.organization = 0;
    
                /**
                 * Publishing librarySettings.
                 * @member {Array.<google.api.IClientLibrarySettings>} librarySettings
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.librarySettings = $util.emptyArray;
    
                /**
                 * Publishing protoReferenceDocumentationUri.
                 * @member {string} protoReferenceDocumentationUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.protoReferenceDocumentationUri = "";
    
                /**
                 * Creates a new Publishing instance using the specified properties.
                 * @function create
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing=} [properties] Properties to set
                 * @returns {google.api.Publishing} Publishing instance
                 */
                Publishing.create = function create(properties) {
                    return new Publishing(properties);
                };
    
                /**
                 * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing} message Publishing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Publishing.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.methodSettings != null && message.methodSettings.length)
                        for (var i = 0; i < message.methodSettings.length; ++i)
                            $root.google.api.MethodSettings.encode(message.methodSettings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.newIssueUri != null && Object.hasOwnProperty.call(message, "newIssueUri"))
                        writer.uint32(/* id 101, wireType 2 =*/810).string(message.newIssueUri);
                    if (message.documentationUri != null && Object.hasOwnProperty.call(message, "documentationUri"))
                        writer.uint32(/* id 102, wireType 2 =*/818).string(message.documentationUri);
                    if (message.apiShortName != null && Object.hasOwnProperty.call(message, "apiShortName"))
                        writer.uint32(/* id 103, wireType 2 =*/826).string(message.apiShortName);
                    if (message.githubLabel != null && Object.hasOwnProperty.call(message, "githubLabel"))
                        writer.uint32(/* id 104, wireType 2 =*/834).string(message.githubLabel);
                    if (message.codeownerGithubTeams != null && message.codeownerGithubTeams.length)
                        for (var i = 0; i < message.codeownerGithubTeams.length; ++i)
                            writer.uint32(/* id 105, wireType 2 =*/842).string(message.codeownerGithubTeams[i]);
                    if (message.docTagPrefix != null && Object.hasOwnProperty.call(message, "docTagPrefix"))
                        writer.uint32(/* id 106, wireType 2 =*/850).string(message.docTagPrefix);
                    if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
                        writer.uint32(/* id 107, wireType 0 =*/856).int32(message.organization);
                    if (message.librarySettings != null && message.librarySettings.length)
                        for (var i = 0; i < message.librarySettings.length; ++i)
                            $root.google.api.ClientLibrarySettings.encode(message.librarySettings[i], writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
                    if (message.protoReferenceDocumentationUri != null && Object.hasOwnProperty.call(message, "protoReferenceDocumentationUri"))
                        writer.uint32(/* id 110, wireType 2 =*/882).string(message.protoReferenceDocumentationUri);
                    return writer;
                };
    
                /**
                 * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing} message Publishing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Publishing.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Publishing message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Publishing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Publishing} Publishing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Publishing.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Publishing();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.methodSettings && message.methodSettings.length))
                                    message.methodSettings = [];
                                message.methodSettings.push($root.google.api.MethodSettings.decode(reader, reader.uint32()));
                                break;
                            }
                        case 101: {
                                message.newIssueUri = reader.string();
                                break;
                            }
                        case 102: {
                                message.documentationUri = reader.string();
                                break;
                            }
                        case 103: {
                                message.apiShortName = reader.string();
                                break;
                            }
                        case 104: {
                                message.githubLabel = reader.string();
                                break;
                            }
                        case 105: {
                                if (!(message.codeownerGithubTeams && message.codeownerGithubTeams.length))
                                    message.codeownerGithubTeams = [];
                                message.codeownerGithubTeams.push(reader.string());
                                break;
                            }
                        case 106: {
                                message.docTagPrefix = reader.string();
                                break;
                            }
                        case 107: {
                                message.organization = reader.int32();
                                break;
                            }
                        case 109: {
                                if (!(message.librarySettings && message.librarySettings.length))
                                    message.librarySettings = [];
                                message.librarySettings.push($root.google.api.ClientLibrarySettings.decode(reader, reader.uint32()));
                                break;
                            }
                        case 110: {
                                message.protoReferenceDocumentationUri = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Publishing message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Publishing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Publishing} Publishing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Publishing.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Publishing message.
                 * @function verify
                 * @memberof google.api.Publishing
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Publishing.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.methodSettings != null && message.hasOwnProperty("methodSettings")) {
                        if (!Array.isArray(message.methodSettings))
                            return "methodSettings: array expected";
                        for (var i = 0; i < message.methodSettings.length; ++i) {
                            var error = $root.google.api.MethodSettings.verify(message.methodSettings[i]);
                            if (error)
                                return "methodSettings." + error;
                        }
                    }
                    if (message.newIssueUri != null && message.hasOwnProperty("newIssueUri"))
                        if (!$util.isString(message.newIssueUri))
                            return "newIssueUri: string expected";
                    if (message.documentationUri != null && message.hasOwnProperty("documentationUri"))
                        if (!$util.isString(message.documentationUri))
                            return "documentationUri: string expected";
                    if (message.apiShortName != null && message.hasOwnProperty("apiShortName"))
                        if (!$util.isString(message.apiShortName))
                            return "apiShortName: string expected";
                    if (message.githubLabel != null && message.hasOwnProperty("githubLabel"))
                        if (!$util.isString(message.githubLabel))
                            return "githubLabel: string expected";
                    if (message.codeownerGithubTeams != null && message.hasOwnProperty("codeownerGithubTeams")) {
                        if (!Array.isArray(message.codeownerGithubTeams))
                            return "codeownerGithubTeams: array expected";
                        for (var i = 0; i < message.codeownerGithubTeams.length; ++i)
                            if (!$util.isString(message.codeownerGithubTeams[i]))
                                return "codeownerGithubTeams: string[] expected";
                    }
                    if (message.docTagPrefix != null && message.hasOwnProperty("docTagPrefix"))
                        if (!$util.isString(message.docTagPrefix))
                            return "docTagPrefix: string expected";
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        switch (message.organization) {
                        default:
                            return "organization: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                    if (message.librarySettings != null && message.hasOwnProperty("librarySettings")) {
                        if (!Array.isArray(message.librarySettings))
                            return "librarySettings: array expected";
                        for (var i = 0; i < message.librarySettings.length; ++i) {
                            var error = $root.google.api.ClientLibrarySettings.verify(message.librarySettings[i]);
                            if (error)
                                return "librarySettings." + error;
                        }
                    }
                    if (message.protoReferenceDocumentationUri != null && message.hasOwnProperty("protoReferenceDocumentationUri"))
                        if (!$util.isString(message.protoReferenceDocumentationUri))
                            return "protoReferenceDocumentationUri: string expected";
                    return null;
                };
    
                /**
                 * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Publishing
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Publishing} Publishing
                 */
                Publishing.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Publishing)
                        return object;
                    var message = new $root.google.api.Publishing();
                    if (object.methodSettings) {
                        if (!Array.isArray(object.methodSettings))
                            throw TypeError(".google.api.Publishing.methodSettings: array expected");
                        message.methodSettings = [];
                        for (var i = 0; i < object.methodSettings.length; ++i) {
                            if (typeof object.methodSettings[i] !== "object")
                                throw TypeError(".google.api.Publishing.methodSettings: object expected");
                            message.methodSettings[i] = $root.google.api.MethodSettings.fromObject(object.methodSettings[i]);
                        }
                    }
                    if (object.newIssueUri != null)
                        message.newIssueUri = String(object.newIssueUri);
                    if (object.documentationUri != null)
                        message.documentationUri = String(object.documentationUri);
                    if (object.apiShortName != null)
                        message.apiShortName = String(object.apiShortName);
                    if (object.githubLabel != null)
                        message.githubLabel = String(object.githubLabel);
                    if (object.codeownerGithubTeams) {
                        if (!Array.isArray(object.codeownerGithubTeams))
                            throw TypeError(".google.api.Publishing.codeownerGithubTeams: array expected");
                        message.codeownerGithubTeams = [];
                        for (var i = 0; i < object.codeownerGithubTeams.length; ++i)
                            message.codeownerGithubTeams[i] = String(object.codeownerGithubTeams[i]);
                    }
                    if (object.docTagPrefix != null)
                        message.docTagPrefix = String(object.docTagPrefix);
                    switch (object.organization) {
                    default:
                        if (typeof object.organization === "number") {
                            message.organization = object.organization;
                            break;
                        }
                        break;
                    case "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED":
                    case 0:
                        message.organization = 0;
                        break;
                    case "CLOUD":
                    case 1:
                        message.organization = 1;
                        break;
                    case "ADS":
                    case 2:
                        message.organization = 2;
                        break;
                    case "PHOTOS":
                    case 3:
                        message.organization = 3;
                        break;
                    case "STREET_VIEW":
                    case 4:
                        message.organization = 4;
                        break;
                    case "SHOPPING":
                    case 5:
                        message.organization = 5;
                        break;
                    case "GEO":
                    case 6:
                        message.organization = 6;
                        break;
                    case "GENERATIVE_AI":
                    case 7:
                        message.organization = 7;
                        break;
                    }
                    if (object.librarySettings) {
                        if (!Array.isArray(object.librarySettings))
                            throw TypeError(".google.api.Publishing.librarySettings: array expected");
                        message.librarySettings = [];
                        for (var i = 0; i < object.librarySettings.length; ++i) {
                            if (typeof object.librarySettings[i] !== "object")
                                throw TypeError(".google.api.Publishing.librarySettings: object expected");
                            message.librarySettings[i] = $root.google.api.ClientLibrarySettings.fromObject(object.librarySettings[i]);
                        }
                    }
                    if (object.protoReferenceDocumentationUri != null)
                        message.protoReferenceDocumentationUri = String(object.protoReferenceDocumentationUri);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Publishing message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.Publishing} message Publishing
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Publishing.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.methodSettings = [];
                        object.codeownerGithubTeams = [];
                        object.librarySettings = [];
                    }
                    if (options.defaults) {
                        object.newIssueUri = "";
                        object.documentationUri = "";
                        object.apiShortName = "";
                        object.githubLabel = "";
                        object.docTagPrefix = "";
                        object.organization = options.enums === String ? "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED" : 0;
                        object.protoReferenceDocumentationUri = "";
                    }
                    if (message.methodSettings && message.methodSettings.length) {
                        object.methodSettings = [];
                        for (var j = 0; j < message.methodSettings.length; ++j)
                            object.methodSettings[j] = $root.google.api.MethodSettings.toObject(message.methodSettings[j], options);
                    }
                    if (message.newIssueUri != null && message.hasOwnProperty("newIssueUri"))
                        object.newIssueUri = message.newIssueUri;
                    if (message.documentationUri != null && message.hasOwnProperty("documentationUri"))
                        object.documentationUri = message.documentationUri;
                    if (message.apiShortName != null && message.hasOwnProperty("apiShortName"))
                        object.apiShortName = message.apiShortName;
                    if (message.githubLabel != null && message.hasOwnProperty("githubLabel"))
                        object.githubLabel = message.githubLabel;
                    if (message.codeownerGithubTeams && message.codeownerGithubTeams.length) {
                        object.codeownerGithubTeams = [];
                        for (var j = 0; j < message.codeownerGithubTeams.length; ++j)
                            object.codeownerGithubTeams[j] = message.codeownerGithubTeams[j];
                    }
                    if (message.docTagPrefix != null && message.hasOwnProperty("docTagPrefix"))
                        object.docTagPrefix = message.docTagPrefix;
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        object.organization = options.enums === String ? $root.google.api.ClientLibraryOrganization[message.organization] === undefined ? message.organization : $root.google.api.ClientLibraryOrganization[message.organization] : message.organization;
                    if (message.librarySettings && message.librarySettings.length) {
                        object.librarySettings = [];
                        for (var j = 0; j < message.librarySettings.length; ++j)
                            object.librarySettings[j] = $root.google.api.ClientLibrarySettings.toObject(message.librarySettings[j], options);
                    }
                    if (message.protoReferenceDocumentationUri != null && message.hasOwnProperty("protoReferenceDocumentationUri"))
                        object.protoReferenceDocumentationUri = message.protoReferenceDocumentationUri;
                    return object;
                };
    
                /**
                 * Converts this Publishing to JSON.
                 * @function toJSON
                 * @memberof google.api.Publishing
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Publishing.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Publishing
                 * @function getTypeUrl
                 * @memberof google.api.Publishing
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Publishing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.Publishing";
                };
    
                return Publishing;
            })();
    
            api.JavaSettings = (function() {
    
                /**
                 * Properties of a JavaSettings.
                 * @memberof google.api
                 * @interface IJavaSettings
                 * @property {string|null} [libraryPackage] JavaSettings libraryPackage
                 * @property {Object.<string,string>|null} [serviceClassNames] JavaSettings serviceClassNames
                 * @property {google.api.ICommonLanguageSettings|null} [common] JavaSettings common
                 */
    
                /**
                 * Constructs a new JavaSettings.
                 * @memberof google.api
                 * @classdesc Represents a JavaSettings.
                 * @implements IJavaSettings
                 * @constructor
                 * @param {google.api.IJavaSettings=} [properties] Properties to set
                 */
                function JavaSettings(properties) {
                    this.serviceClassNames = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * JavaSettings libraryPackage.
                 * @member {string} libraryPackage
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.libraryPackage = "";
    
                /**
                 * JavaSettings serviceClassNames.
                 * @member {Object.<string,string>} serviceClassNames
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.serviceClassNames = $util.emptyObject;
    
                /**
                 * JavaSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.common = null;
    
                /**
                 * Creates a new JavaSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings=} [properties] Properties to set
                 * @returns {google.api.JavaSettings} JavaSettings instance
                 */
                JavaSettings.create = function create(properties) {
                    return new JavaSettings(properties);
                };
    
                /**
                 * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings} message JavaSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JavaSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.libraryPackage != null && Object.hasOwnProperty.call(message, "libraryPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.libraryPackage);
                    if (message.serviceClassNames != null && Object.hasOwnProperty.call(message, "serviceClassNames"))
                        for (var keys = Object.keys(message.serviceClassNames), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.serviceClassNames[keys[i]]).ldelim();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings} message JavaSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JavaSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a JavaSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.JavaSettings} JavaSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                JavaSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.JavaSettings(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.libraryPackage = reader.string();
                                break;
                            }
                        case 2: {
                                if (message.serviceClassNames === $util.emptyObject)
                                    message.serviceClassNames = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.serviceClassNames[key] = value;
                                break;
                            }
                        case 3: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.JavaSettings} JavaSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                JavaSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a JavaSettings message.
                 * @function verify
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                JavaSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.libraryPackage != null && message.hasOwnProperty("libraryPackage"))
                        if (!$util.isString(message.libraryPackage))
                            return "libraryPackage: string expected";
                    if (message.serviceClassNames != null && message.hasOwnProperty("serviceClassNames")) {
                        if (!$util.isObject(message.serviceClassNames))
                            return "serviceClassNames: object expected";
                        var key = Object.keys(message.serviceClassNames);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.serviceClassNames[key[i]]))
                                return "serviceClassNames: string{k:string} expected";
                    }
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.JavaSettings} JavaSettings
                 */
                JavaSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.JavaSettings)
                        return object;
                    var message = new $root.google.api.JavaSettings();
                    if (object.libraryPackage != null)
                        message.libraryPackage = String(object.libraryPackage);
                    if (object.serviceClassNames) {
                        if (typeof object.serviceClassNames !== "object")
                            throw TypeError(".google.api.JavaSettings.serviceClassNames: object expected");
                        message.serviceClassNames = {};
                        for (var keys = Object.keys(object.serviceClassNames), i = 0; i < keys.length; ++i)
                            message.serviceClassNames[keys[i]] = String(object.serviceClassNames[keys[i]]);
                    }
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.JavaSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.JavaSettings} message JavaSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                JavaSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.serviceClassNames = {};
                    if (options.defaults) {
                        object.libraryPackage = "";
                        object.common = null;
                    }
                    if (message.libraryPackage != null && message.hasOwnProperty("libraryPackage"))
                        object.libraryPackage = message.libraryPackage;
                    var keys2;
                    if (message.serviceClassNames && (keys2 = Object.keys(message.serviceClassNames)).length) {
                        object.serviceClassNames = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.serviceClassNames[keys2[j]] = message.serviceClassNames[keys2[j]];
                    }
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this JavaSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.JavaSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                JavaSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for JavaSettings
                 * @function getTypeUrl
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                JavaSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.JavaSettings";
                };
    
                return JavaSettings;
            })();
    
            api.CppSettings = (function() {
    
                /**
                 * Properties of a CppSettings.
                 * @memberof google.api
                 * @interface ICppSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] CppSettings common
                 */
    
                /**
                 * Constructs a new CppSettings.
                 * @memberof google.api
                 * @classdesc Represents a CppSettings.
                 * @implements ICppSettings
                 * @constructor
                 * @param {google.api.ICppSettings=} [properties] Properties to set
                 */
                function CppSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CppSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.CppSettings
                 * @instance
                 */
                CppSettings.prototype.common = null;
    
                /**
                 * Creates a new CppSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings=} [properties] Properties to set
                 * @returns {google.api.CppSettings} CppSettings instance
                 */
                CppSettings.create = function create(properties) {
                    return new CppSettings(properties);
                };
    
                /**
                 * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings} message CppSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CppSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings} message CppSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CppSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CppSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CppSettings} CppSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CppSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CppSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CppSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CppSettings} CppSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CppSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CppSettings message.
                 * @function verify
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CppSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CppSettings} CppSettings
                 */
                CppSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CppSettings)
                        return object;
                    var message = new $root.google.api.CppSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.CppSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.CppSettings} message CppSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CppSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this CppSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.CppSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CppSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CppSettings
                 * @function getTypeUrl
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CppSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CppSettings";
                };
    
                return CppSettings;
            })();
    
            api.PhpSettings = (function() {
    
                /**
                 * Properties of a PhpSettings.
                 * @memberof google.api
                 * @interface IPhpSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] PhpSettings common
                 */
    
                /**
                 * Constructs a new PhpSettings.
                 * @memberof google.api
                 * @classdesc Represents a PhpSettings.
                 * @implements IPhpSettings
                 * @constructor
                 * @param {google.api.IPhpSettings=} [properties] Properties to set
                 */
                function PhpSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PhpSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.PhpSettings
                 * @instance
                 */
                PhpSettings.prototype.common = null;
    
                /**
                 * Creates a new PhpSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings=} [properties] Properties to set
                 * @returns {google.api.PhpSettings} PhpSettings instance
                 */
                PhpSettings.create = function create(properties) {
                    return new PhpSettings(properties);
                };
    
                /**
                 * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings} message PhpSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhpSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings} message PhpSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhpSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PhpSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.PhpSettings} PhpSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhpSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.PhpSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.PhpSettings} PhpSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhpSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PhpSettings message.
                 * @function verify
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PhpSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.PhpSettings} PhpSettings
                 */
                PhpSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.PhpSettings)
                        return object;
                    var message = new $root.google.api.PhpSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.PhpSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.PhpSettings} message PhpSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PhpSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this PhpSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.PhpSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PhpSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PhpSettings
                 * @function getTypeUrl
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PhpSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.PhpSettings";
                };
    
                return PhpSettings;
            })();
    
            api.PythonSettings = (function() {
    
                /**
                 * Properties of a PythonSettings.
                 * @memberof google.api
                 * @interface IPythonSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] PythonSettings common
                 */
    
                /**
                 * Constructs a new PythonSettings.
                 * @memberof google.api
                 * @classdesc Represents a PythonSettings.
                 * @implements IPythonSettings
                 * @constructor
                 * @param {google.api.IPythonSettings=} [properties] Properties to set
                 */
                function PythonSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PythonSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.PythonSettings
                 * @instance
                 */
                PythonSettings.prototype.common = null;
    
                /**
                 * Creates a new PythonSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings=} [properties] Properties to set
                 * @returns {google.api.PythonSettings} PythonSettings instance
                 */
                PythonSettings.create = function create(properties) {
                    return new PythonSettings(properties);
                };
    
                /**
                 * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings} message PythonSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PythonSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings} message PythonSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PythonSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PythonSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.PythonSettings} PythonSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PythonSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.PythonSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.PythonSettings} PythonSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PythonSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PythonSettings message.
                 * @function verify
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PythonSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.PythonSettings} PythonSettings
                 */
                PythonSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.PythonSettings)
                        return object;
                    var message = new $root.google.api.PythonSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.PythonSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.PythonSettings} message PythonSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PythonSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this PythonSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.PythonSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PythonSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PythonSettings
                 * @function getTypeUrl
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PythonSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.PythonSettings";
                };
    
                return PythonSettings;
            })();
    
            api.NodeSettings = (function() {
    
                /**
                 * Properties of a NodeSettings.
                 * @memberof google.api
                 * @interface INodeSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] NodeSettings common
                 */
    
                /**
                 * Constructs a new NodeSettings.
                 * @memberof google.api
                 * @classdesc Represents a NodeSettings.
                 * @implements INodeSettings
                 * @constructor
                 * @param {google.api.INodeSettings=} [properties] Properties to set
                 */
                function NodeSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NodeSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.NodeSettings
                 * @instance
                 */
                NodeSettings.prototype.common = null;
    
                /**
                 * Creates a new NodeSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings=} [properties] Properties to set
                 * @returns {google.api.NodeSettings} NodeSettings instance
                 */
                NodeSettings.create = function create(properties) {
                    return new NodeSettings(properties);
                };
    
                /**
                 * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings} message NodeSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings} message NodeSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NodeSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.NodeSettings} NodeSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.NodeSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.NodeSettings} NodeSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NodeSettings message.
                 * @function verify
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NodeSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.NodeSettings} NodeSettings
                 */
                NodeSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.NodeSettings)
                        return object;
                    var message = new $root.google.api.NodeSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.NodeSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.NodeSettings} message NodeSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NodeSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this NodeSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.NodeSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NodeSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for NodeSettings
                 * @function getTypeUrl
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NodeSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.NodeSettings";
                };
    
                return NodeSettings;
            })();
    
            api.DotnetSettings = (function() {
    
                /**
                 * Properties of a DotnetSettings.
                 * @memberof google.api
                 * @interface IDotnetSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] DotnetSettings common
                 * @property {Object.<string,string>|null} [renamedServices] DotnetSettings renamedServices
                 * @property {Object.<string,string>|null} [renamedResources] DotnetSettings renamedResources
                 * @property {Array.<string>|null} [ignoredResources] DotnetSettings ignoredResources
                 * @property {Array.<string>|null} [forcedNamespaceAliases] DotnetSettings forcedNamespaceAliases
                 * @property {Array.<string>|null} [handwrittenSignatures] DotnetSettings handwrittenSignatures
                 */
    
                /**
                 * Constructs a new DotnetSettings.
                 * @memberof google.api
                 * @classdesc Represents a DotnetSettings.
                 * @implements IDotnetSettings
                 * @constructor
                 * @param {google.api.IDotnetSettings=} [properties] Properties to set
                 */
                function DotnetSettings(properties) {
                    this.renamedServices = {};
                    this.renamedResources = {};
                    this.ignoredResources = [];
                    this.forcedNamespaceAliases = [];
                    this.handwrittenSignatures = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DotnetSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.common = null;
    
                /**
                 * DotnetSettings renamedServices.
                 * @member {Object.<string,string>} renamedServices
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.renamedServices = $util.emptyObject;
    
                /**
                 * DotnetSettings renamedResources.
                 * @member {Object.<string,string>} renamedResources
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.renamedResources = $util.emptyObject;
    
                /**
                 * DotnetSettings ignoredResources.
                 * @member {Array.<string>} ignoredResources
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.ignoredResources = $util.emptyArray;
    
                /**
                 * DotnetSettings forcedNamespaceAliases.
                 * @member {Array.<string>} forcedNamespaceAliases
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.forcedNamespaceAliases = $util.emptyArray;
    
                /**
                 * DotnetSettings handwrittenSignatures.
                 * @member {Array.<string>} handwrittenSignatures
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.handwrittenSignatures = $util.emptyArray;
    
                /**
                 * Creates a new DotnetSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings=} [properties] Properties to set
                 * @returns {google.api.DotnetSettings} DotnetSettings instance
                 */
                DotnetSettings.create = function create(properties) {
                    return new DotnetSettings(properties);
                };
    
                /**
                 * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings} message DotnetSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DotnetSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.renamedServices != null && Object.hasOwnProperty.call(message, "renamedServices"))
                        for (var keys = Object.keys(message.renamedServices), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.renamedServices[keys[i]]).ldelim();
                    if (message.renamedResources != null && Object.hasOwnProperty.call(message, "renamedResources"))
                        for (var keys = Object.keys(message.renamedResources), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.renamedResources[keys[i]]).ldelim();
                    if (message.ignoredResources != null && message.ignoredResources.length)
                        for (var i = 0; i < message.ignoredResources.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ignoredResources[i]);
                    if (message.forcedNamespaceAliases != null && message.forcedNamespaceAliases.length)
                        for (var i = 0; i < message.forcedNamespaceAliases.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.forcedNamespaceAliases[i]);
                    if (message.handwrittenSignatures != null && message.handwrittenSignatures.length)
                        for (var i = 0; i < message.handwrittenSignatures.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.handwrittenSignatures[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings} message DotnetSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DotnetSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DotnetSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DotnetSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.DotnetSettings(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                if (message.renamedServices === $util.emptyObject)
                                    message.renamedServices = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.renamedServices[key] = value;
                                break;
                            }
                        case 3: {
                                if (message.renamedResources === $util.emptyObject)
                                    message.renamedResources = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.renamedResources[key] = value;
                                break;
                            }
                        case 4: {
                                if (!(message.ignoredResources && message.ignoredResources.length))
                                    message.ignoredResources = [];
                                message.ignoredResources.push(reader.string());
                                break;
                            }
                        case 5: {
                                if (!(message.forcedNamespaceAliases && message.forcedNamespaceAliases.length))
                                    message.forcedNamespaceAliases = [];
                                message.forcedNamespaceAliases.push(reader.string());
                                break;
                            }
                        case 6: {
                                if (!(message.handwrittenSignatures && message.handwrittenSignatures.length))
                                    message.handwrittenSignatures = [];
                                message.handwrittenSignatures.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DotnetSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DotnetSettings message.
                 * @function verify
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DotnetSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    if (message.renamedServices != null && message.hasOwnProperty("renamedServices")) {
                        if (!$util.isObject(message.renamedServices))
                            return "renamedServices: object expected";
                        var key = Object.keys(message.renamedServices);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.renamedServices[key[i]]))
                                return "renamedServices: string{k:string} expected";
                    }
                    if (message.renamedResources != null && message.hasOwnProperty("renamedResources")) {
                        if (!$util.isObject(message.renamedResources))
                            return "renamedResources: object expected";
                        var key = Object.keys(message.renamedResources);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.renamedResources[key[i]]))
                                return "renamedResources: string{k:string} expected";
                    }
                    if (message.ignoredResources != null && message.hasOwnProperty("ignoredResources")) {
                        if (!Array.isArray(message.ignoredResources))
                            return "ignoredResources: array expected";
                        for (var i = 0; i < message.ignoredResources.length; ++i)
                            if (!$util.isString(message.ignoredResources[i]))
                                return "ignoredResources: string[] expected";
                    }
                    if (message.forcedNamespaceAliases != null && message.hasOwnProperty("forcedNamespaceAliases")) {
                        if (!Array.isArray(message.forcedNamespaceAliases))
                            return "forcedNamespaceAliases: array expected";
                        for (var i = 0; i < message.forcedNamespaceAliases.length; ++i)
                            if (!$util.isString(message.forcedNamespaceAliases[i]))
                                return "forcedNamespaceAliases: string[] expected";
                    }
                    if (message.handwrittenSignatures != null && message.hasOwnProperty("handwrittenSignatures")) {
                        if (!Array.isArray(message.handwrittenSignatures))
                            return "handwrittenSignatures: array expected";
                        for (var i = 0; i < message.handwrittenSignatures.length; ++i)
                            if (!$util.isString(message.handwrittenSignatures[i]))
                                return "handwrittenSignatures: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 */
                DotnetSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.DotnetSettings)
                        return object;
                    var message = new $root.google.api.DotnetSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.DotnetSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    if (object.renamedServices) {
                        if (typeof object.renamedServices !== "object")
                            throw TypeError(".google.api.DotnetSettings.renamedServices: object expected");
                        message.renamedServices = {};
                        for (var keys = Object.keys(object.renamedServices), i = 0; i < keys.length; ++i)
                            message.renamedServices[keys[i]] = String(object.renamedServices[keys[i]]);
                    }
                    if (object.renamedResources) {
                        if (typeof object.renamedResources !== "object")
                            throw TypeError(".google.api.DotnetSettings.renamedResources: object expected");
                        message.renamedResources = {};
                        for (var keys = Object.keys(object.renamedResources), i = 0; i < keys.length; ++i)
                            message.renamedResources[keys[i]] = String(object.renamedResources[keys[i]]);
                    }
                    if (object.ignoredResources) {
                        if (!Array.isArray(object.ignoredResources))
                            throw TypeError(".google.api.DotnetSettings.ignoredResources: array expected");
                        message.ignoredResources = [];
                        for (var i = 0; i < object.ignoredResources.length; ++i)
                            message.ignoredResources[i] = String(object.ignoredResources[i]);
                    }
                    if (object.forcedNamespaceAliases) {
                        if (!Array.isArray(object.forcedNamespaceAliases))
                            throw TypeError(".google.api.DotnetSettings.forcedNamespaceAliases: array expected");
                        message.forcedNamespaceAliases = [];
                        for (var i = 0; i < object.forcedNamespaceAliases.length; ++i)
                            message.forcedNamespaceAliases[i] = String(object.forcedNamespaceAliases[i]);
                    }
                    if (object.handwrittenSignatures) {
                        if (!Array.isArray(object.handwrittenSignatures))
                            throw TypeError(".google.api.DotnetSettings.handwrittenSignatures: array expected");
                        message.handwrittenSignatures = [];
                        for (var i = 0; i < object.handwrittenSignatures.length; ++i)
                            message.handwrittenSignatures[i] = String(object.handwrittenSignatures[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.DotnetSettings} message DotnetSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DotnetSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.ignoredResources = [];
                        object.forcedNamespaceAliases = [];
                        object.handwrittenSignatures = [];
                    }
                    if (options.objects || options.defaults) {
                        object.renamedServices = {};
                        object.renamedResources = {};
                    }
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    var keys2;
                    if (message.renamedServices && (keys2 = Object.keys(message.renamedServices)).length) {
                        object.renamedServices = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.renamedServices[keys2[j]] = message.renamedServices[keys2[j]];
                    }
                    if (message.renamedResources && (keys2 = Object.keys(message.renamedResources)).length) {
                        object.renamedResources = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.renamedResources[keys2[j]] = message.renamedResources[keys2[j]];
                    }
                    if (message.ignoredResources && message.ignoredResources.length) {
                        object.ignoredResources = [];
                        for (var j = 0; j < message.ignoredResources.length; ++j)
                            object.ignoredResources[j] = message.ignoredResources[j];
                    }
                    if (message.forcedNamespaceAliases && message.forcedNamespaceAliases.length) {
                        object.forcedNamespaceAliases = [];
                        for (var j = 0; j < message.forcedNamespaceAliases.length; ++j)
                            object.forcedNamespaceAliases[j] = message.forcedNamespaceAliases[j];
                    }
                    if (message.handwrittenSignatures && message.handwrittenSignatures.length) {
                        object.handwrittenSignatures = [];
                        for (var j = 0; j < message.handwrittenSignatures.length; ++j)
                            object.handwrittenSignatures[j] = message.handwrittenSignatures[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DotnetSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.DotnetSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DotnetSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DotnetSettings
                 * @function getTypeUrl
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DotnetSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.DotnetSettings";
                };
    
                return DotnetSettings;
            })();
    
            api.RubySettings = (function() {
    
                /**
                 * Properties of a RubySettings.
                 * @memberof google.api
                 * @interface IRubySettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] RubySettings common
                 */
    
                /**
                 * Constructs a new RubySettings.
                 * @memberof google.api
                 * @classdesc Represents a RubySettings.
                 * @implements IRubySettings
                 * @constructor
                 * @param {google.api.IRubySettings=} [properties] Properties to set
                 */
                function RubySettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RubySettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.RubySettings
                 * @instance
                 */
                RubySettings.prototype.common = null;
    
                /**
                 * Creates a new RubySettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings=} [properties] Properties to set
                 * @returns {google.api.RubySettings} RubySettings instance
                 */
                RubySettings.create = function create(properties) {
                    return new RubySettings(properties);
                };
    
                /**
                 * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings} message RubySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RubySettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings} message RubySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RubySettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RubySettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.RubySettings} RubySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RubySettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.RubySettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RubySettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.RubySettings} RubySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RubySettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RubySettings message.
                 * @function verify
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RubySettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.RubySettings} RubySettings
                 */
                RubySettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.RubySettings)
                        return object;
                    var message = new $root.google.api.RubySettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.RubySettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.RubySettings} message RubySettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RubySettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this RubySettings to JSON.
                 * @function toJSON
                 * @memberof google.api.RubySettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RubySettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for RubySettings
                 * @function getTypeUrl
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RubySettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.RubySettings";
                };
    
                return RubySettings;
            })();
    
            api.GoSettings = (function() {
    
                /**
                 * Properties of a GoSettings.
                 * @memberof google.api
                 * @interface IGoSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] GoSettings common
                 */
    
                /**
                 * Constructs a new GoSettings.
                 * @memberof google.api
                 * @classdesc Represents a GoSettings.
                 * @implements IGoSettings
                 * @constructor
                 * @param {google.api.IGoSettings=} [properties] Properties to set
                 */
                function GoSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GoSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.GoSettings
                 * @instance
                 */
                GoSettings.prototype.common = null;
    
                /**
                 * Creates a new GoSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings=} [properties] Properties to set
                 * @returns {google.api.GoSettings} GoSettings instance
                 */
                GoSettings.create = function create(properties) {
                    return new GoSettings(properties);
                };
    
                /**
                 * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings} message GoSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings} message GoSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GoSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.GoSettings} GoSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.GoSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GoSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.GoSettings} GoSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GoSettings message.
                 * @function verify
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GoSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.GoSettings} GoSettings
                 */
                GoSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.GoSettings)
                        return object;
                    var message = new $root.google.api.GoSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.GoSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.GoSettings} message GoSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GoSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this GoSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.GoSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GoSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for GoSettings
                 * @function getTypeUrl
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GoSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.GoSettings";
                };
    
                return GoSettings;
            })();
    
            api.MethodSettings = (function() {
    
                /**
                 * Properties of a MethodSettings.
                 * @memberof google.api
                 * @interface IMethodSettings
                 * @property {string|null} [selector] MethodSettings selector
                 * @property {google.api.MethodSettings.ILongRunning|null} [longRunning] MethodSettings longRunning
                 */
    
                /**
                 * Constructs a new MethodSettings.
                 * @memberof google.api
                 * @classdesc Represents a MethodSettings.
                 * @implements IMethodSettings
                 * @constructor
                 * @param {google.api.IMethodSettings=} [properties] Properties to set
                 */
                function MethodSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodSettings selector.
                 * @member {string} selector
                 * @memberof google.api.MethodSettings
                 * @instance
                 */
                MethodSettings.prototype.selector = "";
    
                /**
                 * MethodSettings longRunning.
                 * @member {google.api.MethodSettings.ILongRunning|null|undefined} longRunning
                 * @memberof google.api.MethodSettings
                 * @instance
                 */
                MethodSettings.prototype.longRunning = null;
    
                /**
                 * Creates a new MethodSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings=} [properties] Properties to set
                 * @returns {google.api.MethodSettings} MethodSettings instance
                 */
                MethodSettings.create = function create(properties) {
                    return new MethodSettings(properties);
                };
    
                /**
                 * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings} message MethodSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.longRunning != null && Object.hasOwnProperty.call(message, "longRunning"))
                        $root.google.api.MethodSettings.LongRunning.encode(message.longRunning, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings} message MethodSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.MethodSettings} MethodSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.MethodSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.selector = reader.string();
                                break;
                            }
                        case 2: {
                                message.longRunning = $root.google.api.MethodSettings.LongRunning.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.MethodSettings} MethodSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodSettings message.
                 * @function verify
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.longRunning != null && message.hasOwnProperty("longRunning")) {
                        var error = $root.google.api.MethodSettings.LongRunning.verify(message.longRunning);
                        if (error)
                            return "longRunning." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.MethodSettings} MethodSettings
                 */
                MethodSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.MethodSettings)
                        return object;
                    var message = new $root.google.api.MethodSettings();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.longRunning != null) {
                        if (typeof object.longRunning !== "object")
                            throw TypeError(".google.api.MethodSettings.longRunning: object expected");
                        message.longRunning = $root.google.api.MethodSettings.LongRunning.fromObject(object.longRunning);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.MethodSettings} message MethodSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.selector = "";
                        object.longRunning = null;
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.longRunning != null && message.hasOwnProperty("longRunning"))
                        object.longRunning = $root.google.api.MethodSettings.LongRunning.toObject(message.longRunning, options);
                    return object;
                };
    
                /**
                 * Converts this MethodSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.MethodSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodSettings
                 * @function getTypeUrl
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.MethodSettings";
                };
    
                MethodSettings.LongRunning = (function() {
    
                    /**
                     * Properties of a LongRunning.
                     * @memberof google.api.MethodSettings
                     * @interface ILongRunning
                     * @property {google.protobuf.IDuration|null} [initialPollDelay] LongRunning initialPollDelay
                     * @property {number|null} [pollDelayMultiplier] LongRunning pollDelayMultiplier
                     * @property {google.protobuf.IDuration|null} [maxPollDelay] LongRunning maxPollDelay
                     * @property {google.protobuf.IDuration|null} [totalPollTimeout] LongRunning totalPollTimeout
                     */
    
                    /**
                     * Constructs a new LongRunning.
                     * @memberof google.api.MethodSettings
                     * @classdesc Represents a LongRunning.
                     * @implements ILongRunning
                     * @constructor
                     * @param {google.api.MethodSettings.ILongRunning=} [properties] Properties to set
                     */
                    function LongRunning(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * LongRunning initialPollDelay.
                     * @member {google.protobuf.IDuration|null|undefined} initialPollDelay
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.initialPollDelay = null;
    
                    /**
                     * LongRunning pollDelayMultiplier.
                     * @member {number} pollDelayMultiplier
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.pollDelayMultiplier = 0;
    
                    /**
                     * LongRunning maxPollDelay.
                     * @member {google.protobuf.IDuration|null|undefined} maxPollDelay
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.maxPollDelay = null;
    
                    /**
                     * LongRunning totalPollTimeout.
                     * @member {google.protobuf.IDuration|null|undefined} totalPollTimeout
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.totalPollTimeout = null;
    
                    /**
                     * Creates a new LongRunning instance using the specified properties.
                     * @function create
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning=} [properties] Properties to set
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning instance
                     */
                    LongRunning.create = function create(properties) {
                        return new LongRunning(properties);
                    };
    
                    /**
                     * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                     * @function encode
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning} message LongRunning message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LongRunning.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.initialPollDelay != null && Object.hasOwnProperty.call(message, "initialPollDelay"))
                            $root.google.protobuf.Duration.encode(message.initialPollDelay, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.pollDelayMultiplier != null && Object.hasOwnProperty.call(message, "pollDelayMultiplier"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.pollDelayMultiplier);
                        if (message.maxPollDelay != null && Object.hasOwnProperty.call(message, "maxPollDelay"))
                            $root.google.protobuf.Duration.encode(message.maxPollDelay, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.totalPollTimeout != null && Object.hasOwnProperty.call(message, "totalPollTimeout"))
                            $root.google.protobuf.Duration.encode(message.totalPollTimeout, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning} message LongRunning message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LongRunning.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a LongRunning message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LongRunning.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.MethodSettings.LongRunning();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.initialPollDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.pollDelayMultiplier = reader.float();
                                    break;
                                }
                            case 3: {
                                    message.maxPollDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.totalPollTimeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LongRunning.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a LongRunning message.
                     * @function verify
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LongRunning.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.initialPollDelay != null && message.hasOwnProperty("initialPollDelay")) {
                            var error = $root.google.protobuf.Duration.verify(message.initialPollDelay);
                            if (error)
                                return "initialPollDelay." + error;
                        }
                        if (message.pollDelayMultiplier != null && message.hasOwnProperty("pollDelayMultiplier"))
                            if (typeof message.pollDelayMultiplier !== "number")
                                return "pollDelayMultiplier: number expected";
                        if (message.maxPollDelay != null && message.hasOwnProperty("maxPollDelay")) {
                            var error = $root.google.protobuf.Duration.verify(message.maxPollDelay);
                            if (error)
                                return "maxPollDelay." + error;
                        }
                        if (message.totalPollTimeout != null && message.hasOwnProperty("totalPollTimeout")) {
                            var error = $root.google.protobuf.Duration.verify(message.totalPollTimeout);
                            if (error)
                                return "totalPollTimeout." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     */
                    LongRunning.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.api.MethodSettings.LongRunning)
                            return object;
                        var message = new $root.google.api.MethodSettings.LongRunning();
                        if (object.initialPollDelay != null) {
                            if (typeof object.initialPollDelay !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.initialPollDelay: object expected");
                            message.initialPollDelay = $root.google.protobuf.Duration.fromObject(object.initialPollDelay);
                        }
                        if (object.pollDelayMultiplier != null)
                            message.pollDelayMultiplier = Number(object.pollDelayMultiplier);
                        if (object.maxPollDelay != null) {
                            if (typeof object.maxPollDelay !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.maxPollDelay: object expected");
                            message.maxPollDelay = $root.google.protobuf.Duration.fromObject(object.maxPollDelay);
                        }
                        if (object.totalPollTimeout != null) {
                            if (typeof object.totalPollTimeout !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.totalPollTimeout: object expected");
                            message.totalPollTimeout = $root.google.protobuf.Duration.fromObject(object.totalPollTimeout);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.LongRunning} message LongRunning
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LongRunning.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.initialPollDelay = null;
                            object.pollDelayMultiplier = 0;
                            object.maxPollDelay = null;
                            object.totalPollTimeout = null;
                        }
                        if (message.initialPollDelay != null && message.hasOwnProperty("initialPollDelay"))
                            object.initialPollDelay = $root.google.protobuf.Duration.toObject(message.initialPollDelay, options);
                        if (message.pollDelayMultiplier != null && message.hasOwnProperty("pollDelayMultiplier"))
                            object.pollDelayMultiplier = options.json && !isFinite(message.pollDelayMultiplier) ? String(message.pollDelayMultiplier) : message.pollDelayMultiplier;
                        if (message.maxPollDelay != null && message.hasOwnProperty("maxPollDelay"))
                            object.maxPollDelay = $root.google.protobuf.Duration.toObject(message.maxPollDelay, options);
                        if (message.totalPollTimeout != null && message.hasOwnProperty("totalPollTimeout"))
                            object.totalPollTimeout = $root.google.protobuf.Duration.toObject(message.totalPollTimeout, options);
                        return object;
                    };
    
                    /**
                     * Converts this LongRunning to JSON.
                     * @function toJSON
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LongRunning.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for LongRunning
                     * @function getTypeUrl
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    LongRunning.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.api.MethodSettings.LongRunning";
                    };
    
                    return LongRunning;
                })();
    
                return MethodSettings;
            })();
    
            /**
             * ClientLibraryOrganization enum.
             * @name google.api.ClientLibraryOrganization
             * @enum {number}
             * @property {number} CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED=0 CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED value
             * @property {number} CLOUD=1 CLOUD value
             * @property {number} ADS=2 ADS value
             * @property {number} PHOTOS=3 PHOTOS value
             * @property {number} STREET_VIEW=4 STREET_VIEW value
             * @property {number} SHOPPING=5 SHOPPING value
             * @property {number} GEO=6 GEO value
             * @property {number} GENERATIVE_AI=7 GENERATIVE_AI value
             */
            api.ClientLibraryOrganization = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED"] = 0;
                values[valuesById[1] = "CLOUD"] = 1;
                values[valuesById[2] = "ADS"] = 2;
                values[valuesById[3] = "PHOTOS"] = 3;
                values[valuesById[4] = "STREET_VIEW"] = 4;
                values[valuesById[5] = "SHOPPING"] = 5;
                values[valuesById[6] = "GEO"] = 6;
                values[valuesById[7] = "GENERATIVE_AI"] = 7;
                return values;
            })();
    
            /**
             * ClientLibraryDestination enum.
             * @name google.api.ClientLibraryDestination
             * @enum {number}
             * @property {number} CLIENT_LIBRARY_DESTINATION_UNSPECIFIED=0 CLIENT_LIBRARY_DESTINATION_UNSPECIFIED value
             * @property {number} GITHUB=10 GITHUB value
             * @property {number} PACKAGE_MANAGER=20 PACKAGE_MANAGER value
             */
            api.ClientLibraryDestination = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"] = 0;
                values[valuesById[10] = "GITHUB"] = 10;
                values[valuesById[20] = "PACKAGE_MANAGER"] = 20;
                return values;
            })();
    
            /**
             * LaunchStage enum.
             * @name google.api.LaunchStage
             * @enum {number}
             * @property {number} LAUNCH_STAGE_UNSPECIFIED=0 LAUNCH_STAGE_UNSPECIFIED value
             * @property {number} UNIMPLEMENTED=6 UNIMPLEMENTED value
             * @property {number} PRELAUNCH=7 PRELAUNCH value
             * @property {number} EARLY_ACCESS=1 EARLY_ACCESS value
             * @property {number} ALPHA=2 ALPHA value
             * @property {number} BETA=3 BETA value
             * @property {number} GA=4 GA value
             * @property {number} DEPRECATED=5 DEPRECATED value
             */
            api.LaunchStage = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "LAUNCH_STAGE_UNSPECIFIED"] = 0;
                values[valuesById[6] = "UNIMPLEMENTED"] = 6;
                values[valuesById[7] = "PRELAUNCH"] = 7;
                values[valuesById[1] = "EARLY_ACCESS"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "BETA"] = 3;
                values[valuesById[4] = "GA"] = 4;
                values[valuesById[5] = "DEPRECATED"] = 5;
                return values;
            })();
    
            return api;
        })();
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 * @property {string|null} [edition] FileDescriptorProto edition
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * FileDescriptorProto edition.
                 * @member {string} edition
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.edition = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    if (message.edition != null && Object.hasOwnProperty.call(message, "edition"))
                        writer.uint32(/* id 13, wireType 2 =*/106).string(message.edition);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message["package"] = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                break;
                            }
                        case 10: {
                                if (!(message.publicDependency && message.publicDependency.length))
                                    message.publicDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.publicDependency.push(reader.int32());
                                } else
                                    message.publicDependency.push(reader.int32());
                                break;
                            }
                        case 11: {
                                if (!(message.weakDependency && message.weakDependency.length))
                                    message.weakDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.weakDependency.push(reader.int32());
                                } else
                                    message.weakDependency.push(reader.int32());
                                break;
                            }
                        case 4: {
                                if (!(message.messageType && message.messageType.length))
                                    message.messageType = [];
                                message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 12: {
                                message.syntax = reader.string();
                                break;
                            }
                        case 13: {
                                message.edition = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    if (message.edition != null && message.hasOwnProperty("edition"))
                        if (!$util.isString(message.edition))
                            return "edition: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    if (object.edition != null)
                        message.edition = String(object.edition);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                        object.edition = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    if (message.edition != null && message.hasOwnProperty("edition"))
                        object.edition = message.edition;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                if (!(message.nestedType && message.nestedType.length))
                                    message.nestedType = [];
                                message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.extensionRange && message.extensionRange.length))
                                    message.extensionRange = [];
                                message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                if (!(message.oneofDecl && message.oneofDecl.length))
                                    message.oneofDecl = [];
                                message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                if (!(message.reservedRange && message.reservedRange.length))
                                    message.reservedRange = [];
                                message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 10: {
                                if (!(message.reservedName && message.reservedName.length))
                                    message.reservedName = [];
                                message.reservedName.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * ExtensionRange options.
                     * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.options = null;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                            $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.options != null && message.hasOwnProperty("options")) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                            if (error)
                                return "options." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        if (object.options != null) {
                            if (typeof object.options !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                            message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                            object.options = null;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.options != null && message.hasOwnProperty("options"))
                            object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.ExtensionRangeOptions = (function() {
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @interface IExtensionRangeOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
                 * @property {Array.<google.protobuf.ExtensionRangeOptions.IDeclaration>|null} [declaration] ExtensionRangeOptions declaration
                 * @property {google.protobuf.IFeatureSet|null} [features] ExtensionRangeOptions features
                 * @property {google.protobuf.ExtensionRangeOptions.VerificationState|null} [verification] ExtensionRangeOptions verification
                 */
    
                /**
                 * Constructs a new ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an ExtensionRangeOptions.
                 * @implements IExtensionRangeOptions
                 * @constructor
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 */
                function ExtensionRangeOptions(properties) {
                    this.uninterpretedOption = [];
                    this.declaration = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ExtensionRangeOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ExtensionRangeOptions declaration.
                 * @member {Array.<google.protobuf.ExtensionRangeOptions.IDeclaration>} declaration
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.declaration = $util.emptyArray;
    
                /**
                 * ExtensionRangeOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.features = null;
    
                /**
                 * ExtensionRangeOptions verification.
                 * @member {google.protobuf.ExtensionRangeOptions.VerificationState} verification
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.verification = 1;
    
                /**
                 * Creates a new ExtensionRangeOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
                 */
                ExtensionRangeOptions.create = function create(properties) {
                    return new ExtensionRangeOptions(properties);
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.declaration != null && message.declaration.length)
                        for (var i = 0; i < message.declaration.length; ++i)
                            $root.google.protobuf.ExtensionRangeOptions.Declaration.encode(message.declaration[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.verification != null && Object.hasOwnProperty.call(message, "verification"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.verification);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                if (!(message.declaration && message.declaration.length))
                                    message.declaration = [];
                                message.declaration.push($root.google.protobuf.ExtensionRangeOptions.Declaration.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.verification = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ExtensionRangeOptions message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRangeOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message.declaration != null && message.hasOwnProperty("declaration")) {
                        if (!Array.isArray(message.declaration))
                            return "declaration: array expected";
                        for (var i = 0; i < message.declaration.length; ++i) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.Declaration.verify(message.declaration[i]);
                            if (error)
                                return "declaration." + error;
                        }
                    }
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.verification != null && message.hasOwnProperty("verification"))
                        switch (message.verification) {
                        default:
                            return "verification: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 */
                ExtensionRangeOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                        return object;
                    var message = new $root.google.protobuf.ExtensionRangeOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object.declaration) {
                        if (!Array.isArray(object.declaration))
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.declaration: array expected");
                        message.declaration = [];
                        for (var i = 0; i < object.declaration.length; ++i) {
                            if (typeof object.declaration[i] !== "object")
                                throw TypeError(".google.protobuf.ExtensionRangeOptions.declaration: object expected");
                            message.declaration[i] = $root.google.protobuf.ExtensionRangeOptions.Declaration.fromObject(object.declaration[i]);
                        }
                    }
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    switch (object.verification) {
                    case "DECLARATION":
                    case 0:
                        message.verification = 0;
                        break;
                    default:
                        if (typeof object.verification === "number") {
                            message.verification = object.verification;
                            break;
                        }
                        break;
                    case "UNVERIFIED":
                    case 1:
                        message.verification = 1;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRangeOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.declaration = [];
                        object.uninterpretedOption = [];
                    }
                    if (options.defaults) {
                        object.verification = options.enums === String ? "UNVERIFIED" : 1;
                        object.features = null;
                    }
                    if (message.declaration && message.declaration.length) {
                        object.declaration = [];
                        for (var j = 0; j < message.declaration.length; ++j)
                            object.declaration[j] = $root.google.protobuf.ExtensionRangeOptions.Declaration.toObject(message.declaration[j], options);
                    }
                    if (message.verification != null && message.hasOwnProperty("verification"))
                        object.verification = options.enums === String ? $root.google.protobuf.ExtensionRangeOptions.VerificationState[message.verification] === undefined ? message.verification : $root.google.protobuf.ExtensionRangeOptions.VerificationState[message.verification] : message.verification;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ExtensionRangeOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ExtensionRangeOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRangeOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ExtensionRangeOptions";
                };
    
                ExtensionRangeOptions.Declaration = (function() {
    
                    /**
                     * Properties of a Declaration.
                     * @memberof google.protobuf.ExtensionRangeOptions
                     * @interface IDeclaration
                     * @property {number|null} [number] Declaration number
                     * @property {string|null} [fullName] Declaration fullName
                     * @property {string|null} [type] Declaration type
                     * @property {boolean|null} [reserved] Declaration reserved
                     * @property {boolean|null} [repeated] Declaration repeated
                     */
    
                    /**
                     * Constructs a new Declaration.
                     * @memberof google.protobuf.ExtensionRangeOptions
                     * @classdesc Represents a Declaration.
                     * @implements IDeclaration
                     * @constructor
                     * @param {google.protobuf.ExtensionRangeOptions.IDeclaration=} [properties] Properties to set
                     */
                    function Declaration(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Declaration number.
                     * @member {number} number
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     */
                    Declaration.prototype.number = 0;
    
                    /**
                     * Declaration fullName.
                     * @member {string} fullName
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     */
                    Declaration.prototype.fullName = "";
    
                    /**
                     * Declaration type.
                     * @member {string} type
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     */
                    Declaration.prototype.type = "";
    
                    /**
                     * Declaration reserved.
                     * @member {boolean} reserved
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     */
                    Declaration.prototype.reserved = false;
    
                    /**
                     * Declaration repeated.
                     * @member {boolean} repeated
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     */
                    Declaration.prototype.repeated = false;
    
                    /**
                     * Creates a new Declaration instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {google.protobuf.ExtensionRangeOptions.IDeclaration=} [properties] Properties to set
                     * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration instance
                     */
                    Declaration.create = function create(properties) {
                        return new Declaration(properties);
                    };
    
                    /**
                     * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {google.protobuf.ExtensionRangeOptions.IDeclaration} message Declaration message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Declaration.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
                        if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fullName);
                        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
                        if (message.reserved != null && Object.hasOwnProperty.call(message, "reserved"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.reserved);
                        if (message.repeated != null && Object.hasOwnProperty.call(message, "repeated"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.repeated);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {google.protobuf.ExtensionRangeOptions.IDeclaration} message Declaration message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Declaration.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Declaration message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Declaration.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions.Declaration();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.number = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.fullName = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.type = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.reserved = reader.bool();
                                    break;
                                }
                            case 6: {
                                    message.repeated = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Declaration message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Declaration.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Declaration message.
                     * @function verify
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Declaration.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.number != null && message.hasOwnProperty("number"))
                            if (!$util.isInteger(message.number))
                                return "number: integer expected";
                        if (message.fullName != null && message.hasOwnProperty("fullName"))
                            if (!$util.isString(message.fullName))
                                return "fullName: string expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        if (message.reserved != null && message.hasOwnProperty("reserved"))
                            if (typeof message.reserved !== "boolean")
                                return "reserved: boolean expected";
                        if (message.repeated != null && message.hasOwnProperty("repeated"))
                            if (typeof message.repeated !== "boolean")
                                return "repeated: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration
                     */
                    Declaration.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.ExtensionRangeOptions.Declaration)
                            return object;
                        var message = new $root.google.protobuf.ExtensionRangeOptions.Declaration();
                        if (object.number != null)
                            message.number = object.number | 0;
                        if (object.fullName != null)
                            message.fullName = String(object.fullName);
                        if (object.type != null)
                            message.type = String(object.type);
                        if (object.reserved != null)
                            message.reserved = Boolean(object.reserved);
                        if (object.repeated != null)
                            message.repeated = Boolean(object.repeated);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {google.protobuf.ExtensionRangeOptions.Declaration} message Declaration
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Declaration.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.number = 0;
                            object.fullName = "";
                            object.type = "";
                            object.reserved = false;
                            object.repeated = false;
                        }
                        if (message.number != null && message.hasOwnProperty("number"))
                            object.number = message.number;
                        if (message.fullName != null && message.hasOwnProperty("fullName"))
                            object.fullName = message.fullName;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        if (message.reserved != null && message.hasOwnProperty("reserved"))
                            object.reserved = message.reserved;
                        if (message.repeated != null && message.hasOwnProperty("repeated"))
                            object.repeated = message.repeated;
                        return object;
                    };
    
                    /**
                     * Converts this Declaration to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Declaration.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Declaration
                     * @function getTypeUrl
                     * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Declaration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.ExtensionRangeOptions.Declaration";
                    };
    
                    return Declaration;
                })();
    
                /**
                 * VerificationState enum.
                 * @name google.protobuf.ExtensionRangeOptions.VerificationState
                 * @enum {number}
                 * @property {number} DECLARATION=0 DECLARATION value
                 * @property {number} UNVERIFIED=1 UNVERIFIED value
                 */
                ExtensionRangeOptions.VerificationState = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DECLARATION"] = 0;
                    values[valuesById[1] = "UNVERIFIED"] = 1;
                    return values;
                })();
    
                return ExtensionRangeOptions;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 * @property {boolean|null} [proto3Optional] FieldDescriptorProto proto3Optional
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * FieldDescriptorProto proto3Optional.
                 * @member {boolean} proto3Optional
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.proto3Optional = false;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    if (message.proto3Optional != null && Object.hasOwnProperty.call(message, "proto3Optional"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3Optional);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.number = reader.int32();
                                break;
                            }
                        case 4: {
                                message.label = reader.int32();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
                                break;
                            }
                        case 6: {
                                message.typeName = reader.string();
                                break;
                            }
                        case 2: {
                                message.extendee = reader.string();
                                break;
                            }
                        case 7: {
                                message.defaultValue = reader.string();
                                break;
                            }
                        case 9: {
                                message.oneofIndex = reader.int32();
                                break;
                            }
                        case 10: {
                                message.jsonName = reader.string();
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 17: {
                                message.proto3Optional = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        if (typeof message.proto3Optional !== "boolean")
                            return "proto3Optional: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    default:
                        if (typeof object.label === "number") {
                            message.label = object.label;
                            break;
                        }
                        break;
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    if (object.proto3Optional != null)
                        message.proto3Optional = Boolean(object.proto3Optional);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                        object.proto3Optional = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        object.proto3Optional = message.proto3Optional;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * EnumDescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                if (!(message.reservedRange && message.reservedRange.length))
                                    message.reservedRange = [];
                                message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.reservedName && message.reservedName.length))
                                    message.reservedName = [];
                                message.reservedName.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.value = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                EnumDescriptorProto.EnumReservedRange = (function() {
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @interface IEnumReservedRange
                     * @property {number|null} [start] EnumReservedRange start
                     * @property {number|null} [end] EnumReservedRange end
                     */
    
                    /**
                     * Constructs a new EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @classdesc Represents an EnumReservedRange.
                     * @implements IEnumReservedRange
                     * @constructor
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     */
                    function EnumReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EnumReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.start = 0;
    
                    /**
                     * EnumReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new EnumReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                     */
                    EnumReservedRange.create = function create(properties) {
                        return new EnumReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EnumReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnumReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     */
                    EnumReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                            return object;
                        var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this EnumReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for EnumReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    EnumReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto.EnumReservedRange";
                    };
    
                    return EnumReservedRange;
                })();
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.number = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.inputType = reader.string();
                                break;
                            }
                        case 3: {
                                message.outputType = reader.string();
                                break;
                            }
                        case 4: {
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.clientStreaming = reader.bool();
                                break;
                            }
                        case 6: {
                                message.serverStreaming = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
                 * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
                 * @property {string|null} [phpNamespace] FileOptions phpNamespace
                 * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
                 * @property {string|null} [rubyPackage] FileOptions rubyPackage
                 * @property {google.protobuf.IFeatureSet|null} [features] FileOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 * @property {Array.<google.api.IResourceDescriptor>|null} [".google.api.resourceDefinition"] FileOptions .google.api.resourceDefinition
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.resourceDefinition"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions phpGenericServices.
                 * @member {boolean} phpGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = true;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions swiftPrefix.
                 * @member {string} swiftPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.swiftPrefix = "";
    
                /**
                 * FileOptions phpClassPrefix.
                 * @member {string} phpClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpClassPrefix = "";
    
                /**
                 * FileOptions phpNamespace.
                 * @member {string} phpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpNamespace = "";
    
                /**
                 * FileOptions phpMetadataNamespace.
                 * @member {string} phpMetadataNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpMetadataNamespace = "";
    
                /**
                 * FileOptions rubyPackage.
                 * @member {string} rubyPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.rubyPackage = "";
    
                /**
                 * FileOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.features = null;
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FileOptions .google.api.resourceDefinition.
                 * @member {Array.<google.api.IResourceDescriptor>} .google.api.resourceDefinition
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype[".google.api.resourceDefinition"] = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix != null && Object.hasOwnProperty.call(message, "swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.phpClassPrefix != null && Object.hasOwnProperty.call(message, "phpClassPrefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                    if (message.phpNamespace != null && Object.hasOwnProperty.call(message, "phpNamespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                    if (message.phpGenericServices != null && Object.hasOwnProperty.call(message, "phpGenericServices"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                    if (message.phpMetadataNamespace != null && Object.hasOwnProperty.call(message, "phpMetadataNamespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                    if (message.rubyPackage != null && Object.hasOwnProperty.call(message, "rubyPackage"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.resourceDefinition"] != null && message[".google.api.resourceDefinition"].length)
                        for (var i = 0; i < message[".google.api.resourceDefinition"].length; ++i)
                            $root.google.api.ResourceDescriptor.encode(message[".google.api.resourceDefinition"][i], writer.uint32(/* id 1053, wireType 2 =*/8426).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.javaPackage = reader.string();
                                break;
                            }
                        case 8: {
                                message.javaOuterClassname = reader.string();
                                break;
                            }
                        case 10: {
                                message.javaMultipleFiles = reader.bool();
                                break;
                            }
                        case 20: {
                                message.javaGenerateEqualsAndHash = reader.bool();
                                break;
                            }
                        case 27: {
                                message.javaStringCheckUtf8 = reader.bool();
                                break;
                            }
                        case 9: {
                                message.optimizeFor = reader.int32();
                                break;
                            }
                        case 11: {
                                message.goPackage = reader.string();
                                break;
                            }
                        case 16: {
                                message.ccGenericServices = reader.bool();
                                break;
                            }
                        case 17: {
                                message.javaGenericServices = reader.bool();
                                break;
                            }
                        case 18: {
                                message.pyGenericServices = reader.bool();
                                break;
                            }
                        case 42: {
                                message.phpGenericServices = reader.bool();
                                break;
                            }
                        case 23: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 31: {
                                message.ccEnableArenas = reader.bool();
                                break;
                            }
                        case 36: {
                                message.objcClassPrefix = reader.string();
                                break;
                            }
                        case 37: {
                                message.csharpNamespace = reader.string();
                                break;
                            }
                        case 39: {
                                message.swiftPrefix = reader.string();
                                break;
                            }
                        case 40: {
                                message.phpClassPrefix = reader.string();
                                break;
                            }
                        case 41: {
                                message.phpNamespace = reader.string();
                                break;
                            }
                        case 44: {
                                message.phpMetadataNamespace = reader.string();
                                break;
                            }
                        case 45: {
                                message.rubyPackage = reader.string();
                                break;
                            }
                        case 50: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1053: {
                                if (!(message[".google.api.resourceDefinition"] && message[".google.api.resourceDefinition"].length))
                                    message[".google.api.resourceDefinition"] = [];
                                message[".google.api.resourceDefinition"].push($root.google.api.ResourceDescriptor.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        if (typeof message.phpGenericServices !== "boolean")
                            return "phpGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        if (!$util.isString(message.swiftPrefix))
                            return "swiftPrefix: string expected";
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        if (!$util.isString(message.phpClassPrefix))
                            return "phpClassPrefix: string expected";
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        if (!$util.isString(message.phpNamespace))
                            return "phpNamespace: string expected";
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        if (!$util.isString(message.phpMetadataNamespace))
                            return "phpMetadataNamespace: string expected";
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        if (!$util.isString(message.rubyPackage))
                            return "rubyPackage: string expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.resourceDefinition"] != null && message.hasOwnProperty(".google.api.resourceDefinition")) {
                        if (!Array.isArray(message[".google.api.resourceDefinition"]))
                            return ".google.api.resourceDefinition: array expected";
                        for (var i = 0; i < message[".google.api.resourceDefinition"].length; ++i) {
                            var error = $root.google.api.ResourceDescriptor.verify(message[".google.api.resourceDefinition"][i]);
                            if (error)
                                return ".google.api.resourceDefinition." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    default:
                        if (typeof object.optimizeFor === "number") {
                            message.optimizeFor = object.optimizeFor;
                            break;
                        }
                        break;
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.phpGenericServices != null)
                        message.phpGenericServices = Boolean(object.phpGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.swiftPrefix != null)
                        message.swiftPrefix = String(object.swiftPrefix);
                    if (object.phpClassPrefix != null)
                        message.phpClassPrefix = String(object.phpClassPrefix);
                    if (object.phpNamespace != null)
                        message.phpNamespace = String(object.phpNamespace);
                    if (object.phpMetadataNamespace != null)
                        message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                    if (object.rubyPackage != null)
                        message.rubyPackage = String(object.rubyPackage);
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.FileOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.resourceDefinition"]) {
                        if (!Array.isArray(object[".google.api.resourceDefinition"]))
                            throw TypeError(".google.protobuf.FileOptions..google.api.resourceDefinition: array expected");
                        message[".google.api.resourceDefinition"] = [];
                        for (var i = 0; i < object[".google.api.resourceDefinition"].length; ++i) {
                            if (typeof object[".google.api.resourceDefinition"][i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions..google.api.resourceDefinition: object expected");
                            message[".google.api.resourceDefinition"][i] = $root.google.api.ResourceDescriptor.fromObject(object[".google.api.resourceDefinition"][i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.resourceDefinition"] = [];
                    }
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = true;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                        object.phpClassPrefix = "";
                        object.phpNamespace = "";
                        object.phpGenericServices = false;
                        object.phpMetadataNamespace = "";
                        object.rubyPackage = "";
                        object.features = null;
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        object.swiftPrefix = message.swiftPrefix;
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        object.phpClassPrefix = message.phpClassPrefix;
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        object.phpNamespace = message.phpNamespace;
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        object.phpGenericServices = message.phpGenericServices;
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        object.phpMetadataNamespace = message.phpMetadataNamespace;
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        object.rubyPackage = message.rubyPackage;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.resourceDefinition"] && message[".google.api.resourceDefinition"].length) {
                        object[".google.api.resourceDefinition"] = [];
                        for (var j = 0; j < message[".google.api.resourceDefinition"].length; ++j)
                            object[".google.api.resourceDefinition"][j] = $root.google.api.ResourceDescriptor.toObject(message[".google.api.resourceDefinition"][j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {boolean|null} [deprecatedLegacyJsonFieldConflicts] MessageOptions deprecatedLegacyJsonFieldConflicts
                 * @property {google.protobuf.IFeatureSet|null} [features] MessageOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 * @property {google.api.IResourceDescriptor|null} [".google.api.resource"] MessageOptions .google.api.resource
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions deprecatedLegacyJsonFieldConflicts.
                 * @member {boolean} deprecatedLegacyJsonFieldConflicts
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecatedLegacyJsonFieldConflicts = false;
    
                /**
                 * MessageOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.features = null;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MessageOptions .google.api.resource.
                 * @member {google.api.IResourceDescriptor|null|undefined} .google.api.resource
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".google.api.resource"] = null;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.deprecatedLegacyJsonFieldConflicts != null && Object.hasOwnProperty.call(message, "deprecatedLegacyJsonFieldConflicts"))
                        writer.uint32(/* id 11, wireType 0 =*/88).bool(message.deprecatedLegacyJsonFieldConflicts);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.resource"] != null && Object.hasOwnProperty.call(message, ".google.api.resource"))
                        $root.google.api.ResourceDescriptor.encode(message[".google.api.resource"], writer.uint32(/* id 1053, wireType 2 =*/8426).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.messageSetWireFormat = reader.bool();
                                break;
                            }
                        case 2: {
                                message.noStandardDescriptorAccessor = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 7: {
                                message.mapEntry = reader.bool();
                                break;
                            }
                        case 11: {
                                message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                                break;
                            }
                        case 12: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1053: {
                                message[".google.api.resource"] = $root.google.api.ResourceDescriptor.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.deprecatedLegacyJsonFieldConflicts != null && message.hasOwnProperty("deprecatedLegacyJsonFieldConflicts"))
                        if (typeof message.deprecatedLegacyJsonFieldConflicts !== "boolean")
                            return "deprecatedLegacyJsonFieldConflicts: boolean expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.resource"] != null && message.hasOwnProperty(".google.api.resource")) {
                        var error = $root.google.api.ResourceDescriptor.verify(message[".google.api.resource"]);
                        if (error)
                            return ".google.api.resource." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.deprecatedLegacyJsonFieldConflicts != null)
                        message.deprecatedLegacyJsonFieldConflicts = Boolean(object.deprecatedLegacyJsonFieldConflicts);
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.resource"] != null) {
                        if (typeof object[".google.api.resource"] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions..google.api.resource: object expected");
                        message[".google.api.resource"] = $root.google.api.ResourceDescriptor.fromObject(object[".google.api.resource"]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                        object.deprecatedLegacyJsonFieldConflicts = false;
                        object.features = null;
                        object[".google.api.resource"] = null;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.deprecatedLegacyJsonFieldConflicts != null && message.hasOwnProperty("deprecatedLegacyJsonFieldConflicts"))
                        object.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.resource"] != null && message.hasOwnProperty(".google.api.resource"))
                        object[".google.api.resource"] = $root.google.api.ResourceDescriptor.toObject(message[".google.api.resource"], options);
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [unverifiedLazy] FieldOptions unverifiedLazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {boolean|null} [debugRedact] FieldOptions debugRedact
                 * @property {google.protobuf.FieldOptions.OptionRetention|null} [retention] FieldOptions retention
                 * @property {Array.<google.protobuf.FieldOptions.OptionTargetType>|null} [targets] FieldOptions targets
                 * @property {Array.<google.protobuf.FieldOptions.IEditionDefault>|null} [editionDefaults] FieldOptions editionDefaults
                 * @property {google.protobuf.IFeatureSet|null} [features] FieldOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 * @property {Array.<google.api.FieldBehavior>|null} [".google.api.fieldBehavior"] FieldOptions .google.api.fieldBehavior
                 * @property {google.api.IResourceReference|null} [".google.api.resourceReference"] FieldOptions .google.api.resourceReference
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.targets = [];
                    this.editionDefaults = [];
                    this.uninterpretedOption = [];
                    this[".google.api.fieldBehavior"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions unverifiedLazy.
                 * @member {boolean} unverifiedLazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.unverifiedLazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions debugRedact.
                 * @member {boolean} debugRedact
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.debugRedact = false;
    
                /**
                 * FieldOptions retention.
                 * @member {google.protobuf.FieldOptions.OptionRetention} retention
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.retention = 0;
    
                /**
                 * FieldOptions targets.
                 * @member {Array.<google.protobuf.FieldOptions.OptionTargetType>} targets
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.targets = $util.emptyArray;
    
                /**
                 * FieldOptions editionDefaults.
                 * @member {Array.<google.protobuf.FieldOptions.IEditionDefault>} editionDefaults
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.editionDefaults = $util.emptyArray;
    
                /**
                 * FieldOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.features = null;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FieldOptions .google.api.fieldBehavior.
                 * @member {Array.<google.api.FieldBehavior>} .google.api.fieldBehavior
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.fieldBehavior"] = $util.emptyArray;
    
                /**
                 * FieldOptions .google.api.resourceReference.
                 * @member {google.api.IResourceReference|null|undefined} .google.api.resourceReference
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.resourceReference"] = null;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.unverifiedLazy != null && Object.hasOwnProperty.call(message, "unverifiedLazy"))
                        writer.uint32(/* id 15, wireType 0 =*/120).bool(message.unverifiedLazy);
                    if (message.debugRedact != null && Object.hasOwnProperty.call(message, "debugRedact"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.debugRedact);
                    if (message.retention != null && Object.hasOwnProperty.call(message, "retention"))
                        writer.uint32(/* id 17, wireType 0 =*/136).int32(message.retention);
                    if (message.targets != null && message.targets.length)
                        for (var i = 0; i < message.targets.length; ++i)
                            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.targets[i]);
                    if (message.editionDefaults != null && message.editionDefaults.length)
                        for (var i = 0; i < message.editionDefaults.length; ++i)
                            $root.google.protobuf.FieldOptions.EditionDefault.encode(message.editionDefaults[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.fieldBehavior"] != null && message[".google.api.fieldBehavior"].length) {
                        writer.uint32(/* id 1052, wireType 2 =*/8418).fork();
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            writer.int32(message[".google.api.fieldBehavior"][i]);
                        writer.ldelim();
                    }
                    if (message[".google.api.resourceReference"] != null && Object.hasOwnProperty.call(message, ".google.api.resourceReference"))
                        $root.google.api.ResourceReference.encode(message[".google.api.resourceReference"], writer.uint32(/* id 1055, wireType 2 =*/8442).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ctype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.packed = reader.bool();
                                break;
                            }
                        case 6: {
                                message.jstype = reader.int32();
                                break;
                            }
                        case 5: {
                                message.lazy = reader.bool();
                                break;
                            }
                        case 15: {
                                message.unverifiedLazy = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 10: {
                                message.weak = reader.bool();
                                break;
                            }
                        case 16: {
                                message.debugRedact = reader.bool();
                                break;
                            }
                        case 17: {
                                message.retention = reader.int32();
                                break;
                            }
                        case 19: {
                                if (!(message.targets && message.targets.length))
                                    message.targets = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.targets.push(reader.int32());
                                } else
                                    message.targets.push(reader.int32());
                                break;
                            }
                        case 20: {
                                if (!(message.editionDefaults && message.editionDefaults.length))
                                    message.editionDefaults = [];
                                message.editionDefaults.push($root.google.protobuf.FieldOptions.EditionDefault.decode(reader, reader.uint32()));
                                break;
                            }
                        case 21: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1052: {
                                if (!(message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length))
                                    message[".google.api.fieldBehavior"] = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message[".google.api.fieldBehavior"].push(reader.int32());
                                } else
                                    message[".google.api.fieldBehavior"].push(reader.int32());
                                break;
                            }
                        case 1055: {
                                message[".google.api.resourceReference"] = $root.google.api.ResourceReference.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                        if (typeof message.unverifiedLazy !== "boolean")
                            return "unverifiedLazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.debugRedact != null && message.hasOwnProperty("debugRedact"))
                        if (typeof message.debugRedact !== "boolean")
                            return "debugRedact: boolean expected";
                    if (message.retention != null && message.hasOwnProperty("retention"))
                        switch (message.retention) {
                        default:
                            return "retention: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.targets != null && message.hasOwnProperty("targets")) {
                        if (!Array.isArray(message.targets))
                            return "targets: array expected";
                        for (var i = 0; i < message.targets.length; ++i)
                            switch (message.targets[i]) {
                            default:
                                return "targets: enum value[] expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                                break;
                            }
                    }
                    if (message.editionDefaults != null && message.hasOwnProperty("editionDefaults")) {
                        if (!Array.isArray(message.editionDefaults))
                            return "editionDefaults: array expected";
                        for (var i = 0; i < message.editionDefaults.length; ++i) {
                            var error = $root.google.protobuf.FieldOptions.EditionDefault.verify(message.editionDefaults[i]);
                            if (error)
                                return "editionDefaults." + error;
                        }
                    }
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.fieldBehavior"] != null && message.hasOwnProperty(".google.api.fieldBehavior")) {
                        if (!Array.isArray(message[".google.api.fieldBehavior"]))
                            return ".google.api.fieldBehavior: array expected";
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            switch (message[".google.api.fieldBehavior"][i]) {
                            default:
                                return ".google.api.fieldBehavior: enum value[] expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                    }
                    if (message[".google.api.resourceReference"] != null && message.hasOwnProperty(".google.api.resourceReference")) {
                        var error = $root.google.api.ResourceReference.verify(message[".google.api.resourceReference"]);
                        if (error)
                            return ".google.api.resourceReference." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    default:
                        if (typeof object.ctype === "number") {
                            message.ctype = object.ctype;
                            break;
                        }
                        break;
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    default:
                        if (typeof object.jstype === "number") {
                            message.jstype = object.jstype;
                            break;
                        }
                        break;
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.unverifiedLazy != null)
                        message.unverifiedLazy = Boolean(object.unverifiedLazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.debugRedact != null)
                        message.debugRedact = Boolean(object.debugRedact);
                    switch (object.retention) {
                    default:
                        if (typeof object.retention === "number") {
                            message.retention = object.retention;
                            break;
                        }
                        break;
                    case "RETENTION_UNKNOWN":
                    case 0:
                        message.retention = 0;
                        break;
                    case "RETENTION_RUNTIME":
                    case 1:
                        message.retention = 1;
                        break;
                    case "RETENTION_SOURCE":
                    case 2:
                        message.retention = 2;
                        break;
                    }
                    if (object.targets) {
                        if (!Array.isArray(object.targets))
                            throw TypeError(".google.protobuf.FieldOptions.targets: array expected");
                        message.targets = [];
                        for (var i = 0; i < object.targets.length; ++i)
                            switch (object.targets[i]) {
                            default:
                                if (typeof object.targets[i] === "number") {
                                    message.targets[i] = object.targets[i];
                                    break;
                                }
                            case "TARGET_TYPE_UNKNOWN":
                            case 0:
                                message.targets[i] = 0;
                                break;
                            case "TARGET_TYPE_FILE":
                            case 1:
                                message.targets[i] = 1;
                                break;
                            case "TARGET_TYPE_EXTENSION_RANGE":
                            case 2:
                                message.targets[i] = 2;
                                break;
                            case "TARGET_TYPE_MESSAGE":
                            case 3:
                                message.targets[i] = 3;
                                break;
                            case "TARGET_TYPE_FIELD":
                            case 4:
                                message.targets[i] = 4;
                                break;
                            case "TARGET_TYPE_ONEOF":
                            case 5:
                                message.targets[i] = 5;
                                break;
                            case "TARGET_TYPE_ENUM":
                            case 6:
                                message.targets[i] = 6;
                                break;
                            case "TARGET_TYPE_ENUM_ENTRY":
                            case 7:
                                message.targets[i] = 7;
                                break;
                            case "TARGET_TYPE_SERVICE":
                            case 8:
                                message.targets[i] = 8;
                                break;
                            case "TARGET_TYPE_METHOD":
                            case 9:
                                message.targets[i] = 9;
                                break;
                            }
                    }
                    if (object.editionDefaults) {
                        if (!Array.isArray(object.editionDefaults))
                            throw TypeError(".google.protobuf.FieldOptions.editionDefaults: array expected");
                        message.editionDefaults = [];
                        for (var i = 0; i < object.editionDefaults.length; ++i) {
                            if (typeof object.editionDefaults[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.editionDefaults: object expected");
                            message.editionDefaults[i] = $root.google.protobuf.FieldOptions.EditionDefault.fromObject(object.editionDefaults[i]);
                        }
                    }
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.fieldBehavior"]) {
                        if (!Array.isArray(object[".google.api.fieldBehavior"]))
                            throw TypeError(".google.protobuf.FieldOptions..google.api.fieldBehavior: array expected");
                        message[".google.api.fieldBehavior"] = [];
                        for (var i = 0; i < object[".google.api.fieldBehavior"].length; ++i)
                            switch (object[".google.api.fieldBehavior"][i]) {
                            default:
                                if (typeof object[".google.api.fieldBehavior"][i] === "number") {
                                    message[".google.api.fieldBehavior"][i] = object[".google.api.fieldBehavior"][i];
                                    break;
                                }
                            case "FIELD_BEHAVIOR_UNSPECIFIED":
                            case 0:
                                message[".google.api.fieldBehavior"][i] = 0;
                                break;
                            case "OPTIONAL":
                            case 1:
                                message[".google.api.fieldBehavior"][i] = 1;
                                break;
                            case "REQUIRED":
                            case 2:
                                message[".google.api.fieldBehavior"][i] = 2;
                                break;
                            case "OUTPUT_ONLY":
                            case 3:
                                message[".google.api.fieldBehavior"][i] = 3;
                                break;
                            case "INPUT_ONLY":
                            case 4:
                                message[".google.api.fieldBehavior"][i] = 4;
                                break;
                            case "IMMUTABLE":
                            case 5:
                                message[".google.api.fieldBehavior"][i] = 5;
                                break;
                            case "UNORDERED_LIST":
                            case 6:
                                message[".google.api.fieldBehavior"][i] = 6;
                                break;
                            case "NON_EMPTY_DEFAULT":
                            case 7:
                                message[".google.api.fieldBehavior"][i] = 7;
                                break;
                            }
                    }
                    if (object[".google.api.resourceReference"] != null) {
                        if (typeof object[".google.api.resourceReference"] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions..google.api.resourceReference: object expected");
                        message[".google.api.resourceReference"] = $root.google.api.ResourceReference.fromObject(object[".google.api.resourceReference"]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.targets = [];
                        object.editionDefaults = [];
                        object.uninterpretedOption = [];
                        object[".google.api.fieldBehavior"] = [];
                    }
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object.unverifiedLazy = false;
                        object.debugRedact = false;
                        object.retention = options.enums === String ? "RETENTION_UNKNOWN" : 0;
                        object.features = null;
                        object[".google.api.resourceReference"] = null;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                        object.unverifiedLazy = message.unverifiedLazy;
                    if (message.debugRedact != null && message.hasOwnProperty("debugRedact"))
                        object.debugRedact = message.debugRedact;
                    if (message.retention != null && message.hasOwnProperty("retention"))
                        object.retention = options.enums === String ? $root.google.protobuf.FieldOptions.OptionRetention[message.retention] === undefined ? message.retention : $root.google.protobuf.FieldOptions.OptionRetention[message.retention] : message.retention;
                    if (message.targets && message.targets.length) {
                        object.targets = [];
                        for (var j = 0; j < message.targets.length; ++j)
                            object.targets[j] = options.enums === String ? $root.google.protobuf.FieldOptions.OptionTargetType[message.targets[j]] === undefined ? message.targets[j] : $root.google.protobuf.FieldOptions.OptionTargetType[message.targets[j]] : message.targets[j];
                    }
                    if (message.editionDefaults && message.editionDefaults.length) {
                        object.editionDefaults = [];
                        for (var j = 0; j < message.editionDefaults.length; ++j)
                            object.editionDefaults[j] = $root.google.protobuf.FieldOptions.EditionDefault.toObject(message.editionDefaults[j], options);
                    }
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length) {
                        object[".google.api.fieldBehavior"] = [];
                        for (var j = 0; j < message[".google.api.fieldBehavior"].length; ++j)
                            object[".google.api.fieldBehavior"][j] = options.enums === String ? $root.google.api.FieldBehavior[message[".google.api.fieldBehavior"][j]] === undefined ? message[".google.api.fieldBehavior"][j] : $root.google.api.FieldBehavior[message[".google.api.fieldBehavior"][j]] : message[".google.api.fieldBehavior"][j];
                    }
                    if (message[".google.api.resourceReference"] != null && message.hasOwnProperty(".google.api.resourceReference"))
                        object[".google.api.resourceReference"] = $root.google.api.ResourceReference.toObject(message[".google.api.resourceReference"], options);
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                /**
                 * OptionRetention enum.
                 * @name google.protobuf.FieldOptions.OptionRetention
                 * @enum {number}
                 * @property {number} RETENTION_UNKNOWN=0 RETENTION_UNKNOWN value
                 * @property {number} RETENTION_RUNTIME=1 RETENTION_RUNTIME value
                 * @property {number} RETENTION_SOURCE=2 RETENTION_SOURCE value
                 */
                FieldOptions.OptionRetention = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "RETENTION_UNKNOWN"] = 0;
                    values[valuesById[1] = "RETENTION_RUNTIME"] = 1;
                    values[valuesById[2] = "RETENTION_SOURCE"] = 2;
                    return values;
                })();
    
                /**
                 * OptionTargetType enum.
                 * @name google.protobuf.FieldOptions.OptionTargetType
                 * @enum {number}
                 * @property {number} TARGET_TYPE_UNKNOWN=0 TARGET_TYPE_UNKNOWN value
                 * @property {number} TARGET_TYPE_FILE=1 TARGET_TYPE_FILE value
                 * @property {number} TARGET_TYPE_EXTENSION_RANGE=2 TARGET_TYPE_EXTENSION_RANGE value
                 * @property {number} TARGET_TYPE_MESSAGE=3 TARGET_TYPE_MESSAGE value
                 * @property {number} TARGET_TYPE_FIELD=4 TARGET_TYPE_FIELD value
                 * @property {number} TARGET_TYPE_ONEOF=5 TARGET_TYPE_ONEOF value
                 * @property {number} TARGET_TYPE_ENUM=6 TARGET_TYPE_ENUM value
                 * @property {number} TARGET_TYPE_ENUM_ENTRY=7 TARGET_TYPE_ENUM_ENTRY value
                 * @property {number} TARGET_TYPE_SERVICE=8 TARGET_TYPE_SERVICE value
                 * @property {number} TARGET_TYPE_METHOD=9 TARGET_TYPE_METHOD value
                 */
                FieldOptions.OptionTargetType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "TARGET_TYPE_UNKNOWN"] = 0;
                    values[valuesById[1] = "TARGET_TYPE_FILE"] = 1;
                    values[valuesById[2] = "TARGET_TYPE_EXTENSION_RANGE"] = 2;
                    values[valuesById[3] = "TARGET_TYPE_MESSAGE"] = 3;
                    values[valuesById[4] = "TARGET_TYPE_FIELD"] = 4;
                    values[valuesById[5] = "TARGET_TYPE_ONEOF"] = 5;
                    values[valuesById[6] = "TARGET_TYPE_ENUM"] = 6;
                    values[valuesById[7] = "TARGET_TYPE_ENUM_ENTRY"] = 7;
                    values[valuesById[8] = "TARGET_TYPE_SERVICE"] = 8;
                    values[valuesById[9] = "TARGET_TYPE_METHOD"] = 9;
                    return values;
                })();
    
                FieldOptions.EditionDefault = (function() {
    
                    /**
                     * Properties of an EditionDefault.
                     * @memberof google.protobuf.FieldOptions
                     * @interface IEditionDefault
                     * @property {string|null} [edition] EditionDefault edition
                     * @property {string|null} [value] EditionDefault value
                     */
    
                    /**
                     * Constructs a new EditionDefault.
                     * @memberof google.protobuf.FieldOptions
                     * @classdesc Represents an EditionDefault.
                     * @implements IEditionDefault
                     * @constructor
                     * @param {google.protobuf.FieldOptions.IEditionDefault=} [properties] Properties to set
                     */
                    function EditionDefault(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EditionDefault edition.
                     * @member {string} edition
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @instance
                     */
                    EditionDefault.prototype.edition = "";
    
                    /**
                     * EditionDefault value.
                     * @member {string} value
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @instance
                     */
                    EditionDefault.prototype.value = "";
    
                    /**
                     * Creates a new EditionDefault instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {google.protobuf.FieldOptions.IEditionDefault=} [properties] Properties to set
                     * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault instance
                     */
                    EditionDefault.create = function create(properties) {
                        return new EditionDefault(properties);
                    };
    
                    /**
                     * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {google.protobuf.FieldOptions.IEditionDefault} message EditionDefault message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EditionDefault.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.edition != null && Object.hasOwnProperty.call(message, "edition"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.edition);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {google.protobuf.FieldOptions.IEditionDefault} message EditionDefault message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EditionDefault.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EditionDefault message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EditionDefault.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions.EditionDefault();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.edition = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.value = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EditionDefault.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EditionDefault message.
                     * @function verify
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EditionDefault.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.edition != null && message.hasOwnProperty("edition"))
                            if (!$util.isString(message.edition))
                                return "edition: string expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!$util.isString(message.value))
                                return "value: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault
                     */
                    EditionDefault.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.FieldOptions.EditionDefault)
                            return object;
                        var message = new $root.google.protobuf.FieldOptions.EditionDefault();
                        if (object.edition != null)
                            message.edition = String(object.edition);
                        if (object.value != null)
                            message.value = String(object.value);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {google.protobuf.FieldOptions.EditionDefault} message EditionDefault
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EditionDefault.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.edition = "";
                            object.value = "";
                        }
                        if (message.edition != null && message.hasOwnProperty("edition"))
                            object.edition = message.edition;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = message.value;
                        return object;
                    };
    
                    /**
                     * Converts this EditionDefault to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EditionDefault.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for EditionDefault
                     * @function getTypeUrl
                     * @memberof google.protobuf.FieldOptions.EditionDefault
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    EditionDefault.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.FieldOptions.EditionDefault";
                    };
    
                    return EditionDefault;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {google.protobuf.IFeatureSet|null} [features] OneofOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.features = null;
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.features = null;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofOptions";
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {boolean|null} [deprecatedLegacyJsonFieldConflicts] EnumOptions deprecatedLegacyJsonFieldConflicts
                 * @property {google.protobuf.IFeatureSet|null} [features] EnumOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions deprecatedLegacyJsonFieldConflicts.
                 * @member {boolean} deprecatedLegacyJsonFieldConflicts
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecatedLegacyJsonFieldConflicts = false;
    
                /**
                 * EnumOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.features = null;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.deprecatedLegacyJsonFieldConflicts != null && Object.hasOwnProperty.call(message, "deprecatedLegacyJsonFieldConflicts"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.deprecatedLegacyJsonFieldConflicts);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.allowAlias = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 6: {
                                message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                                break;
                            }
                        case 7: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.deprecatedLegacyJsonFieldConflicts != null && message.hasOwnProperty("deprecatedLegacyJsonFieldConflicts"))
                        if (typeof message.deprecatedLegacyJsonFieldConflicts !== "boolean")
                            return "deprecatedLegacyJsonFieldConflicts: boolean expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.deprecatedLegacyJsonFieldConflicts != null)
                        message.deprecatedLegacyJsonFieldConflicts = Boolean(object.deprecatedLegacyJsonFieldConflicts);
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                        object.deprecatedLegacyJsonFieldConflicts = false;
                        object.features = null;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.deprecatedLegacyJsonFieldConflicts != null && message.hasOwnProperty("deprecatedLegacyJsonFieldConflicts"))
                        object.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {google.protobuf.IFeatureSet|null} [features] EnumValueOptions features
                 * @property {boolean|null} [debugRedact] EnumValueOptions debugRedact
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.features = null;
    
                /**
                 * EnumValueOptions debugRedact.
                 * @member {boolean} debugRedact
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.debugRedact = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.debugRedact != null && Object.hasOwnProperty.call(message, "debugRedact"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.debugRedact);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 2: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.debugRedact = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.debugRedact != null && message.hasOwnProperty("debugRedact"))
                        if (typeof message.debugRedact !== "boolean")
                            return "debugRedact: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.debugRedact != null)
                        message.debugRedact = Boolean(object.debugRedact);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object.features = null;
                        object.debugRedact = false;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.debugRedact != null && message.hasOwnProperty("debugRedact"))
                        object.debugRedact = message.debugRedact;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {google.protobuf.IFeatureSet|null} [features] ServiceOptions features
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 * @property {string|null} [".google.api.defaultHost"] ServiceOptions .google.api.defaultHost
                 * @property {string|null} [".google.api.oauthScopes"] ServiceOptions .google.api.oauthScopes
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.features = null;
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ServiceOptions .google.api.defaultHost.
                 * @member {string} .google.api.defaultHost
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.defaultHost"] = "";
    
                /**
                 * ServiceOptions .google.api.oauthScopes.
                 * @member {string} .google.api.oauthScopes
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.oauthScopes"] = "";
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.defaultHost"] != null && Object.hasOwnProperty.call(message, ".google.api.defaultHost"))
                        writer.uint32(/* id 1049, wireType 2 =*/8394).string(message[".google.api.defaultHost"]);
                    if (message[".google.api.oauthScopes"] != null && Object.hasOwnProperty.call(message, ".google.api.oauthScopes"))
                        writer.uint32(/* id 1050, wireType 2 =*/8402).string(message[".google.api.oauthScopes"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 34: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1049: {
                                message[".google.api.defaultHost"] = reader.string();
                                break;
                            }
                        case 1050: {
                                message[".google.api.oauthScopes"] = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        if (!$util.isString(message[".google.api.defaultHost"]))
                            return ".google.api.defaultHost: string expected";
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        if (!$util.isString(message[".google.api.oauthScopes"]))
                            return ".google.api.oauthScopes: string expected";
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.defaultHost"] != null)
                        message[".google.api.defaultHost"] = String(object[".google.api.defaultHost"]);
                    if (object[".google.api.oauthScopes"] != null)
                        message[".google.api.oauthScopes"] = String(object[".google.api.oauthScopes"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object.features = null;
                        object[".google.api.defaultHost"] = "";
                        object[".google.api.oauthScopes"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        object[".google.api.defaultHost"] = message[".google.api.defaultHost"];
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        object[".google.api.oauthScopes"] = message[".google.api.oauthScopes"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
                 * @property {google.protobuf.IFeatureSet|null} [features] MethodOptions features
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 * @property {Array.<string>|null} [".google.api.methodSignature"] MethodOptions .google.api.methodSignature
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.methodSignature"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotencyLevel.
                 * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.idempotencyLevel = 0;
    
                /**
                 * MethodOptions features.
                 * @member {google.protobuf.IFeatureSet|null|undefined} features
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.features = null;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * MethodOptions .google.api.methodSignature.
                 * @member {Array.<string>} .google.api.methodSignature
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.methodSignature"] = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.methodSignature"] != null && message[".google.api.methodSignature"].length)
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            writer.uint32(/* id 1051, wireType 2 =*/8410).string(message[".google.api.methodSignature"][i]);
                    if (message[".google.api.http"] != null && Object.hasOwnProperty.call(message, ".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 34: {
                                message.idempotencyLevel = reader.int32();
                                break;
                            }
                        case 35: {
                                message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 72295728: {
                                message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                                break;
                            }
                        case 1051: {
                                if (!(message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length))
                                    message[".google.api.methodSignature"] = [];
                                message[".google.api.methodSignature"].push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        switch (message.idempotencyLevel) {
                        default:
                            return "idempotencyLevel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.features != null && message.hasOwnProperty("features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.features);
                        if (error)
                            return "features." + error;
                    }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    if (message[".google.api.methodSignature"] != null && message.hasOwnProperty(".google.api.methodSignature")) {
                        if (!Array.isArray(message[".google.api.methodSignature"]))
                            return ".google.api.methodSignature: array expected";
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            if (!$util.isString(message[".google.api.methodSignature"][i]))
                                return ".google.api.methodSignature: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    switch (object.idempotencyLevel) {
                    default:
                        if (typeof object.idempotencyLevel === "number") {
                            message.idempotencyLevel = object.idempotencyLevel;
                            break;
                        }
                        break;
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotencyLevel = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotencyLevel = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotencyLevel = 2;
                        break;
                    }
                    if (object.features != null) {
                        if (typeof object.features !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.features: object expected");
                        message.features = $root.google.protobuf.FeatureSet.fromObject(object.features);
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    if (object[".google.api.methodSignature"]) {
                        if (!Array.isArray(object[".google.api.methodSignature"]))
                            throw TypeError(".google.protobuf.MethodOptions..google.api.methodSignature: array expected");
                        message[".google.api.methodSignature"] = [];
                        for (var i = 0; i < object[".google.api.methodSignature"].length; ++i)
                            message[".google.api.methodSignature"][i] = String(object[".google.api.methodSignature"][i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.methodSignature"] = [];
                    }
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                        object.features = null;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] === undefined ? message.idempotencyLevel : $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                    if (message.features != null && message.hasOwnProperty("features"))
                        object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options);
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length) {
                        object[".google.api.methodSignature"] = [];
                        for (var j = 0; j < message[".google.api.methodSignature"].length; ++j)
                            object[".google.api.methodSignature"][j] = message[".google.api.methodSignature"][j];
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodOptions";
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {number}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.identifierValue = reader.string();
                                break;
                            }
                        case 4: {
                                message.positiveIntValue = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.negativeIntValue = reader.int64();
                                break;
                            }
                        case 6: {
                                message.doubleValue = reader.double();
                                break;
                            }
                        case 7: {
                                message.stringValue = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.aggregateValue = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length >= 0)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.namePart = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.isExtension = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.FeatureSet = (function() {
    
                /**
                 * Properties of a FeatureSet.
                 * @memberof google.protobuf
                 * @interface IFeatureSet
                 * @property {google.protobuf.FeatureSet.FieldPresence|null} [fieldPresence] FeatureSet fieldPresence
                 * @property {google.protobuf.FeatureSet.EnumType|null} [enumType] FeatureSet enumType
                 * @property {google.protobuf.FeatureSet.RepeatedFieldEncoding|null} [repeatedFieldEncoding] FeatureSet repeatedFieldEncoding
                 * @property {google.protobuf.FeatureSet.StringFieldValidation|null} [stringFieldValidation] FeatureSet stringFieldValidation
                 * @property {google.protobuf.FeatureSet.MessageEncoding|null} [messageEncoding] FeatureSet messageEncoding
                 * @property {google.protobuf.FeatureSet.JsonFormat|null} [jsonFormat] FeatureSet jsonFormat
                 * @property {google.protobuf.IFeatureSet|null} [rawFeatures] FeatureSet rawFeatures
                 */
    
                /**
                 * Constructs a new FeatureSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FeatureSet.
                 * @implements IFeatureSet
                 * @constructor
                 * @param {google.protobuf.IFeatureSet=} [properties] Properties to set
                 */
                function FeatureSet(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FeatureSet fieldPresence.
                 * @member {google.protobuf.FeatureSet.FieldPresence} fieldPresence
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.fieldPresence = 0;
    
                /**
                 * FeatureSet enumType.
                 * @member {google.protobuf.FeatureSet.EnumType} enumType
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.enumType = 0;
    
                /**
                 * FeatureSet repeatedFieldEncoding.
                 * @member {google.protobuf.FeatureSet.RepeatedFieldEncoding} repeatedFieldEncoding
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.repeatedFieldEncoding = 0;
    
                /**
                 * FeatureSet stringFieldValidation.
                 * @member {google.protobuf.FeatureSet.StringFieldValidation} stringFieldValidation
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.stringFieldValidation = 0;
    
                /**
                 * FeatureSet messageEncoding.
                 * @member {google.protobuf.FeatureSet.MessageEncoding} messageEncoding
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.messageEncoding = 0;
    
                /**
                 * FeatureSet jsonFormat.
                 * @member {google.protobuf.FeatureSet.JsonFormat} jsonFormat
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.jsonFormat = 0;
    
                /**
                 * FeatureSet rawFeatures.
                 * @member {google.protobuf.IFeatureSet|null|undefined} rawFeatures
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 */
                FeatureSet.prototype.rawFeatures = null;
    
                /**
                 * Creates a new FeatureSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {google.protobuf.IFeatureSet=} [properties] Properties to set
                 * @returns {google.protobuf.FeatureSet} FeatureSet instance
                 */
                FeatureSet.create = function create(properties) {
                    return new FeatureSet(properties);
                };
    
                /**
                 * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {google.protobuf.IFeatureSet} message FeatureSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldPresence != null && Object.hasOwnProperty.call(message, "fieldPresence"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fieldPresence);
                    if (message.enumType != null && Object.hasOwnProperty.call(message, "enumType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.enumType);
                    if (message.repeatedFieldEncoding != null && Object.hasOwnProperty.call(message, "repeatedFieldEncoding"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.repeatedFieldEncoding);
                    if (message.stringFieldValidation != null && Object.hasOwnProperty.call(message, "stringFieldValidation"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stringFieldValidation);
                    if (message.messageEncoding != null && Object.hasOwnProperty.call(message, "messageEncoding"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageEncoding);
                    if (message.jsonFormat != null && Object.hasOwnProperty.call(message, "jsonFormat"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jsonFormat);
                    if (message.rawFeatures != null && Object.hasOwnProperty.call(message, "rawFeatures"))
                        $root.google.protobuf.FeatureSet.encode(message.rawFeatures, writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {google.protobuf.IFeatureSet} message FeatureSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FeatureSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSet} FeatureSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FeatureSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.fieldPresence = reader.int32();
                                break;
                            }
                        case 2: {
                                message.enumType = reader.int32();
                                break;
                            }
                        case 3: {
                                message.repeatedFieldEncoding = reader.int32();
                                break;
                            }
                        case 4: {
                                message.stringFieldValidation = reader.int32();
                                break;
                            }
                        case 5: {
                                message.messageEncoding = reader.int32();
                                break;
                            }
                        case 6: {
                                message.jsonFormat = reader.int32();
                                break;
                            }
                        case 999: {
                                message.rawFeatures = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSet} FeatureSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FeatureSet message.
                 * @function verify
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeatureSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldPresence != null && message.hasOwnProperty("fieldPresence"))
                        switch (message.fieldPresence) {
                        default:
                            return "fieldPresence: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.enumType != null && message.hasOwnProperty("enumType"))
                        switch (message.enumType) {
                        default:
                            return "enumType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.repeatedFieldEncoding != null && message.hasOwnProperty("repeatedFieldEncoding"))
                        switch (message.repeatedFieldEncoding) {
                        default:
                            return "repeatedFieldEncoding: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.stringFieldValidation != null && message.hasOwnProperty("stringFieldValidation"))
                        switch (message.stringFieldValidation) {
                        default:
                            return "stringFieldValidation: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.messageEncoding != null && message.hasOwnProperty("messageEncoding"))
                        switch (message.messageEncoding) {
                        default:
                            return "messageEncoding: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.jsonFormat != null && message.hasOwnProperty("jsonFormat"))
                        switch (message.jsonFormat) {
                        default:
                            return "jsonFormat: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.rawFeatures != null && message.hasOwnProperty("rawFeatures")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.rawFeatures);
                        if (error)
                            return "rawFeatures." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FeatureSet} FeatureSet
                 */
                FeatureSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FeatureSet)
                        return object;
                    var message = new $root.google.protobuf.FeatureSet();
                    switch (object.fieldPresence) {
                    default:
                        if (typeof object.fieldPresence === "number") {
                            message.fieldPresence = object.fieldPresence;
                            break;
                        }
                        break;
                    case "FIELD_PRESENCE_UNKNOWN":
                    case 0:
                        message.fieldPresence = 0;
                        break;
                    case "EXPLICIT":
                    case 1:
                        message.fieldPresence = 1;
                        break;
                    case "IMPLICIT":
                    case 2:
                        message.fieldPresence = 2;
                        break;
                    case "LEGACY_REQUIRED":
                    case 3:
                        message.fieldPresence = 3;
                        break;
                    }
                    switch (object.enumType) {
                    default:
                        if (typeof object.enumType === "number") {
                            message.enumType = object.enumType;
                            break;
                        }
                        break;
                    case "ENUM_TYPE_UNKNOWN":
                    case 0:
                        message.enumType = 0;
                        break;
                    case "OPEN":
                    case 1:
                        message.enumType = 1;
                        break;
                    case "CLOSED":
                    case 2:
                        message.enumType = 2;
                        break;
                    }
                    switch (object.repeatedFieldEncoding) {
                    default:
                        if (typeof object.repeatedFieldEncoding === "number") {
                            message.repeatedFieldEncoding = object.repeatedFieldEncoding;
                            break;
                        }
                        break;
                    case "REPEATED_FIELD_ENCODING_UNKNOWN":
                    case 0:
                        message.repeatedFieldEncoding = 0;
                        break;
                    case "PACKED":
                    case 1:
                        message.repeatedFieldEncoding = 1;
                        break;
                    case "EXPANDED":
                    case 2:
                        message.repeatedFieldEncoding = 2;
                        break;
                    }
                    switch (object.stringFieldValidation) {
                    default:
                        if (typeof object.stringFieldValidation === "number") {
                            message.stringFieldValidation = object.stringFieldValidation;
                            break;
                        }
                        break;
                    case "STRING_FIELD_VALIDATION_UNKNOWN":
                    case 0:
                        message.stringFieldValidation = 0;
                        break;
                    case "MANDATORY":
                    case 1:
                        message.stringFieldValidation = 1;
                        break;
                    case "HINT":
                    case 2:
                        message.stringFieldValidation = 2;
                        break;
                    case "NONE":
                    case 3:
                        message.stringFieldValidation = 3;
                        break;
                    }
                    switch (object.messageEncoding) {
                    default:
                        if (typeof object.messageEncoding === "number") {
                            message.messageEncoding = object.messageEncoding;
                            break;
                        }
                        break;
                    case "MESSAGE_ENCODING_UNKNOWN":
                    case 0:
                        message.messageEncoding = 0;
                        break;
                    case "LENGTH_PREFIXED":
                    case 1:
                        message.messageEncoding = 1;
                        break;
                    case "DELIMITED":
                    case 2:
                        message.messageEncoding = 2;
                        break;
                    }
                    switch (object.jsonFormat) {
                    default:
                        if (typeof object.jsonFormat === "number") {
                            message.jsonFormat = object.jsonFormat;
                            break;
                        }
                        break;
                    case "JSON_FORMAT_UNKNOWN":
                    case 0:
                        message.jsonFormat = 0;
                        break;
                    case "ALLOW":
                    case 1:
                        message.jsonFormat = 1;
                        break;
                    case "LEGACY_BEST_EFFORT":
                    case 2:
                        message.jsonFormat = 2;
                        break;
                    }
                    if (object.rawFeatures != null) {
                        if (typeof object.rawFeatures !== "object")
                            throw TypeError(".google.protobuf.FeatureSet.rawFeatures: object expected");
                        message.rawFeatures = $root.google.protobuf.FeatureSet.fromObject(object.rawFeatures);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {google.protobuf.FeatureSet} message FeatureSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeatureSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldPresence = options.enums === String ? "FIELD_PRESENCE_UNKNOWN" : 0;
                        object.enumType = options.enums === String ? "ENUM_TYPE_UNKNOWN" : 0;
                        object.repeatedFieldEncoding = options.enums === String ? "REPEATED_FIELD_ENCODING_UNKNOWN" : 0;
                        object.stringFieldValidation = options.enums === String ? "STRING_FIELD_VALIDATION_UNKNOWN" : 0;
                        object.messageEncoding = options.enums === String ? "MESSAGE_ENCODING_UNKNOWN" : 0;
                        object.jsonFormat = options.enums === String ? "JSON_FORMAT_UNKNOWN" : 0;
                        object.rawFeatures = null;
                    }
                    if (message.fieldPresence != null && message.hasOwnProperty("fieldPresence"))
                        object.fieldPresence = options.enums === String ? $root.google.protobuf.FeatureSet.FieldPresence[message.fieldPresence] === undefined ? message.fieldPresence : $root.google.protobuf.FeatureSet.FieldPresence[message.fieldPresence] : message.fieldPresence;
                    if (message.enumType != null && message.hasOwnProperty("enumType"))
                        object.enumType = options.enums === String ? $root.google.protobuf.FeatureSet.EnumType[message.enumType] === undefined ? message.enumType : $root.google.protobuf.FeatureSet.EnumType[message.enumType] : message.enumType;
                    if (message.repeatedFieldEncoding != null && message.hasOwnProperty("repeatedFieldEncoding"))
                        object.repeatedFieldEncoding = options.enums === String ? $root.google.protobuf.FeatureSet.RepeatedFieldEncoding[message.repeatedFieldEncoding] === undefined ? message.repeatedFieldEncoding : $root.google.protobuf.FeatureSet.RepeatedFieldEncoding[message.repeatedFieldEncoding] : message.repeatedFieldEncoding;
                    if (message.stringFieldValidation != null && message.hasOwnProperty("stringFieldValidation"))
                        object.stringFieldValidation = options.enums === String ? $root.google.protobuf.FeatureSet.StringFieldValidation[message.stringFieldValidation] === undefined ? message.stringFieldValidation : $root.google.protobuf.FeatureSet.StringFieldValidation[message.stringFieldValidation] : message.stringFieldValidation;
                    if (message.messageEncoding != null && message.hasOwnProperty("messageEncoding"))
                        object.messageEncoding = options.enums === String ? $root.google.protobuf.FeatureSet.MessageEncoding[message.messageEncoding] === undefined ? message.messageEncoding : $root.google.protobuf.FeatureSet.MessageEncoding[message.messageEncoding] : message.messageEncoding;
                    if (message.jsonFormat != null && message.hasOwnProperty("jsonFormat"))
                        object.jsonFormat = options.enums === String ? $root.google.protobuf.FeatureSet.JsonFormat[message.jsonFormat] === undefined ? message.jsonFormat : $root.google.protobuf.FeatureSet.JsonFormat[message.jsonFormat] : message.jsonFormat;
                    if (message.rawFeatures != null && message.hasOwnProperty("rawFeatures"))
                        object.rawFeatures = $root.google.protobuf.FeatureSet.toObject(message.rawFeatures, options);
                    return object;
                };
    
                /**
                 * Converts this FeatureSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FeatureSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeatureSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FeatureSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FeatureSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FeatureSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FeatureSet";
                };
    
                /**
                 * FieldPresence enum.
                 * @name google.protobuf.FeatureSet.FieldPresence
                 * @enum {number}
                 * @property {number} FIELD_PRESENCE_UNKNOWN=0 FIELD_PRESENCE_UNKNOWN value
                 * @property {number} EXPLICIT=1 EXPLICIT value
                 * @property {number} IMPLICIT=2 IMPLICIT value
                 * @property {number} LEGACY_REQUIRED=3 LEGACY_REQUIRED value
                 */
                FeatureSet.FieldPresence = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "FIELD_PRESENCE_UNKNOWN"] = 0;
                    values[valuesById[1] = "EXPLICIT"] = 1;
                    values[valuesById[2] = "IMPLICIT"] = 2;
                    values[valuesById[3] = "LEGACY_REQUIRED"] = 3;
                    return values;
                })();
    
                /**
                 * EnumType enum.
                 * @name google.protobuf.FeatureSet.EnumType
                 * @enum {number}
                 * @property {number} ENUM_TYPE_UNKNOWN=0 ENUM_TYPE_UNKNOWN value
                 * @property {number} OPEN=1 OPEN value
                 * @property {number} CLOSED=2 CLOSED value
                 */
                FeatureSet.EnumType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ENUM_TYPE_UNKNOWN"] = 0;
                    values[valuesById[1] = "OPEN"] = 1;
                    values[valuesById[2] = "CLOSED"] = 2;
                    return values;
                })();
    
                /**
                 * RepeatedFieldEncoding enum.
                 * @name google.protobuf.FeatureSet.RepeatedFieldEncoding
                 * @enum {number}
                 * @property {number} REPEATED_FIELD_ENCODING_UNKNOWN=0 REPEATED_FIELD_ENCODING_UNKNOWN value
                 * @property {number} PACKED=1 PACKED value
                 * @property {number} EXPANDED=2 EXPANDED value
                 */
                FeatureSet.RepeatedFieldEncoding = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "REPEATED_FIELD_ENCODING_UNKNOWN"] = 0;
                    values[valuesById[1] = "PACKED"] = 1;
                    values[valuesById[2] = "EXPANDED"] = 2;
                    return values;
                })();
    
                /**
                 * StringFieldValidation enum.
                 * @name google.protobuf.FeatureSet.StringFieldValidation
                 * @enum {number}
                 * @property {number} STRING_FIELD_VALIDATION_UNKNOWN=0 STRING_FIELD_VALIDATION_UNKNOWN value
                 * @property {number} MANDATORY=1 MANDATORY value
                 * @property {number} HINT=2 HINT value
                 * @property {number} NONE=3 NONE value
                 */
                FeatureSet.StringFieldValidation = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING_FIELD_VALIDATION_UNKNOWN"] = 0;
                    values[valuesById[1] = "MANDATORY"] = 1;
                    values[valuesById[2] = "HINT"] = 2;
                    values[valuesById[3] = "NONE"] = 3;
                    return values;
                })();
    
                /**
                 * MessageEncoding enum.
                 * @name google.protobuf.FeatureSet.MessageEncoding
                 * @enum {number}
                 * @property {number} MESSAGE_ENCODING_UNKNOWN=0 MESSAGE_ENCODING_UNKNOWN value
                 * @property {number} LENGTH_PREFIXED=1 LENGTH_PREFIXED value
                 * @property {number} DELIMITED=2 DELIMITED value
                 */
                FeatureSet.MessageEncoding = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "MESSAGE_ENCODING_UNKNOWN"] = 0;
                    values[valuesById[1] = "LENGTH_PREFIXED"] = 1;
                    values[valuesById[2] = "DELIMITED"] = 2;
                    return values;
                })();
    
                /**
                 * JsonFormat enum.
                 * @name google.protobuf.FeatureSet.JsonFormat
                 * @enum {number}
                 * @property {number} JSON_FORMAT_UNKNOWN=0 JSON_FORMAT_UNKNOWN value
                 * @property {number} ALLOW=1 ALLOW value
                 * @property {number} LEGACY_BEST_EFFORT=2 LEGACY_BEST_EFFORT value
                 */
                FeatureSet.JsonFormat = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JSON_FORMAT_UNKNOWN"] = 0;
                    values[valuesById[1] = "ALLOW"] = 1;
                    values[valuesById[2] = "LEGACY_BEST_EFFORT"] = 2;
                    return values;
                })();
    
                return FeatureSet;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.span.push(reader.int32());
                                    } else
                                        message.span.push(reader.int32());
                                    break;
                                }
                            case 3: {
                                    message.leadingComments = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.trailingComments = reader.string();
                                    break;
                                }
                            case 6: {
                                    if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                        message.leadingDetachedComments = [];
                                    message.leadingDetachedComments.push(reader.string());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.annotation && message.annotation.length))
                                    message.annotation = [];
                                message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for GeneratedCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     * @property {google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null} [semantic] Annotation semantic
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Annotation semantic.
                     * @member {google.protobuf.GeneratedCodeInfo.Annotation.Semantic} semantic
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.semantic = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        if (message.semantic != null && Object.hasOwnProperty.call(message, "semantic"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.semantic);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    message.sourceFile = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.begin = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.end = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.semantic = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.semantic != null && message.hasOwnProperty("semantic"))
                            switch (message.semantic) {
                            default:
                                return "semantic: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        switch (object.semantic) {
                        default:
                            if (typeof object.semantic === "number") {
                                message.semantic = object.semantic;
                                break;
                            }
                            break;
                        case "NONE":
                        case 0:
                            message.semantic = 0;
                            break;
                        case "SET":
                        case 1:
                            message.semantic = 1;
                            break;
                        case "ALIAS":
                        case 2:
                            message.semantic = 2;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                            object.semantic = options.enums === String ? "NONE" : 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.semantic != null && message.hasOwnProperty("semantic"))
                            object.semantic = options.enums === String ? $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] === undefined ? message.semantic : $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] : message.semantic;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Annotation
                     * @function getTypeUrl
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                    };
    
                    /**
                     * Semantic enum.
                     * @name google.protobuf.GeneratedCodeInfo.Annotation.Semantic
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} SET=1 SET value
                     * @property {number} ALIAS=2 ALIAS value
                     */
                    Annotation.Semantic = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "SET"] = 1;
                        values[valuesById[2] = "ALIAS"] = 2;
                        return values;
                    })();
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            protobuf.Duration = (function() {
    
                /**
                 * Properties of a Duration.
                 * @memberof google.protobuf
                 * @interface IDuration
                 * @property {number|Long|null} [seconds] Duration seconds
                 * @property {number|null} [nanos] Duration nanos
                 */
    
                /**
                 * Constructs a new Duration.
                 * @memberof google.protobuf
                 * @classdesc Represents a Duration.
                 * @implements IDuration
                 * @constructor
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 */
                function Duration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Duration seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Duration nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.nanos = 0;
    
                /**
                 * Creates a new Duration instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 * @returns {google.protobuf.Duration} Duration instance
                 */
                Duration.create = function create(properties) {
                    return new Duration(properties);
                };
    
                /**
                 * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.seconds = reader.int64();
                                break;
                            }
                        case 2: {
                                message.nanos = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Duration message.
                 * @function verify
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Duration.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Duration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Duration} Duration
                 */
                Duration.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Duration)
                        return object;
                    var message = new $root.google.protobuf.Duration();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Duration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Duration.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Duration to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Duration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Duration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Duration
                 * @function getTypeUrl
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Duration";
                };
    
                return Duration;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
