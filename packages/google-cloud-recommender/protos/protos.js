// Copyright 2020 Google LLC
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
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots._google_cloud_recommender_2_2_0_protos || ($protobuf.roots._google_cloud_recommender_2_2_0_protos = {});
    
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
    
            cloud.recommender = (function() {
    
                /**
                 * Namespace recommender.
                 * @memberof google.cloud
                 * @namespace
                 */
                var recommender = {};
    
                recommender.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.recommender
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.Recommendation = (function() {
    
                        /**
                         * Properties of a Recommendation.
                         * @memberof google.cloud.recommender.v1
                         * @interface IRecommendation
                         * @property {string|null} [name] Recommendation name
                         * @property {string|null} [description] Recommendation description
                         * @property {string|null} [recommenderSubtype] Recommendation recommenderSubtype
                         * @property {google.protobuf.ITimestamp|null} [lastRefreshTime] Recommendation lastRefreshTime
                         * @property {google.cloud.recommender.v1.IImpact|null} [primaryImpact] Recommendation primaryImpact
                         * @property {Array.<google.cloud.recommender.v1.IImpact>|null} [additionalImpact] Recommendation additionalImpact
                         * @property {google.cloud.recommender.v1.IRecommendationContent|null} [content] Recommendation content
                         * @property {google.cloud.recommender.v1.IRecommendationStateInfo|null} [stateInfo] Recommendation stateInfo
                         * @property {string|null} [etag] Recommendation etag
                         */
    
                        /**
                         * Constructs a new Recommendation.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a Recommendation.
                         * @implements IRecommendation
                         * @constructor
                         * @param {google.cloud.recommender.v1.IRecommendation=} [properties] Properties to set
                         */
                        function Recommendation(properties) {
                            this.additionalImpact = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Recommendation name.
                         * @member {string} name
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.name = "";
    
                        /**
                         * Recommendation description.
                         * @member {string} description
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.description = "";
    
                        /**
                         * Recommendation recommenderSubtype.
                         * @member {string} recommenderSubtype
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.recommenderSubtype = "";
    
                        /**
                         * Recommendation lastRefreshTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} lastRefreshTime
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.lastRefreshTime = null;
    
                        /**
                         * Recommendation primaryImpact.
                         * @member {google.cloud.recommender.v1.IImpact|null|undefined} primaryImpact
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.primaryImpact = null;
    
                        /**
                         * Recommendation additionalImpact.
                         * @member {Array.<google.cloud.recommender.v1.IImpact>} additionalImpact
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.additionalImpact = $util.emptyArray;
    
                        /**
                         * Recommendation content.
                         * @member {google.cloud.recommender.v1.IRecommendationContent|null|undefined} content
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.content = null;
    
                        /**
                         * Recommendation stateInfo.
                         * @member {google.cloud.recommender.v1.IRecommendationStateInfo|null|undefined} stateInfo
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.stateInfo = null;
    
                        /**
                         * Recommendation etag.
                         * @member {string} etag
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         */
                        Recommendation.prototype.etag = "";
    
                        /**
                         * Creates a new Recommendation instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendation=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.Recommendation} Recommendation instance
                         */
                        Recommendation.create = function create(properties) {
                            return new Recommendation(properties);
                        };
    
                        /**
                         * Encodes the specified Recommendation message. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendation} message Recommendation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Recommendation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.description != null && message.hasOwnProperty("description"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                            if (message.lastRefreshTime != null && message.hasOwnProperty("lastRefreshTime"))
                                $root.google.protobuf.Timestamp.encode(message.lastRefreshTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.primaryImpact != null && message.hasOwnProperty("primaryImpact"))
                                $root.google.cloud.recommender.v1.Impact.encode(message.primaryImpact, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.additionalImpact != null && message.additionalImpact.length)
                                for (var i = 0; i < message.additionalImpact.length; ++i)
                                    $root.google.cloud.recommender.v1.Impact.encode(message.additionalImpact[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.content != null && message.hasOwnProperty("content"))
                                $root.google.cloud.recommender.v1.RecommendationContent.encode(message.content, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.stateInfo != null && message.hasOwnProperty("stateInfo"))
                                $root.google.cloud.recommender.v1.RecommendationStateInfo.encode(message.stateInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.etag);
                            if (message.recommenderSubtype != null && message.hasOwnProperty("recommenderSubtype"))
                                writer.uint32(/* id 12, wireType 2 =*/98).string(message.recommenderSubtype);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Recommendation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendation} message Recommendation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Recommendation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Recommendation message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.Recommendation} Recommendation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Recommendation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.Recommendation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.description = reader.string();
                                    break;
                                case 12:
                                    message.recommenderSubtype = reader.string();
                                    break;
                                case 4:
                                    message.lastRefreshTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    message.primaryImpact = $root.google.cloud.recommender.v1.Impact.decode(reader, reader.uint32());
                                    break;
                                case 6:
                                    if (!(message.additionalImpact && message.additionalImpact.length))
                                        message.additionalImpact = [];
                                    message.additionalImpact.push($root.google.cloud.recommender.v1.Impact.decode(reader, reader.uint32()));
                                    break;
                                case 7:
                                    message.content = $root.google.cloud.recommender.v1.RecommendationContent.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.stateInfo = $root.google.cloud.recommender.v1.RecommendationStateInfo.decode(reader, reader.uint32());
                                    break;
                                case 11:
                                    message.etag = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Recommendation message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.Recommendation} Recommendation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Recommendation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Recommendation message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Recommendation.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.description != null && message.hasOwnProperty("description"))
                                if (!$util.isString(message.description))
                                    return "description: string expected";
                            if (message.recommenderSubtype != null && message.hasOwnProperty("recommenderSubtype"))
                                if (!$util.isString(message.recommenderSubtype))
                                    return "recommenderSubtype: string expected";
                            if (message.lastRefreshTime != null && message.hasOwnProperty("lastRefreshTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.lastRefreshTime);
                                if (error)
                                    return "lastRefreshTime." + error;
                            }
                            if (message.primaryImpact != null && message.hasOwnProperty("primaryImpact")) {
                                var error = $root.google.cloud.recommender.v1.Impact.verify(message.primaryImpact);
                                if (error)
                                    return "primaryImpact." + error;
                            }
                            if (message.additionalImpact != null && message.hasOwnProperty("additionalImpact")) {
                                if (!Array.isArray(message.additionalImpact))
                                    return "additionalImpact: array expected";
                                for (var i = 0; i < message.additionalImpact.length; ++i) {
                                    var error = $root.google.cloud.recommender.v1.Impact.verify(message.additionalImpact[i]);
                                    if (error)
                                        return "additionalImpact." + error;
                                }
                            }
                            if (message.content != null && message.hasOwnProperty("content")) {
                                var error = $root.google.cloud.recommender.v1.RecommendationContent.verify(message.content);
                                if (error)
                                    return "content." + error;
                            }
                            if (message.stateInfo != null && message.hasOwnProperty("stateInfo")) {
                                var error = $root.google.cloud.recommender.v1.RecommendationStateInfo.verify(message.stateInfo);
                                if (error)
                                    return "stateInfo." + error;
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a Recommendation message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.Recommendation} Recommendation
                         */
                        Recommendation.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.Recommendation)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.Recommendation();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.description != null)
                                message.description = String(object.description);
                            if (object.recommenderSubtype != null)
                                message.recommenderSubtype = String(object.recommenderSubtype);
                            if (object.lastRefreshTime != null) {
                                if (typeof object.lastRefreshTime !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Recommendation.lastRefreshTime: object expected");
                                message.lastRefreshTime = $root.google.protobuf.Timestamp.fromObject(object.lastRefreshTime);
                            }
                            if (object.primaryImpact != null) {
                                if (typeof object.primaryImpact !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Recommendation.primaryImpact: object expected");
                                message.primaryImpact = $root.google.cloud.recommender.v1.Impact.fromObject(object.primaryImpact);
                            }
                            if (object.additionalImpact) {
                                if (!Array.isArray(object.additionalImpact))
                                    throw TypeError(".google.cloud.recommender.v1.Recommendation.additionalImpact: array expected");
                                message.additionalImpact = [];
                                for (var i = 0; i < object.additionalImpact.length; ++i) {
                                    if (typeof object.additionalImpact[i] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.Recommendation.additionalImpact: object expected");
                                    message.additionalImpact[i] = $root.google.cloud.recommender.v1.Impact.fromObject(object.additionalImpact[i]);
                                }
                            }
                            if (object.content != null) {
                                if (typeof object.content !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Recommendation.content: object expected");
                                message.content = $root.google.cloud.recommender.v1.RecommendationContent.fromObject(object.content);
                            }
                            if (object.stateInfo != null) {
                                if (typeof object.stateInfo !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Recommendation.stateInfo: object expected");
                                message.stateInfo = $root.google.cloud.recommender.v1.RecommendationStateInfo.fromObject(object.stateInfo);
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Recommendation message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @static
                         * @param {google.cloud.recommender.v1.Recommendation} message Recommendation
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Recommendation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.additionalImpact = [];
                            if (options.defaults) {
                                object.name = "";
                                object.description = "";
                                object.lastRefreshTime = null;
                                object.primaryImpact = null;
                                object.content = null;
                                object.stateInfo = null;
                                object.etag = "";
                                object.recommenderSubtype = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.description != null && message.hasOwnProperty("description"))
                                object.description = message.description;
                            if (message.lastRefreshTime != null && message.hasOwnProperty("lastRefreshTime"))
                                object.lastRefreshTime = $root.google.protobuf.Timestamp.toObject(message.lastRefreshTime, options);
                            if (message.primaryImpact != null && message.hasOwnProperty("primaryImpact"))
                                object.primaryImpact = $root.google.cloud.recommender.v1.Impact.toObject(message.primaryImpact, options);
                            if (message.additionalImpact && message.additionalImpact.length) {
                                object.additionalImpact = [];
                                for (var j = 0; j < message.additionalImpact.length; ++j)
                                    object.additionalImpact[j] = $root.google.cloud.recommender.v1.Impact.toObject(message.additionalImpact[j], options);
                            }
                            if (message.content != null && message.hasOwnProperty("content"))
                                object.content = $root.google.cloud.recommender.v1.RecommendationContent.toObject(message.content, options);
                            if (message.stateInfo != null && message.hasOwnProperty("stateInfo"))
                                object.stateInfo = $root.google.cloud.recommender.v1.RecommendationStateInfo.toObject(message.stateInfo, options);
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            if (message.recommenderSubtype != null && message.hasOwnProperty("recommenderSubtype"))
                                object.recommenderSubtype = message.recommenderSubtype;
                            return object;
                        };
    
                        /**
                         * Converts this Recommendation to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.Recommendation
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Recommendation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return Recommendation;
                    })();
    
                    v1.RecommendationContent = (function() {
    
                        /**
                         * Properties of a RecommendationContent.
                         * @memberof google.cloud.recommender.v1
                         * @interface IRecommendationContent
                         * @property {Array.<google.cloud.recommender.v1.IOperationGroup>|null} [operationGroups] RecommendationContent operationGroups
                         */
    
                        /**
                         * Constructs a new RecommendationContent.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a RecommendationContent.
                         * @implements IRecommendationContent
                         * @constructor
                         * @param {google.cloud.recommender.v1.IRecommendationContent=} [properties] Properties to set
                         */
                        function RecommendationContent(properties) {
                            this.operationGroups = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * RecommendationContent operationGroups.
                         * @member {Array.<google.cloud.recommender.v1.IOperationGroup>} operationGroups
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @instance
                         */
                        RecommendationContent.prototype.operationGroups = $util.emptyArray;
    
                        /**
                         * Creates a new RecommendationContent instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationContent=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.RecommendationContent} RecommendationContent instance
                         */
                        RecommendationContent.create = function create(properties) {
                            return new RecommendationContent(properties);
                        };
    
                        /**
                         * Encodes the specified RecommendationContent message. Does not implicitly {@link google.cloud.recommender.v1.RecommendationContent.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationContent} message RecommendationContent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecommendationContent.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operationGroups != null && message.operationGroups.length)
                                for (var i = 0; i < message.operationGroups.length; ++i)
                                    $root.google.cloud.recommender.v1.OperationGroup.encode(message.operationGroups[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified RecommendationContent message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommendationContent.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationContent} message RecommendationContent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecommendationContent.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a RecommendationContent message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.RecommendationContent} RecommendationContent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecommendationContent.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.RecommendationContent();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 2:
                                    if (!(message.operationGroups && message.operationGroups.length))
                                        message.operationGroups = [];
                                    message.operationGroups.push($root.google.cloud.recommender.v1.OperationGroup.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a RecommendationContent message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.RecommendationContent} RecommendationContent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecommendationContent.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a RecommendationContent message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RecommendationContent.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.operationGroups != null && message.hasOwnProperty("operationGroups")) {
                                if (!Array.isArray(message.operationGroups))
                                    return "operationGroups: array expected";
                                for (var i = 0; i < message.operationGroups.length; ++i) {
                                    var error = $root.google.cloud.recommender.v1.OperationGroup.verify(message.operationGroups[i]);
                                    if (error)
                                        return "operationGroups." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a RecommendationContent message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.RecommendationContent} RecommendationContent
                         */
                        RecommendationContent.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.RecommendationContent)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.RecommendationContent();
                            if (object.operationGroups) {
                                if (!Array.isArray(object.operationGroups))
                                    throw TypeError(".google.cloud.recommender.v1.RecommendationContent.operationGroups: array expected");
                                message.operationGroups = [];
                                for (var i = 0; i < object.operationGroups.length; ++i) {
                                    if (typeof object.operationGroups[i] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.RecommendationContent.operationGroups: object expected");
                                    message.operationGroups[i] = $root.google.cloud.recommender.v1.OperationGroup.fromObject(object.operationGroups[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a RecommendationContent message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @static
                         * @param {google.cloud.recommender.v1.RecommendationContent} message RecommendationContent
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RecommendationContent.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.operationGroups = [];
                            if (message.operationGroups && message.operationGroups.length) {
                                object.operationGroups = [];
                                for (var j = 0; j < message.operationGroups.length; ++j)
                                    object.operationGroups[j] = $root.google.cloud.recommender.v1.OperationGroup.toObject(message.operationGroups[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this RecommendationContent to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.RecommendationContent
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RecommendationContent.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return RecommendationContent;
                    })();
    
                    v1.OperationGroup = (function() {
    
                        /**
                         * Properties of an OperationGroup.
                         * @memberof google.cloud.recommender.v1
                         * @interface IOperationGroup
                         * @property {Array.<google.cloud.recommender.v1.IOperation>|null} [operations] OperationGroup operations
                         */
    
                        /**
                         * Constructs a new OperationGroup.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents an OperationGroup.
                         * @implements IOperationGroup
                         * @constructor
                         * @param {google.cloud.recommender.v1.IOperationGroup=} [properties] Properties to set
                         */
                        function OperationGroup(properties) {
                            this.operations = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * OperationGroup operations.
                         * @member {Array.<google.cloud.recommender.v1.IOperation>} operations
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @instance
                         */
                        OperationGroup.prototype.operations = $util.emptyArray;
    
                        /**
                         * Creates a new OperationGroup instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {google.cloud.recommender.v1.IOperationGroup=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.OperationGroup} OperationGroup instance
                         */
                        OperationGroup.create = function create(properties) {
                            return new OperationGroup(properties);
                        };
    
                        /**
                         * Encodes the specified OperationGroup message. Does not implicitly {@link google.cloud.recommender.v1.OperationGroup.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {google.cloud.recommender.v1.IOperationGroup} message OperationGroup message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationGroup.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operations != null && message.operations.length)
                                for (var i = 0; i < message.operations.length; ++i)
                                    $root.google.cloud.recommender.v1.Operation.encode(message.operations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OperationGroup message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.OperationGroup.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {google.cloud.recommender.v1.IOperationGroup} message OperationGroup message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationGroup.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OperationGroup message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.OperationGroup} OperationGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationGroup.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.OperationGroup();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.operations && message.operations.length))
                                        message.operations = [];
                                    message.operations.push($root.google.cloud.recommender.v1.Operation.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an OperationGroup message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.OperationGroup} OperationGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationGroup.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an OperationGroup message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        OperationGroup.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.operations != null && message.hasOwnProperty("operations")) {
                                if (!Array.isArray(message.operations))
                                    return "operations: array expected";
                                for (var i = 0; i < message.operations.length; ++i) {
                                    var error = $root.google.cloud.recommender.v1.Operation.verify(message.operations[i]);
                                    if (error)
                                        return "operations." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates an OperationGroup message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.OperationGroup} OperationGroup
                         */
                        OperationGroup.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.OperationGroup)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.OperationGroup();
                            if (object.operations) {
                                if (!Array.isArray(object.operations))
                                    throw TypeError(".google.cloud.recommender.v1.OperationGroup.operations: array expected");
                                message.operations = [];
                                for (var i = 0; i < object.operations.length; ++i) {
                                    if (typeof object.operations[i] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.OperationGroup.operations: object expected");
                                    message.operations[i] = $root.google.cloud.recommender.v1.Operation.fromObject(object.operations[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OperationGroup message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @static
                         * @param {google.cloud.recommender.v1.OperationGroup} message OperationGroup
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        OperationGroup.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.operations = [];
                            if (message.operations && message.operations.length) {
                                object.operations = [];
                                for (var j = 0; j < message.operations.length; ++j)
                                    object.operations[j] = $root.google.cloud.recommender.v1.Operation.toObject(message.operations[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this OperationGroup to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.OperationGroup
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OperationGroup.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return OperationGroup;
                    })();
    
                    v1.Operation = (function() {
    
                        /**
                         * Properties of an Operation.
                         * @memberof google.cloud.recommender.v1
                         * @interface IOperation
                         * @property {string|null} [action] Operation action
                         * @property {string|null} [resourceType] Operation resourceType
                         * @property {string|null} [resource] Operation resource
                         * @property {string|null} [path] Operation path
                         * @property {string|null} [sourceResource] Operation sourceResource
                         * @property {string|null} [sourcePath] Operation sourcePath
                         * @property {google.protobuf.IValue|null} [value] Operation value
                         * @property {google.cloud.recommender.v1.IValueMatcher|null} [valueMatcher] Operation valueMatcher
                         * @property {Object.<string,google.protobuf.IValue>|null} [pathFilters] Operation pathFilters
                         * @property {Object.<string,google.cloud.recommender.v1.IValueMatcher>|null} [pathValueMatchers] Operation pathValueMatchers
                         */
    
                        /**
                         * Constructs a new Operation.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents an Operation.
                         * @implements IOperation
                         * @constructor
                         * @param {google.cloud.recommender.v1.IOperation=} [properties] Properties to set
                         */
                        function Operation(properties) {
                            this.pathFilters = {};
                            this.pathValueMatchers = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Operation action.
                         * @member {string} action
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.action = "";
    
                        /**
                         * Operation resourceType.
                         * @member {string} resourceType
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.resourceType = "";
    
                        /**
                         * Operation resource.
                         * @member {string} resource
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.resource = "";
    
                        /**
                         * Operation path.
                         * @member {string} path
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.path = "";
    
                        /**
                         * Operation sourceResource.
                         * @member {string} sourceResource
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.sourceResource = "";
    
                        /**
                         * Operation sourcePath.
                         * @member {string} sourcePath
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.sourcePath = "";
    
                        /**
                         * Operation value.
                         * @member {google.protobuf.IValue|null|undefined} value
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.value = null;
    
                        /**
                         * Operation valueMatcher.
                         * @member {google.cloud.recommender.v1.IValueMatcher|null|undefined} valueMatcher
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.valueMatcher = null;
    
                        /**
                         * Operation pathFilters.
                         * @member {Object.<string,google.protobuf.IValue>} pathFilters
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.pathFilters = $util.emptyObject;
    
                        /**
                         * Operation pathValueMatchers.
                         * @member {Object.<string,google.cloud.recommender.v1.IValueMatcher>} pathValueMatchers
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Operation.prototype.pathValueMatchers = $util.emptyObject;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * Operation pathValue.
                         * @member {"value"|"valueMatcher"|undefined} pathValue
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         */
                        Object.defineProperty(Operation.prototype, "pathValue", {
                            get: $util.oneOfGetter($oneOfFields = ["value", "valueMatcher"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new Operation instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {google.cloud.recommender.v1.IOperation=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.Operation} Operation instance
                         */
                        Operation.create = function create(properties) {
                            return new Operation(properties);
                        };
    
                        /**
                         * Encodes the specified Operation message. Does not implicitly {@link google.cloud.recommender.v1.Operation.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {google.cloud.recommender.v1.IOperation} message Operation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Operation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.action != null && message.hasOwnProperty("action"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
                            if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceType);
                            if (message.resource != null && message.hasOwnProperty("resource"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resource);
                            if (message.path != null && message.hasOwnProperty("path"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.path);
                            if (message.sourceResource != null && message.hasOwnProperty("sourceResource"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sourceResource);
                            if (message.sourcePath != null && message.hasOwnProperty("sourcePath"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sourcePath);
                            if (message.value != null && message.hasOwnProperty("value"))
                                $root.google.protobuf.Value.encode(message.value, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.pathFilters != null && message.hasOwnProperty("pathFilters"))
                                for (var keys = Object.keys(message.pathFilters), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.google.protobuf.Value.encode(message.pathFilters[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            if (message.valueMatcher != null && message.hasOwnProperty("valueMatcher"))
                                $root.google.cloud.recommender.v1.ValueMatcher.encode(message.valueMatcher, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.pathValueMatchers != null && message.hasOwnProperty("pathValueMatchers"))
                                for (var keys = Object.keys(message.pathValueMatchers), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.google.cloud.recommender.v1.ValueMatcher.encode(message.pathValueMatchers[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Operation.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {google.cloud.recommender.v1.IOperation} message Operation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Operation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an Operation message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.Operation} Operation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Operation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.Operation(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.action = reader.string();
                                    break;
                                case 2:
                                    message.resourceType = reader.string();
                                    break;
                                case 3:
                                    message.resource = reader.string();
                                    break;
                                case 4:
                                    message.path = reader.string();
                                    break;
                                case 5:
                                    message.sourceResource = reader.string();
                                    break;
                                case 6:
                                    message.sourcePath = reader.string();
                                    break;
                                case 7:
                                    message.value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.valueMatcher = $root.google.cloud.recommender.v1.ValueMatcher.decode(reader, reader.uint32());
                                    break;
                                case 8:
                                    reader.skip().pos++;
                                    if (message.pathFilters === $util.emptyObject)
                                        message.pathFilters = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.pathFilters[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                case 11:
                                    reader.skip().pos++;
                                    if (message.pathValueMatchers === $util.emptyObject)
                                        message.pathValueMatchers = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.pathValueMatchers[key] = $root.google.cloud.recommender.v1.ValueMatcher.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an Operation message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.Operation} Operation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Operation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an Operation message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Operation.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.action != null && message.hasOwnProperty("action"))
                                if (!$util.isString(message.action))
                                    return "action: string expected";
                            if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                                if (!$util.isString(message.resourceType))
                                    return "resourceType: string expected";
                            if (message.resource != null && message.hasOwnProperty("resource"))
                                if (!$util.isString(message.resource))
                                    return "resource: string expected";
                            if (message.path != null && message.hasOwnProperty("path"))
                                if (!$util.isString(message.path))
                                    return "path: string expected";
                            if (message.sourceResource != null && message.hasOwnProperty("sourceResource"))
                                if (!$util.isString(message.sourceResource))
                                    return "sourceResource: string expected";
                            if (message.sourcePath != null && message.hasOwnProperty("sourcePath"))
                                if (!$util.isString(message.sourcePath))
                                    return "sourcePath: string expected";
                            if (message.value != null && message.hasOwnProperty("value")) {
                                properties.pathValue = 1;
                                {
                                    var error = $root.google.protobuf.Value.verify(message.value);
                                    if (error)
                                        return "value." + error;
                                }
                            }
                            if (message.valueMatcher != null && message.hasOwnProperty("valueMatcher")) {
                                if (properties.pathValue === 1)
                                    return "pathValue: multiple values";
                                properties.pathValue = 1;
                                {
                                    var error = $root.google.cloud.recommender.v1.ValueMatcher.verify(message.valueMatcher);
                                    if (error)
                                        return "valueMatcher." + error;
                                }
                            }
                            if (message.pathFilters != null && message.hasOwnProperty("pathFilters")) {
                                if (!$util.isObject(message.pathFilters))
                                    return "pathFilters: object expected";
                                var key = Object.keys(message.pathFilters);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.google.protobuf.Value.verify(message.pathFilters[key[i]]);
                                    if (error)
                                        return "pathFilters." + error;
                                }
                            }
                            if (message.pathValueMatchers != null && message.hasOwnProperty("pathValueMatchers")) {
                                if (!$util.isObject(message.pathValueMatchers))
                                    return "pathValueMatchers: object expected";
                                var key = Object.keys(message.pathValueMatchers);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.google.cloud.recommender.v1.ValueMatcher.verify(message.pathValueMatchers[key[i]]);
                                    if (error)
                                        return "pathValueMatchers." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.Operation} Operation
                         */
                        Operation.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.Operation)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.Operation();
                            if (object.action != null)
                                message.action = String(object.action);
                            if (object.resourceType != null)
                                message.resourceType = String(object.resourceType);
                            if (object.resource != null)
                                message.resource = String(object.resource);
                            if (object.path != null)
                                message.path = String(object.path);
                            if (object.sourceResource != null)
                                message.sourceResource = String(object.sourceResource);
                            if (object.sourcePath != null)
                                message.sourcePath = String(object.sourcePath);
                            if (object.value != null) {
                                if (typeof object.value !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Operation.value: object expected");
                                message.value = $root.google.protobuf.Value.fromObject(object.value);
                            }
                            if (object.valueMatcher != null) {
                                if (typeof object.valueMatcher !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Operation.valueMatcher: object expected");
                                message.valueMatcher = $root.google.cloud.recommender.v1.ValueMatcher.fromObject(object.valueMatcher);
                            }
                            if (object.pathFilters) {
                                if (typeof object.pathFilters !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Operation.pathFilters: object expected");
                                message.pathFilters = {};
                                for (var keys = Object.keys(object.pathFilters), i = 0; i < keys.length; ++i) {
                                    if (typeof object.pathFilters[keys[i]] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.Operation.pathFilters: object expected");
                                    message.pathFilters[keys[i]] = $root.google.protobuf.Value.fromObject(object.pathFilters[keys[i]]);
                                }
                            }
                            if (object.pathValueMatchers) {
                                if (typeof object.pathValueMatchers !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Operation.pathValueMatchers: object expected");
                                message.pathValueMatchers = {};
                                for (var keys = Object.keys(object.pathValueMatchers), i = 0; i < keys.length; ++i) {
                                    if (typeof object.pathValueMatchers[keys[i]] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.Operation.pathValueMatchers: object expected");
                                    message.pathValueMatchers[keys[i]] = $root.google.cloud.recommender.v1.ValueMatcher.fromObject(object.pathValueMatchers[keys[i]]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an Operation message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.Operation
                         * @static
                         * @param {google.cloud.recommender.v1.Operation} message Operation
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Operation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults) {
                                object.pathFilters = {};
                                object.pathValueMatchers = {};
                            }
                            if (options.defaults) {
                                object.action = "";
                                object.resourceType = "";
                                object.resource = "";
                                object.path = "";
                                object.sourceResource = "";
                                object.sourcePath = "";
                            }
                            if (message.action != null && message.hasOwnProperty("action"))
                                object.action = message.action;
                            if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                                object.resourceType = message.resourceType;
                            if (message.resource != null && message.hasOwnProperty("resource"))
                                object.resource = message.resource;
                            if (message.path != null && message.hasOwnProperty("path"))
                                object.path = message.path;
                            if (message.sourceResource != null && message.hasOwnProperty("sourceResource"))
                                object.sourceResource = message.sourceResource;
                            if (message.sourcePath != null && message.hasOwnProperty("sourcePath"))
                                object.sourcePath = message.sourcePath;
                            if (message.value != null && message.hasOwnProperty("value")) {
                                object.value = $root.google.protobuf.Value.toObject(message.value, options);
                                if (options.oneofs)
                                    object.pathValue = "value";
                            }
                            var keys2;
                            if (message.pathFilters && (keys2 = Object.keys(message.pathFilters)).length) {
                                object.pathFilters = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.pathFilters[keys2[j]] = $root.google.protobuf.Value.toObject(message.pathFilters[keys2[j]], options);
                            }
                            if (message.valueMatcher != null && message.hasOwnProperty("valueMatcher")) {
                                object.valueMatcher = $root.google.cloud.recommender.v1.ValueMatcher.toObject(message.valueMatcher, options);
                                if (options.oneofs)
                                    object.pathValue = "valueMatcher";
                            }
                            if (message.pathValueMatchers && (keys2 = Object.keys(message.pathValueMatchers)).length) {
                                object.pathValueMatchers = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.pathValueMatchers[keys2[j]] = $root.google.cloud.recommender.v1.ValueMatcher.toObject(message.pathValueMatchers[keys2[j]], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Operation to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.Operation
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Operation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return Operation;
                    })();
    
                    v1.ValueMatcher = (function() {
    
                        /**
                         * Properties of a ValueMatcher.
                         * @memberof google.cloud.recommender.v1
                         * @interface IValueMatcher
                         * @property {string|null} [matchesPattern] ValueMatcher matchesPattern
                         */
    
                        /**
                         * Constructs a new ValueMatcher.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a ValueMatcher.
                         * @implements IValueMatcher
                         * @constructor
                         * @param {google.cloud.recommender.v1.IValueMatcher=} [properties] Properties to set
                         */
                        function ValueMatcher(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ValueMatcher matchesPattern.
                         * @member {string} matchesPattern
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @instance
                         */
                        ValueMatcher.prototype.matchesPattern = "";
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * ValueMatcher matchVariant.
                         * @member {"matchesPattern"|undefined} matchVariant
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @instance
                         */
                        Object.defineProperty(ValueMatcher.prototype, "matchVariant", {
                            get: $util.oneOfGetter($oneOfFields = ["matchesPattern"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new ValueMatcher instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {google.cloud.recommender.v1.IValueMatcher=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.ValueMatcher} ValueMatcher instance
                         */
                        ValueMatcher.create = function create(properties) {
                            return new ValueMatcher(properties);
                        };
    
                        /**
                         * Encodes the specified ValueMatcher message. Does not implicitly {@link google.cloud.recommender.v1.ValueMatcher.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {google.cloud.recommender.v1.IValueMatcher} message ValueMatcher message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValueMatcher.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.matchesPattern != null && message.hasOwnProperty("matchesPattern"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.matchesPattern);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ValueMatcher message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ValueMatcher.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {google.cloud.recommender.v1.IValueMatcher} message ValueMatcher message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValueMatcher.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ValueMatcher message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.ValueMatcher} ValueMatcher
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValueMatcher.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.ValueMatcher();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.matchesPattern = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ValueMatcher message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.ValueMatcher} ValueMatcher
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValueMatcher.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ValueMatcher message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ValueMatcher.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.matchesPattern != null && message.hasOwnProperty("matchesPattern")) {
                                properties.matchVariant = 1;
                                if (!$util.isString(message.matchesPattern))
                                    return "matchesPattern: string expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ValueMatcher message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.ValueMatcher} ValueMatcher
                         */
                        ValueMatcher.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.ValueMatcher)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.ValueMatcher();
                            if (object.matchesPattern != null)
                                message.matchesPattern = String(object.matchesPattern);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ValueMatcher message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @static
                         * @param {google.cloud.recommender.v1.ValueMatcher} message ValueMatcher
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ValueMatcher.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.matchesPattern != null && message.hasOwnProperty("matchesPattern")) {
                                object.matchesPattern = message.matchesPattern;
                                if (options.oneofs)
                                    object.matchVariant = "matchesPattern";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ValueMatcher to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.ValueMatcher
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ValueMatcher.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ValueMatcher;
                    })();
    
                    v1.CostProjection = (function() {
    
                        /**
                         * Properties of a CostProjection.
                         * @memberof google.cloud.recommender.v1
                         * @interface ICostProjection
                         * @property {google.type.IMoney|null} [cost] CostProjection cost
                         * @property {google.protobuf.IDuration|null} [duration] CostProjection duration
                         */
    
                        /**
                         * Constructs a new CostProjection.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a CostProjection.
                         * @implements ICostProjection
                         * @constructor
                         * @param {google.cloud.recommender.v1.ICostProjection=} [properties] Properties to set
                         */
                        function CostProjection(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CostProjection cost.
                         * @member {google.type.IMoney|null|undefined} cost
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @instance
                         */
                        CostProjection.prototype.cost = null;
    
                        /**
                         * CostProjection duration.
                         * @member {google.protobuf.IDuration|null|undefined} duration
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @instance
                         */
                        CostProjection.prototype.duration = null;
    
                        /**
                         * Creates a new CostProjection instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {google.cloud.recommender.v1.ICostProjection=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.CostProjection} CostProjection instance
                         */
                        CostProjection.create = function create(properties) {
                            return new CostProjection(properties);
                        };
    
                        /**
                         * Encodes the specified CostProjection message. Does not implicitly {@link google.cloud.recommender.v1.CostProjection.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {google.cloud.recommender.v1.ICostProjection} message CostProjection message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CostProjection.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.cost != null && message.hasOwnProperty("cost"))
                                $root.google.type.Money.encode(message.cost, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.duration != null && message.hasOwnProperty("duration"))
                                $root.google.protobuf.Duration.encode(message.duration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CostProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.CostProjection.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {google.cloud.recommender.v1.ICostProjection} message CostProjection message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CostProjection.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CostProjection message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.CostProjection} CostProjection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CostProjection.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.CostProjection();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.cost = $root.google.type.Money.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.duration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a CostProjection message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.CostProjection} CostProjection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CostProjection.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CostProjection message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CostProjection.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.cost != null && message.hasOwnProperty("cost")) {
                                var error = $root.google.type.Money.verify(message.cost);
                                if (error)
                                    return "cost." + error;
                            }
                            if (message.duration != null && message.hasOwnProperty("duration")) {
                                var error = $root.google.protobuf.Duration.verify(message.duration);
                                if (error)
                                    return "duration." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a CostProjection message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.CostProjection} CostProjection
                         */
                        CostProjection.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.CostProjection)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.CostProjection();
                            if (object.cost != null) {
                                if (typeof object.cost !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.CostProjection.cost: object expected");
                                message.cost = $root.google.type.Money.fromObject(object.cost);
                            }
                            if (object.duration != null) {
                                if (typeof object.duration !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.CostProjection.duration: object expected");
                                message.duration = $root.google.protobuf.Duration.fromObject(object.duration);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CostProjection message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @static
                         * @param {google.cloud.recommender.v1.CostProjection} message CostProjection
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CostProjection.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.cost = null;
                                object.duration = null;
                            }
                            if (message.cost != null && message.hasOwnProperty("cost"))
                                object.cost = $root.google.type.Money.toObject(message.cost, options);
                            if (message.duration != null && message.hasOwnProperty("duration"))
                                object.duration = $root.google.protobuf.Duration.toObject(message.duration, options);
                            return object;
                        };
    
                        /**
                         * Converts this CostProjection to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.CostProjection
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CostProjection.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return CostProjection;
                    })();
    
                    v1.Impact = (function() {
    
                        /**
                         * Properties of an Impact.
                         * @memberof google.cloud.recommender.v1
                         * @interface IImpact
                         * @property {google.cloud.recommender.v1.Impact.Category|null} [category] Impact category
                         * @property {google.cloud.recommender.v1.ICostProjection|null} [costProjection] Impact costProjection
                         */
    
                        /**
                         * Constructs a new Impact.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents an Impact.
                         * @implements IImpact
                         * @constructor
                         * @param {google.cloud.recommender.v1.IImpact=} [properties] Properties to set
                         */
                        function Impact(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Impact category.
                         * @member {google.cloud.recommender.v1.Impact.Category} category
                         * @memberof google.cloud.recommender.v1.Impact
                         * @instance
                         */
                        Impact.prototype.category = 0;
    
                        /**
                         * Impact costProjection.
                         * @member {google.cloud.recommender.v1.ICostProjection|null|undefined} costProjection
                         * @memberof google.cloud.recommender.v1.Impact
                         * @instance
                         */
                        Impact.prototype.costProjection = null;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * Impact projection.
                         * @member {"costProjection"|undefined} projection
                         * @memberof google.cloud.recommender.v1.Impact
                         * @instance
                         */
                        Object.defineProperty(Impact.prototype, "projection", {
                            get: $util.oneOfGetter($oneOfFields = ["costProjection"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new Impact instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {google.cloud.recommender.v1.IImpact=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.Impact} Impact instance
                         */
                        Impact.create = function create(properties) {
                            return new Impact(properties);
                        };
    
                        /**
                         * Encodes the specified Impact message. Does not implicitly {@link google.cloud.recommender.v1.Impact.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {google.cloud.recommender.v1.IImpact} message Impact message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Impact.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.category != null && message.hasOwnProperty("category"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.category);
                            if (message.costProjection != null && message.hasOwnProperty("costProjection"))
                                $root.google.cloud.recommender.v1.CostProjection.encode(message.costProjection, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Impact message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Impact.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {google.cloud.recommender.v1.IImpact} message Impact message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Impact.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an Impact message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.Impact} Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Impact.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.Impact();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.category = reader.int32();
                                    break;
                                case 100:
                                    message.costProjection = $root.google.cloud.recommender.v1.CostProjection.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an Impact message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.Impact} Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Impact.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an Impact message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Impact.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.category != null && message.hasOwnProperty("category"))
                                switch (message.category) {
                                default:
                                    return "category: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            if (message.costProjection != null && message.hasOwnProperty("costProjection")) {
                                properties.projection = 1;
                                {
                                    var error = $root.google.cloud.recommender.v1.CostProjection.verify(message.costProjection);
                                    if (error)
                                        return "costProjection." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates an Impact message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.Impact} Impact
                         */
                        Impact.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.Impact)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.Impact();
                            switch (object.category) {
                            case "CATEGORY_UNSPECIFIED":
                            case 0:
                                message.category = 0;
                                break;
                            case "COST":
                            case 1:
                                message.category = 1;
                                break;
                            case "SECURITY":
                            case 2:
                                message.category = 2;
                                break;
                            case "PERFORMANCE":
                            case 3:
                                message.category = 3;
                                break;
                            case "MANAGEABILITY":
                            case 4:
                                message.category = 4;
                                break;
                            }
                            if (object.costProjection != null) {
                                if (typeof object.costProjection !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.Impact.costProjection: object expected");
                                message.costProjection = $root.google.cloud.recommender.v1.CostProjection.fromObject(object.costProjection);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an Impact message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.Impact
                         * @static
                         * @param {google.cloud.recommender.v1.Impact} message Impact
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Impact.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.category = options.enums === String ? "CATEGORY_UNSPECIFIED" : 0;
                            if (message.category != null && message.hasOwnProperty("category"))
                                object.category = options.enums === String ? $root.google.cloud.recommender.v1.Impact.Category[message.category] : message.category;
                            if (message.costProjection != null && message.hasOwnProperty("costProjection")) {
                                object.costProjection = $root.google.cloud.recommender.v1.CostProjection.toObject(message.costProjection, options);
                                if (options.oneofs)
                                    object.projection = "costProjection";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Impact to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.Impact
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Impact.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Category enum.
                         * @name google.cloud.recommender.v1.Impact.Category
                         * @enum {string}
                         * @property {number} CATEGORY_UNSPECIFIED=0 CATEGORY_UNSPECIFIED value
                         * @property {number} COST=1 COST value
                         * @property {number} SECURITY=2 SECURITY value
                         * @property {number} PERFORMANCE=3 PERFORMANCE value
                         * @property {number} MANAGEABILITY=4 MANAGEABILITY value
                         */
                        Impact.Category = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "CATEGORY_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "COST"] = 1;
                            values[valuesById[2] = "SECURITY"] = 2;
                            values[valuesById[3] = "PERFORMANCE"] = 3;
                            values[valuesById[4] = "MANAGEABILITY"] = 4;
                            return values;
                        })();
    
                        return Impact;
                    })();
    
                    v1.RecommendationStateInfo = (function() {
    
                        /**
                         * Properties of a RecommendationStateInfo.
                         * @memberof google.cloud.recommender.v1
                         * @interface IRecommendationStateInfo
                         * @property {google.cloud.recommender.v1.RecommendationStateInfo.State|null} [state] RecommendationStateInfo state
                         * @property {Object.<string,string>|null} [stateMetadata] RecommendationStateInfo stateMetadata
                         */
    
                        /**
                         * Constructs a new RecommendationStateInfo.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a RecommendationStateInfo.
                         * @implements IRecommendationStateInfo
                         * @constructor
                         * @param {google.cloud.recommender.v1.IRecommendationStateInfo=} [properties] Properties to set
                         */
                        function RecommendationStateInfo(properties) {
                            this.stateMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * RecommendationStateInfo state.
                         * @member {google.cloud.recommender.v1.RecommendationStateInfo.State} state
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @instance
                         */
                        RecommendationStateInfo.prototype.state = 0;
    
                        /**
                         * RecommendationStateInfo stateMetadata.
                         * @member {Object.<string,string>} stateMetadata
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @instance
                         */
                        RecommendationStateInfo.prototype.stateMetadata = $util.emptyObject;
    
                        /**
                         * Creates a new RecommendationStateInfo instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationStateInfo=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.RecommendationStateInfo} RecommendationStateInfo instance
                         */
                        RecommendationStateInfo.create = function create(properties) {
                            return new RecommendationStateInfo(properties);
                        };
    
                        /**
                         * Encodes the specified RecommendationStateInfo message. Does not implicitly {@link google.cloud.recommender.v1.RecommendationStateInfo.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationStateInfo} message RecommendationStateInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecommendationStateInfo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.state != null && message.hasOwnProperty("state"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                                for (var keys = Object.keys(message.stateMetadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.stateMetadata[keys[i]]).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified RecommendationStateInfo message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommendationStateInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {google.cloud.recommender.v1.IRecommendationStateInfo} message RecommendationStateInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecommendationStateInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a RecommendationStateInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.RecommendationStateInfo} RecommendationStateInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecommendationStateInfo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.RecommendationStateInfo(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.state = reader.int32();
                                    break;
                                case 2:
                                    reader.skip().pos++;
                                    if (message.stateMetadata === $util.emptyObject)
                                        message.stateMetadata = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.stateMetadata[key] = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a RecommendationStateInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.RecommendationStateInfo} RecommendationStateInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecommendationStateInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a RecommendationStateInfo message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RecommendationStateInfo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.state != null && message.hasOwnProperty("state"))
                                switch (message.state) {
                                default:
                                    return "state: enum value expected";
                                case 0:
                                case 1:
                                case 6:
                                case 3:
                                case 4:
                                case 5:
                                    break;
                                }
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                                if (!$util.isObject(message.stateMetadata))
                                    return "stateMetadata: object expected";
                                var key = Object.keys(message.stateMetadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.stateMetadata[key[i]]))
                                        return "stateMetadata: string{k:string} expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a RecommendationStateInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.RecommendationStateInfo} RecommendationStateInfo
                         */
                        RecommendationStateInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.RecommendationStateInfo)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.RecommendationStateInfo();
                            switch (object.state) {
                            case "STATE_UNSPECIFIED":
                            case 0:
                                message.state = 0;
                                break;
                            case "ACTIVE":
                            case 1:
                                message.state = 1;
                                break;
                            case "CLAIMED":
                            case 6:
                                message.state = 6;
                                break;
                            case "SUCCEEDED":
                            case 3:
                                message.state = 3;
                                break;
                            case "FAILED":
                            case 4:
                                message.state = 4;
                                break;
                            case "DISMISSED":
                            case 5:
                                message.state = 5;
                                break;
                            }
                            if (object.stateMetadata) {
                                if (typeof object.stateMetadata !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.RecommendationStateInfo.stateMetadata: object expected");
                                message.stateMetadata = {};
                                for (var keys = Object.keys(object.stateMetadata), i = 0; i < keys.length; ++i)
                                    message.stateMetadata[keys[i]] = String(object.stateMetadata[keys[i]]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a RecommendationStateInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @static
                         * @param {google.cloud.recommender.v1.RecommendationStateInfo} message RecommendationStateInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RecommendationStateInfo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.stateMetadata = {};
                            if (options.defaults)
                                object.state = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.google.cloud.recommender.v1.RecommendationStateInfo.State[message.state] : message.state;
                            var keys2;
                            if (message.stateMetadata && (keys2 = Object.keys(message.stateMetadata)).length) {
                                object.stateMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.stateMetadata[keys2[j]] = message.stateMetadata[keys2[j]];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this RecommendationStateInfo to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.RecommendationStateInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RecommendationStateInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * State enum.
                         * @name google.cloud.recommender.v1.RecommendationStateInfo.State
                         * @enum {string}
                         * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
                         * @property {number} ACTIVE=1 ACTIVE value
                         * @property {number} CLAIMED=6 CLAIMED value
                         * @property {number} SUCCEEDED=3 SUCCEEDED value
                         * @property {number} FAILED=4 FAILED value
                         * @property {number} DISMISSED=5 DISMISSED value
                         */
                        RecommendationStateInfo.State = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "ACTIVE"] = 1;
                            values[valuesById[6] = "CLAIMED"] = 6;
                            values[valuesById[3] = "SUCCEEDED"] = 3;
                            values[valuesById[4] = "FAILED"] = 4;
                            values[valuesById[5] = "DISMISSED"] = 5;
                            return values;
                        })();
    
                        return RecommendationStateInfo;
                    })();
    
                    v1.Recommender = (function() {
    
                        /**
                         * Constructs a new Recommender service.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a Recommender
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function Recommender(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (Recommender.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Recommender;
    
                        /**
                         * Creates new Recommender service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {Recommender} RPC service. Useful where requests and/or responses are streamed.
                         */
                        Recommender.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.recommender.v1.Recommender#listRecommendations}.
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @typedef ListRecommendationsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.recommender.v1.ListRecommendationsResponse} [response] ListRecommendationsResponse
                         */
    
                        /**
                         * Calls ListRecommendations.
                         * @function listRecommendations
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest} request ListRecommendationsRequest message or plain object
                         * @param {google.cloud.recommender.v1.Recommender.ListRecommendationsCallback} callback Node-style callback called with the error, if any, and ListRecommendationsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Recommender.prototype.listRecommendations = function listRecommendations(request, callback) {
                            return this.rpcCall(listRecommendations, $root.google.cloud.recommender.v1.ListRecommendationsRequest, $root.google.cloud.recommender.v1.ListRecommendationsResponse, request, callback);
                        }, "name", { value: "ListRecommendations" });
    
                        /**
                         * Calls ListRecommendations.
                         * @function listRecommendations
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest} request ListRecommendationsRequest message or plain object
                         * @returns {Promise<google.cloud.recommender.v1.ListRecommendationsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.recommender.v1.Recommender#getRecommendation}.
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @typedef GetRecommendationCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.recommender.v1.Recommendation} [response] Recommendation
                         */
    
                        /**
                         * Calls GetRecommendation.
                         * @function getRecommendation
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest} request GetRecommendationRequest message or plain object
                         * @param {google.cloud.recommender.v1.Recommender.GetRecommendationCallback} callback Node-style callback called with the error, if any, and Recommendation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Recommender.prototype.getRecommendation = function getRecommendation(request, callback) {
                            return this.rpcCall(getRecommendation, $root.google.cloud.recommender.v1.GetRecommendationRequest, $root.google.cloud.recommender.v1.Recommendation, request, callback);
                        }, "name", { value: "GetRecommendation" });
    
                        /**
                         * Calls GetRecommendation.
                         * @function getRecommendation
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest} request GetRecommendationRequest message or plain object
                         * @returns {Promise<google.cloud.recommender.v1.Recommendation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.recommender.v1.Recommender#markRecommendationClaimed}.
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @typedef MarkRecommendationClaimedCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.recommender.v1.Recommendation} [response] Recommendation
                         */
    
                        /**
                         * Calls MarkRecommendationClaimed.
                         * @function markRecommendationClaimed
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest} request MarkRecommendationClaimedRequest message or plain object
                         * @param {google.cloud.recommender.v1.Recommender.MarkRecommendationClaimedCallback} callback Node-style callback called with the error, if any, and Recommendation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Recommender.prototype.markRecommendationClaimed = function markRecommendationClaimed(request, callback) {
                            return this.rpcCall(markRecommendationClaimed, $root.google.cloud.recommender.v1.MarkRecommendationClaimedRequest, $root.google.cloud.recommender.v1.Recommendation, request, callback);
                        }, "name", { value: "MarkRecommendationClaimed" });
    
                        /**
                         * Calls MarkRecommendationClaimed.
                         * @function markRecommendationClaimed
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest} request MarkRecommendationClaimedRequest message or plain object
                         * @returns {Promise<google.cloud.recommender.v1.Recommendation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.recommender.v1.Recommender#markRecommendationSucceeded}.
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @typedef MarkRecommendationSucceededCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.recommender.v1.Recommendation} [response] Recommendation
                         */
    
                        /**
                         * Calls MarkRecommendationSucceeded.
                         * @function markRecommendationSucceeded
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest} request MarkRecommendationSucceededRequest message or plain object
                         * @param {google.cloud.recommender.v1.Recommender.MarkRecommendationSucceededCallback} callback Node-style callback called with the error, if any, and Recommendation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Recommender.prototype.markRecommendationSucceeded = function markRecommendationSucceeded(request, callback) {
                            return this.rpcCall(markRecommendationSucceeded, $root.google.cloud.recommender.v1.MarkRecommendationSucceededRequest, $root.google.cloud.recommender.v1.Recommendation, request, callback);
                        }, "name", { value: "MarkRecommendationSucceeded" });
    
                        /**
                         * Calls MarkRecommendationSucceeded.
                         * @function markRecommendationSucceeded
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest} request MarkRecommendationSucceededRequest message or plain object
                         * @returns {Promise<google.cloud.recommender.v1.Recommendation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.recommender.v1.Recommender#markRecommendationFailed}.
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @typedef MarkRecommendationFailedCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.recommender.v1.Recommendation} [response] Recommendation
                         */
    
                        /**
                         * Calls MarkRecommendationFailed.
                         * @function markRecommendationFailed
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest} request MarkRecommendationFailedRequest message or plain object
                         * @param {google.cloud.recommender.v1.Recommender.MarkRecommendationFailedCallback} callback Node-style callback called with the error, if any, and Recommendation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Recommender.prototype.markRecommendationFailed = function markRecommendationFailed(request, callback) {
                            return this.rpcCall(markRecommendationFailed, $root.google.cloud.recommender.v1.MarkRecommendationFailedRequest, $root.google.cloud.recommender.v1.Recommendation, request, callback);
                        }, "name", { value: "MarkRecommendationFailed" });
    
                        /**
                         * Calls MarkRecommendationFailed.
                         * @function markRecommendationFailed
                         * @memberof google.cloud.recommender.v1.Recommender
                         * @instance
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest} request MarkRecommendationFailedRequest message or plain object
                         * @returns {Promise<google.cloud.recommender.v1.Recommendation>} Promise
                         * @variation 2
                         */
    
                        return Recommender;
                    })();
    
                    v1.ListRecommendationsRequest = (function() {
    
                        /**
                         * Properties of a ListRecommendationsRequest.
                         * @memberof google.cloud.recommender.v1
                         * @interface IListRecommendationsRequest
                         * @property {string|null} [parent] ListRecommendationsRequest parent
                         * @property {number|null} [pageSize] ListRecommendationsRequest pageSize
                         * @property {string|null} [pageToken] ListRecommendationsRequest pageToken
                         * @property {string|null} [filter] ListRecommendationsRequest filter
                         */
    
                        /**
                         * Constructs a new ListRecommendationsRequest.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a ListRecommendationsRequest.
                         * @implements IListRecommendationsRequest
                         * @constructor
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest=} [properties] Properties to set
                         */
                        function ListRecommendationsRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListRecommendationsRequest parent.
                         * @member {string} parent
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @instance
                         */
                        ListRecommendationsRequest.prototype.parent = "";
    
                        /**
                         * ListRecommendationsRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @instance
                         */
                        ListRecommendationsRequest.prototype.pageSize = 0;
    
                        /**
                         * ListRecommendationsRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @instance
                         */
                        ListRecommendationsRequest.prototype.pageToken = "";
    
                        /**
                         * ListRecommendationsRequest filter.
                         * @member {string} filter
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @instance
                         */
                        ListRecommendationsRequest.prototype.filter = "";
    
                        /**
                         * Creates a new ListRecommendationsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.ListRecommendationsRequest} ListRecommendationsRequest instance
                         */
                        ListRecommendationsRequest.create = function create(properties) {
                            return new ListRecommendationsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListRecommendationsRequest message. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest} message ListRecommendationsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListRecommendationsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.filter);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListRecommendationsRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsRequest} message ListRecommendationsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListRecommendationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListRecommendationsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.ListRecommendationsRequest} ListRecommendationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListRecommendationsRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.ListRecommendationsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.parent = reader.string();
                                    break;
                                case 2:
                                    message.pageSize = reader.int32();
                                    break;
                                case 3:
                                    message.pageToken = reader.string();
                                    break;
                                case 5:
                                    message.filter = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ListRecommendationsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.ListRecommendationsRequest} ListRecommendationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListRecommendationsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListRecommendationsRequest message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListRecommendationsRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                if (!$util.isString(message.filter))
                                    return "filter: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListRecommendationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.ListRecommendationsRequest} ListRecommendationsRequest
                         */
                        ListRecommendationsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.ListRecommendationsRequest)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.ListRecommendationsRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListRecommendationsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @static
                         * @param {google.cloud.recommender.v1.ListRecommendationsRequest} message ListRecommendationsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListRecommendationsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                                object.filter = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            return object;
                        };
    
                        /**
                         * Converts this ListRecommendationsRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.ListRecommendationsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListRecommendationsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ListRecommendationsRequest;
                    })();
    
                    v1.ListRecommendationsResponse = (function() {
    
                        /**
                         * Properties of a ListRecommendationsResponse.
                         * @memberof google.cloud.recommender.v1
                         * @interface IListRecommendationsResponse
                         * @property {Array.<google.cloud.recommender.v1.IRecommendation>|null} [recommendations] ListRecommendationsResponse recommendations
                         * @property {string|null} [nextPageToken] ListRecommendationsResponse nextPageToken
                         */
    
                        /**
                         * Constructs a new ListRecommendationsResponse.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a ListRecommendationsResponse.
                         * @implements IListRecommendationsResponse
                         * @constructor
                         * @param {google.cloud.recommender.v1.IListRecommendationsResponse=} [properties] Properties to set
                         */
                        function ListRecommendationsResponse(properties) {
                            this.recommendations = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListRecommendationsResponse recommendations.
                         * @member {Array.<google.cloud.recommender.v1.IRecommendation>} recommendations
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @instance
                         */
                        ListRecommendationsResponse.prototype.recommendations = $util.emptyArray;
    
                        /**
                         * ListRecommendationsResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @instance
                         */
                        ListRecommendationsResponse.prototype.nextPageToken = "";
    
                        /**
                         * Creates a new ListRecommendationsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsResponse=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.ListRecommendationsResponse} ListRecommendationsResponse instance
                         */
                        ListRecommendationsResponse.create = function create(properties) {
                            return new ListRecommendationsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListRecommendationsResponse message. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsResponse} message ListRecommendationsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListRecommendationsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.recommendations != null && message.recommendations.length)
                                for (var i = 0; i < message.recommendations.length; ++i)
                                    $root.google.cloud.recommender.v1.Recommendation.encode(message.recommendations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListRecommendationsResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {google.cloud.recommender.v1.IListRecommendationsResponse} message ListRecommendationsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListRecommendationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListRecommendationsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.ListRecommendationsResponse} ListRecommendationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListRecommendationsResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.ListRecommendationsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.recommendations && message.recommendations.length))
                                        message.recommendations = [];
                                    message.recommendations.push($root.google.cloud.recommender.v1.Recommendation.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    message.nextPageToken = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ListRecommendationsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.ListRecommendationsResponse} ListRecommendationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListRecommendationsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListRecommendationsResponse message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListRecommendationsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.recommendations != null && message.hasOwnProperty("recommendations")) {
                                if (!Array.isArray(message.recommendations))
                                    return "recommendations: array expected";
                                for (var i = 0; i < message.recommendations.length; ++i) {
                                    var error = $root.google.cloud.recommender.v1.Recommendation.verify(message.recommendations[i]);
                                    if (error)
                                        return "recommendations." + error;
                                }
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                if (!$util.isString(message.nextPageToken))
                                    return "nextPageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListRecommendationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.ListRecommendationsResponse} ListRecommendationsResponse
                         */
                        ListRecommendationsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.ListRecommendationsResponse)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.ListRecommendationsResponse();
                            if (object.recommendations) {
                                if (!Array.isArray(object.recommendations))
                                    throw TypeError(".google.cloud.recommender.v1.ListRecommendationsResponse.recommendations: array expected");
                                message.recommendations = [];
                                for (var i = 0; i < object.recommendations.length; ++i) {
                                    if (typeof object.recommendations[i] !== "object")
                                        throw TypeError(".google.cloud.recommender.v1.ListRecommendationsResponse.recommendations: object expected");
                                    message.recommendations[i] = $root.google.cloud.recommender.v1.Recommendation.fromObject(object.recommendations[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListRecommendationsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @static
                         * @param {google.cloud.recommender.v1.ListRecommendationsResponse} message ListRecommendationsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListRecommendationsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.recommendations = [];
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.recommendations && message.recommendations.length) {
                                object.recommendations = [];
                                for (var j = 0; j < message.recommendations.length; ++j)
                                    object.recommendations[j] = $root.google.cloud.recommender.v1.Recommendation.toObject(message.recommendations[j], options);
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                object.nextPageToken = message.nextPageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListRecommendationsResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.ListRecommendationsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListRecommendationsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ListRecommendationsResponse;
                    })();
    
                    v1.GetRecommendationRequest = (function() {
    
                        /**
                         * Properties of a GetRecommendationRequest.
                         * @memberof google.cloud.recommender.v1
                         * @interface IGetRecommendationRequest
                         * @property {string|null} [name] GetRecommendationRequest name
                         */
    
                        /**
                         * Constructs a new GetRecommendationRequest.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a GetRecommendationRequest.
                         * @implements IGetRecommendationRequest
                         * @constructor
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest=} [properties] Properties to set
                         */
                        function GetRecommendationRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetRecommendationRequest name.
                         * @member {string} name
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @instance
                         */
                        GetRecommendationRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetRecommendationRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.GetRecommendationRequest} GetRecommendationRequest instance
                         */
                        GetRecommendationRequest.create = function create(properties) {
                            return new GetRecommendationRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetRecommendationRequest message. Does not implicitly {@link google.cloud.recommender.v1.GetRecommendationRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest} message GetRecommendationRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetRecommendationRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetRecommendationRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.GetRecommendationRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IGetRecommendationRequest} message GetRecommendationRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetRecommendationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetRecommendationRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.GetRecommendationRequest} GetRecommendationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetRecommendationRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.GetRecommendationRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a GetRecommendationRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.GetRecommendationRequest} GetRecommendationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetRecommendationRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetRecommendationRequest message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetRecommendationRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GetRecommendationRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.GetRecommendationRequest} GetRecommendationRequest
                         */
                        GetRecommendationRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.GetRecommendationRequest)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.GetRecommendationRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetRecommendationRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @static
                         * @param {google.cloud.recommender.v1.GetRecommendationRequest} message GetRecommendationRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetRecommendationRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this GetRecommendationRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.GetRecommendationRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetRecommendationRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return GetRecommendationRequest;
                    })();
    
                    v1.MarkRecommendationClaimedRequest = (function() {
    
                        /**
                         * Properties of a MarkRecommendationClaimedRequest.
                         * @memberof google.cloud.recommender.v1
                         * @interface IMarkRecommendationClaimedRequest
                         * @property {string|null} [name] MarkRecommendationClaimedRequest name
                         * @property {Object.<string,string>|null} [stateMetadata] MarkRecommendationClaimedRequest stateMetadata
                         * @property {string|null} [etag] MarkRecommendationClaimedRequest etag
                         */
    
                        /**
                         * Constructs a new MarkRecommendationClaimedRequest.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a MarkRecommendationClaimedRequest.
                         * @implements IMarkRecommendationClaimedRequest
                         * @constructor
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest=} [properties] Properties to set
                         */
                        function MarkRecommendationClaimedRequest(properties) {
                            this.stateMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * MarkRecommendationClaimedRequest name.
                         * @member {string} name
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @instance
                         */
                        MarkRecommendationClaimedRequest.prototype.name = "";
    
                        /**
                         * MarkRecommendationClaimedRequest stateMetadata.
                         * @member {Object.<string,string>} stateMetadata
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @instance
                         */
                        MarkRecommendationClaimedRequest.prototype.stateMetadata = $util.emptyObject;
    
                        /**
                         * MarkRecommendationClaimedRequest etag.
                         * @member {string} etag
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @instance
                         */
                        MarkRecommendationClaimedRequest.prototype.etag = "";
    
                        /**
                         * Creates a new MarkRecommendationClaimedRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.MarkRecommendationClaimedRequest} MarkRecommendationClaimedRequest instance
                         */
                        MarkRecommendationClaimedRequest.create = function create(properties) {
                            return new MarkRecommendationClaimedRequest(properties);
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationClaimedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationClaimedRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest} message MarkRecommendationClaimedRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationClaimedRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                                for (var keys = Object.keys(message.stateMetadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.stateMetadata[keys[i]]).ldelim();
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationClaimedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationClaimedRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationClaimedRequest} message MarkRecommendationClaimedRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationClaimedRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.MarkRecommendationClaimedRequest} MarkRecommendationClaimedRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationClaimedRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.MarkRecommendationClaimedRequest(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    reader.skip().pos++;
                                    if (message.stateMetadata === $util.emptyObject)
                                        message.stateMetadata = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.stateMetadata[key] = reader.string();
                                    break;
                                case 3:
                                    message.etag = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.MarkRecommendationClaimedRequest} MarkRecommendationClaimedRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationClaimedRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a MarkRecommendationClaimedRequest message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MarkRecommendationClaimedRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                                if (!$util.isObject(message.stateMetadata))
                                    return "stateMetadata: object expected";
                                var key = Object.keys(message.stateMetadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.stateMetadata[key[i]]))
                                        return "stateMetadata: string{k:string} expected";
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a MarkRecommendationClaimedRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.MarkRecommendationClaimedRequest} MarkRecommendationClaimedRequest
                         */
                        MarkRecommendationClaimedRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.MarkRecommendationClaimedRequest)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.MarkRecommendationClaimedRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.stateMetadata) {
                                if (typeof object.stateMetadata !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.MarkRecommendationClaimedRequest.stateMetadata: object expected");
                                message.stateMetadata = {};
                                for (var keys = Object.keys(object.stateMetadata), i = 0; i < keys.length; ++i)
                                    message.stateMetadata[keys[i]] = String(object.stateMetadata[keys[i]]);
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a MarkRecommendationClaimedRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.MarkRecommendationClaimedRequest} message MarkRecommendationClaimedRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MarkRecommendationClaimedRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.stateMetadata = {};
                            if (options.defaults) {
                                object.name = "";
                                object.etag = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            var keys2;
                            if (message.stateMetadata && (keys2 = Object.keys(message.stateMetadata)).length) {
                                object.stateMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.stateMetadata[keys2[j]] = message.stateMetadata[keys2[j]];
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this MarkRecommendationClaimedRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.MarkRecommendationClaimedRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MarkRecommendationClaimedRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return MarkRecommendationClaimedRequest;
                    })();
    
                    v1.MarkRecommendationSucceededRequest = (function() {
    
                        /**
                         * Properties of a MarkRecommendationSucceededRequest.
                         * @memberof google.cloud.recommender.v1
                         * @interface IMarkRecommendationSucceededRequest
                         * @property {string|null} [name] MarkRecommendationSucceededRequest name
                         * @property {Object.<string,string>|null} [stateMetadata] MarkRecommendationSucceededRequest stateMetadata
                         * @property {string|null} [etag] MarkRecommendationSucceededRequest etag
                         */
    
                        /**
                         * Constructs a new MarkRecommendationSucceededRequest.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a MarkRecommendationSucceededRequest.
                         * @implements IMarkRecommendationSucceededRequest
                         * @constructor
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest=} [properties] Properties to set
                         */
                        function MarkRecommendationSucceededRequest(properties) {
                            this.stateMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * MarkRecommendationSucceededRequest name.
                         * @member {string} name
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @instance
                         */
                        MarkRecommendationSucceededRequest.prototype.name = "";
    
                        /**
                         * MarkRecommendationSucceededRequest stateMetadata.
                         * @member {Object.<string,string>} stateMetadata
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @instance
                         */
                        MarkRecommendationSucceededRequest.prototype.stateMetadata = $util.emptyObject;
    
                        /**
                         * MarkRecommendationSucceededRequest etag.
                         * @member {string} etag
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @instance
                         */
                        MarkRecommendationSucceededRequest.prototype.etag = "";
    
                        /**
                         * Creates a new MarkRecommendationSucceededRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.MarkRecommendationSucceededRequest} MarkRecommendationSucceededRequest instance
                         */
                        MarkRecommendationSucceededRequest.create = function create(properties) {
                            return new MarkRecommendationSucceededRequest(properties);
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationSucceededRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationSucceededRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest} message MarkRecommendationSucceededRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationSucceededRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                                for (var keys = Object.keys(message.stateMetadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.stateMetadata[keys[i]]).ldelim();
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationSucceededRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationSucceededRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationSucceededRequest} message MarkRecommendationSucceededRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationSucceededRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.MarkRecommendationSucceededRequest} MarkRecommendationSucceededRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationSucceededRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.MarkRecommendationSucceededRequest(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    reader.skip().pos++;
                                    if (message.stateMetadata === $util.emptyObject)
                                        message.stateMetadata = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.stateMetadata[key] = reader.string();
                                    break;
                                case 3:
                                    message.etag = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.MarkRecommendationSucceededRequest} MarkRecommendationSucceededRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationSucceededRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a MarkRecommendationSucceededRequest message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MarkRecommendationSucceededRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                                if (!$util.isObject(message.stateMetadata))
                                    return "stateMetadata: object expected";
                                var key = Object.keys(message.stateMetadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.stateMetadata[key[i]]))
                                        return "stateMetadata: string{k:string} expected";
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a MarkRecommendationSucceededRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.MarkRecommendationSucceededRequest} MarkRecommendationSucceededRequest
                         */
                        MarkRecommendationSucceededRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.MarkRecommendationSucceededRequest)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.MarkRecommendationSucceededRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.stateMetadata) {
                                if (typeof object.stateMetadata !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.MarkRecommendationSucceededRequest.stateMetadata: object expected");
                                message.stateMetadata = {};
                                for (var keys = Object.keys(object.stateMetadata), i = 0; i < keys.length; ++i)
                                    message.stateMetadata[keys[i]] = String(object.stateMetadata[keys[i]]);
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a MarkRecommendationSucceededRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @static
                         * @param {google.cloud.recommender.v1.MarkRecommendationSucceededRequest} message MarkRecommendationSucceededRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MarkRecommendationSucceededRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.stateMetadata = {};
                            if (options.defaults) {
                                object.name = "";
                                object.etag = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            var keys2;
                            if (message.stateMetadata && (keys2 = Object.keys(message.stateMetadata)).length) {
                                object.stateMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.stateMetadata[keys2[j]] = message.stateMetadata[keys2[j]];
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this MarkRecommendationSucceededRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.MarkRecommendationSucceededRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MarkRecommendationSucceededRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return MarkRecommendationSucceededRequest;
                    })();
    
                    v1.MarkRecommendationFailedRequest = (function() {
    
                        /**
                         * Properties of a MarkRecommendationFailedRequest.
                         * @memberof google.cloud.recommender.v1
                         * @interface IMarkRecommendationFailedRequest
                         * @property {string|null} [name] MarkRecommendationFailedRequest name
                         * @property {Object.<string,string>|null} [stateMetadata] MarkRecommendationFailedRequest stateMetadata
                         * @property {string|null} [etag] MarkRecommendationFailedRequest etag
                         */
    
                        /**
                         * Constructs a new MarkRecommendationFailedRequest.
                         * @memberof google.cloud.recommender.v1
                         * @classdesc Represents a MarkRecommendationFailedRequest.
                         * @implements IMarkRecommendationFailedRequest
                         * @constructor
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest=} [properties] Properties to set
                         */
                        function MarkRecommendationFailedRequest(properties) {
                            this.stateMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * MarkRecommendationFailedRequest name.
                         * @member {string} name
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @instance
                         */
                        MarkRecommendationFailedRequest.prototype.name = "";
    
                        /**
                         * MarkRecommendationFailedRequest stateMetadata.
                         * @member {Object.<string,string>} stateMetadata
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @instance
                         */
                        MarkRecommendationFailedRequest.prototype.stateMetadata = $util.emptyObject;
    
                        /**
                         * MarkRecommendationFailedRequest etag.
                         * @member {string} etag
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @instance
                         */
                        MarkRecommendationFailedRequest.prototype.etag = "";
    
                        /**
                         * Creates a new MarkRecommendationFailedRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest=} [properties] Properties to set
                         * @returns {google.cloud.recommender.v1.MarkRecommendationFailedRequest} MarkRecommendationFailedRequest instance
                         */
                        MarkRecommendationFailedRequest.create = function create(properties) {
                            return new MarkRecommendationFailedRequest(properties);
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationFailedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationFailedRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest} message MarkRecommendationFailedRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationFailedRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata"))
                                for (var keys = Object.keys(message.stateMetadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.stateMetadata[keys[i]]).ldelim();
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified MarkRecommendationFailedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationFailedRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.IMarkRecommendationFailedRequest} message MarkRecommendationFailedRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MarkRecommendationFailedRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.recommender.v1.MarkRecommendationFailedRequest} MarkRecommendationFailedRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationFailedRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.recommender.v1.MarkRecommendationFailedRequest(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    reader.skip().pos++;
                                    if (message.stateMetadata === $util.emptyObject)
                                        message.stateMetadata = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.stateMetadata[key] = reader.string();
                                    break;
                                case 3:
                                    message.etag = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.recommender.v1.MarkRecommendationFailedRequest} MarkRecommendationFailedRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MarkRecommendationFailedRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a MarkRecommendationFailedRequest message.
                         * @function verify
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MarkRecommendationFailedRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.stateMetadata != null && message.hasOwnProperty("stateMetadata")) {
                                if (!$util.isObject(message.stateMetadata))
                                    return "stateMetadata: object expected";
                                var key = Object.keys(message.stateMetadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.stateMetadata[key[i]]))
                                        return "stateMetadata: string{k:string} expected";
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a MarkRecommendationFailedRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.recommender.v1.MarkRecommendationFailedRequest} MarkRecommendationFailedRequest
                         */
                        MarkRecommendationFailedRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.recommender.v1.MarkRecommendationFailedRequest)
                                return object;
                            var message = new $root.google.cloud.recommender.v1.MarkRecommendationFailedRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.stateMetadata) {
                                if (typeof object.stateMetadata !== "object")
                                    throw TypeError(".google.cloud.recommender.v1.MarkRecommendationFailedRequest.stateMetadata: object expected");
                                message.stateMetadata = {};
                                for (var keys = Object.keys(object.stateMetadata), i = 0; i < keys.length; ++i)
                                    message.stateMetadata[keys[i]] = String(object.stateMetadata[keys[i]]);
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a MarkRecommendationFailedRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @static
                         * @param {google.cloud.recommender.v1.MarkRecommendationFailedRequest} message MarkRecommendationFailedRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MarkRecommendationFailedRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.stateMetadata = {};
                            if (options.defaults) {
                                object.name = "";
                                object.etag = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            var keys2;
                            if (message.stateMetadata && (keys2 = Object.keys(message.stateMetadata)).length) {
                                object.stateMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.stateMetadata[keys2[j]] = message.stateMetadata[keys2[j]];
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this MarkRecommendationFailedRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.recommender.v1.MarkRecommendationFailedRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MarkRecommendationFailedRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return MarkRecommendationFailedRequest;
                    })();
    
                    return v1;
                })();
    
                return recommender;
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
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.pattern != null && message.pattern.length)
                        for (var i = 0; i < message.pattern.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pattern[i]);
                    if (message.nameField != null && message.hasOwnProperty("nameField"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nameField);
                    if (message.history != null && message.hasOwnProperty("history"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.history);
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.plural);
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.singular);
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
                        case 1:
                            message.type = reader.string();
                            break;
                        case 2:
                            if (!(message.pattern && message.pattern.length))
                                message.pattern = [];
                            message.pattern.push(reader.string());
                            break;
                        case 3:
                            message.nameField = reader.string();
                            break;
                        case 4:
                            message.history = reader.int32();
                            break;
                        case 5:
                            message.plural = reader.string();
                            break;
                        case 6:
                            message.singular = reader.string();
                            break;
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
                    if (options.arrays || options.defaults)
                        object.pattern = [];
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
                        object.history = options.enums === String ? $root.google.api.ResourceDescriptor.History[message.history] : message.history;
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        object.plural = message.plural;
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        object.singular = message.singular;
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
                 * History enum.
                 * @name google.api.ResourceDescriptor.History
                 * @enum {string}
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
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.childType != null && message.hasOwnProperty("childType"))
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
                        case 1:
                            message.type = reader.string();
                            break;
                        case 2:
                            message.childType = reader.string();
                            break;
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
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
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
                        case 1:
                            if (!(message.rules && message.rules.length))
                                message.rules = [];
                            message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.fullyDecodeReservedExpansion = reader.bool();
                            break;
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
                 * @member {string} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = "";
    
                /**
                 * HttpRule put.
                 * @member {string} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = "";
    
                /**
                 * HttpRule post.
                 * @member {string} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = "";
    
                /**
                 * HttpRule delete.
                 * @member {string} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = "";
    
                /**
                 * HttpRule patch.
                 * @member {string} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = "";
    
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
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && message.hasOwnProperty("get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && message.hasOwnProperty("put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && message.hasOwnProperty("post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && message.hasOwnProperty("patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && message.hasOwnProperty("body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && message.hasOwnProperty("custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
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
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.get = reader.string();
                            break;
                        case 3:
                            message.put = reader.string();
                            break;
                        case 4:
                            message.post = reader.string();
                            break;
                        case 5:
                            message["delete"] = reader.string();
                            break;
                        case 6:
                            message.patch = reader.string();
                            break;
                        case 8:
                            message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.body = reader.string();
                            break;
                        case 12:
                            message.responseBody = reader.string();
                            break;
                        case 11:
                            if (!(message.additionalBindings && message.additionalBindings.length))
                                message.additionalBindings = [];
                            message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
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
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && message.hasOwnProperty("path"))
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
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            message.path = reader.string();
                            break;
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
    
                return CustomHttpPattern;
            })();
    
            /**
             * FieldBehavior enum.
             * @name google.api.FieldBehavior
             * @enum {string}
             * @property {number} FIELD_BEHAVIOR_UNSPECIFIED=0 FIELD_BEHAVIOR_UNSPECIFIED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REQUIRED=2 REQUIRED value
             * @property {number} OUTPUT_ONLY=3 OUTPUT_ONLY value
             * @property {number} INPUT_ONLY=4 INPUT_ONLY value
             * @property {number} IMMUTABLE=5 IMMUTABLE value
             */
            api.FieldBehavior = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIELD_BEHAVIOR_UNSPECIFIED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REQUIRED"] = 2;
                values[valuesById[3] = "OUTPUT_ONLY"] = 3;
                values[valuesById[4] = "INPUT_ONLY"] = 4;
                values[valuesById[5] = "IMMUTABLE"] = 5;
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
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
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
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
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
                    if (message.options != null && message.hasOwnProperty("options"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
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
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && message.hasOwnProperty("options"))
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
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            case 3:
                                message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                break;
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
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
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
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
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
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
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
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
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
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
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
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
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
                 * @enum {string}
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && message.hasOwnProperty("options"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
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
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
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
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
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
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
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
                FileOptions.prototype.ccEnableArenas = false;
    
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
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
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
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.int32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 42:
                            message.phpGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 39:
                            message.swiftPrefix = reader.string();
                            break;
                        case 40:
                            message.phpClassPrefix = reader.string();
                            break;
                        case 41:
                            message.phpNamespace = reader.string();
                            break;
                        case 44:
                            message.phpMetadataNamespace = reader.string();
                            break;
                        case 45:
                            message.rubyPackage = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1053:
                            if (!(message[".google.api.resourceDefinition"] && message[".google.api.resourceDefinition"].length))
                                message[".google.api.resourceDefinition"] = [];
                            message[".google.api.resourceDefinition"].push($root.google.api.ResourceDescriptor.decode(reader, reader.uint32()));
                            break;
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
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                        object.phpClassPrefix = "";
                        object.phpNamespace = "";
                        object.phpGenericServices = false;
                        object.phpMetadataNamespace = "";
                        object.rubyPackage = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
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
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
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
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.resource"] != null && message.hasOwnProperty(".google.api.resource"))
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
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1053:
                            message[".google.api.resource"] = $root.google.api.ResourceDescriptor.decode(reader, reader.uint32());
                            break;
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
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 * @property {google.api.IResourceReference|null} [".google.api.resourceReference"] FieldOptions .google.api.resourceReference
                 * @property {Array.<google.api.FieldBehavior>|null} [".google.api.fieldBehavior"] FieldOptions .google.api.fieldBehavior
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
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FieldOptions .google.api.resourceReference.
                 * @member {google.api.IResourceReference|null|undefined} .google.api.resourceReference
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.resourceReference"] = null;
    
                /**
                 * FieldOptions .google.api.fieldBehavior.
                 * @member {Array.<google.api.FieldBehavior>} .google.api.fieldBehavior
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.fieldBehavior"] = $util.emptyArray;
    
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
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.fieldBehavior"] != null && message[".google.api.fieldBehavior"].length) {
                        writer.uint32(/* id 1052, wireType 2 =*/8418).fork();
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            writer.int32(message[".google.api.fieldBehavior"][i]);
                        writer.ldelim();
                    }
                    if (message[".google.api.resourceReference"] != null && message.hasOwnProperty(".google.api.resourceReference"))
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
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1055:
                            message[".google.api.resourceReference"] = $root.google.api.ResourceReference.decode(reader, reader.uint32());
                            break;
                        case 1052:
                            if (!(message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length))
                                message[".google.api.fieldBehavior"] = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message[".google.api.fieldBehavior"].push(reader.int32());
                            } else
                                message[".google.api.fieldBehavior"].push(reader.int32());
                            break;
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
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.resourceReference"] != null && message.hasOwnProperty(".google.api.resourceReference")) {
                        var error = $root.google.api.ResourceReference.verify(message[".google.api.resourceReference"]);
                        if (error)
                            return ".google.api.resourceReference." + error;
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
                                break;
                            }
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
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
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
                    if (object[".google.api.resourceReference"] != null) {
                        if (typeof object[".google.api.resourceReference"] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions..google.api.resourceReference: object expected");
                        message[".google.api.resourceReference"] = $root.google.api.ResourceReference.fromObject(object[".google.api.resourceReference"]);
                    }
                    if (object[".google.api.fieldBehavior"]) {
                        if (!Array.isArray(object[".google.api.fieldBehavior"]))
                            throw TypeError(".google.protobuf.FieldOptions..google.api.fieldBehavior: array expected");
                        message[".google.api.fieldBehavior"] = [];
                        for (var i = 0; i < object[".google.api.fieldBehavior"].length; ++i)
                            switch (object[".google.api.fieldBehavior"][i]) {
                            default:
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
                            }
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
                        object[".google.api.resourceReference"] = null;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length) {
                        object[".google.api.fieldBehavior"] = [];
                        for (var j = 0; j < message[".google.api.fieldBehavior"].length; ++j)
                            object[".google.api.fieldBehavior"][j] = options.enums === String ? $root.google.api.FieldBehavior[message[".google.api.fieldBehavior"][j]] : message[".google.api.fieldBehavior"][j];
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
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
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
                 * @enum {string}
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
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
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
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
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
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
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
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
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
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
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
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
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
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
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
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
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
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
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
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
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
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
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
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        writer.uint32(/* id 1049, wireType 2 =*/8394).string(message[".google.api.defaultHost"]);
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
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
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1049:
                            message[".google.api.defaultHost"] = reader.string();
                            break;
                        case 1050:
                            message[".google.api.oauthScopes"] = reader.string();
                            break;
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
                        object[".google.api.defaultHost"] = "";
                        object[".google.api.oauthScopes"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
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
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
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
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.methodSignature"] != null && message[".google.api.methodSignature"].length)
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            writer.uint32(/* id 1051, wireType 2 =*/8410).string(message[".google.api.methodSignature"][i]);
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
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
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 34:
                            message.idempotencyLevel = reader.int32();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 72295728:
                            message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                            break;
                        case 1051:
                            if (!(message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length))
                                message[".google.api.methodSignature"] = [];
                            message[".google.api.methodSignature"].push(reader.string());
                            break;
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
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
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
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {string}
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
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
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
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
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
                        else if (object.stringValue.length)
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
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
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
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
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
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
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
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
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
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
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
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
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
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
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
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
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
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
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
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
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
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
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
    
                return Duration;
            })();
    
            protobuf.Struct = (function() {
    
                /**
                 * Properties of a Struct.
                 * @memberof google.protobuf
                 * @interface IStruct
                 * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
                 */
    
                /**
                 * Constructs a new Struct.
                 * @memberof google.protobuf
                 * @classdesc Represents a Struct.
                 * @implements IStruct
                 * @constructor
                 * @param {google.protobuf.IStruct=} [properties] Properties to set
                 */
                function Struct(properties) {
                    this.fields = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Struct fields.
                 * @member {Object.<string,google.protobuf.IValue>} fields
                 * @memberof google.protobuf.Struct
                 * @instance
                 */
                Struct.prototype.fields = $util.emptyObject;
    
                /**
                 * Creates a new Struct instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.IStruct=} [properties] Properties to set
                 * @returns {google.protobuf.Struct} Struct instance
                 */
                Struct.create = function create(properties) {
                    return new Struct(properties);
                };
    
                /**
                 * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.IStruct} message Struct message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Struct.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fields != null && message.hasOwnProperty("fields"))
                        for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };
    
                /**
                 * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.IStruct} message Struct message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Struct.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Struct message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Struct} Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Struct.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            reader.skip().pos++;
                            if (message.fields === $util.emptyObject)
                                message.fields = {};
                            key = reader.string();
                            reader.pos++;
                            message.fields[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Struct message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Struct} Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Struct.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Struct message.
                 * @function verify
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Struct.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fields != null && message.hasOwnProperty("fields")) {
                        if (!$util.isObject(message.fields))
                            return "fields: object expected";
                        var key = Object.keys(message.fields);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                            if (error)
                                return "fields." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Struct message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Struct} Struct
                 */
                Struct.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Struct)
                        return object;
                    var message = new $root.google.protobuf.Struct();
                    if (object.fields) {
                        if (typeof object.fields !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields = {};
                        for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                            if (typeof object.fields[keys[i]] !== "object")
                                throw TypeError(".google.protobuf.Struct.fields: object expected");
                            message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Struct message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Struct
                 * @static
                 * @param {google.protobuf.Struct} message Struct
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Struct.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.fields = {};
                    var keys2;
                    if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                        object.fields = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Struct to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Struct
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Struct.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Struct;
            })();
    
            protobuf.Value = (function() {
    
                /**
                 * Properties of a Value.
                 * @memberof google.protobuf
                 * @interface IValue
                 * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
                 * @property {number|null} [numberValue] Value numberValue
                 * @property {string|null} [stringValue] Value stringValue
                 * @property {boolean|null} [boolValue] Value boolValue
                 * @property {google.protobuf.IStruct|null} [structValue] Value structValue
                 * @property {google.protobuf.IListValue|null} [listValue] Value listValue
                 */
    
                /**
                 * Constructs a new Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a Value.
                 * @implements IValue
                 * @constructor
                 * @param {google.protobuf.IValue=} [properties] Properties to set
                 */
                function Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Value nullValue.
                 * @member {google.protobuf.NullValue} nullValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.nullValue = 0;
    
                /**
                 * Value numberValue.
                 * @member {number} numberValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.numberValue = 0;
    
                /**
                 * Value stringValue.
                 * @member {string} stringValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.stringValue = "";
    
                /**
                 * Value boolValue.
                 * @member {boolean} boolValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.boolValue = false;
    
                /**
                 * Value structValue.
                 * @member {google.protobuf.IStruct|null|undefined} structValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.structValue = null;
    
                /**
                 * Value listValue.
                 * @member {google.protobuf.IListValue|null|undefined} listValue
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Value.prototype.listValue = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Value kind.
                 * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
                 * @memberof google.protobuf.Value
                 * @instance
                 */
                Object.defineProperty(Value.prototype, "kind", {
                    get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.IValue=} [properties] Properties to set
                 * @returns {google.protobuf.Value} Value instance
                 */
                Value.create = function create(properties) {
                    return new Value(properties);
                };
    
                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.IValue} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.nullValue != null && message.hasOwnProperty("nullValue"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                    if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                    if (message.structValue != null && message.hasOwnProperty("structValue"))
                        $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.listValue != null && message.hasOwnProperty("listValue"))
                        $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.IValue} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.nullValue = reader.int32();
                            break;
                        case 2:
                            message.numberValue = reader.double();
                            break;
                        case 3:
                            message.stringValue = reader.string();
                            break;
                        case 4:
                            message.boolValue = reader.bool();
                            break;
                        case 5:
                            message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Value message.
                 * @function verify
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                        properties.kind = 1;
                        switch (message.nullValue) {
                        default:
                            return "nullValue: enum value expected";
                        case 0:
                            break;
                        }
                    }
                    if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (typeof message.numberValue !== "number")
                            return "numberValue: number expected";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    }
                    if (message.structValue != null && message.hasOwnProperty("structValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        {
                            var error = $root.google.protobuf.Struct.verify(message.structValue);
                            if (error)
                                return "structValue." + error;
                        }
                    }
                    if (message.listValue != null && message.hasOwnProperty("listValue")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        {
                            var error = $root.google.protobuf.ListValue.verify(message.listValue);
                            if (error)
                                return "listValue." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Value} Value
                 */
                Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Value)
                        return object;
                    var message = new $root.google.protobuf.Value();
                    switch (object.nullValue) {
                    case "NULL_VALUE":
                    case 0:
                        message.nullValue = 0;
                        break;
                    }
                    if (object.numberValue != null)
                        message.numberValue = Number(object.numberValue);
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.structValue != null) {
                        if (typeof object.structValue !== "object")
                            throw TypeError(".google.protobuf.Value.structValue: object expected");
                        message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                    }
                    if (object.listValue != null) {
                        if (typeof object.listValue !== "object")
                            throw TypeError(".google.protobuf.Value.listValue: object expected");
                        message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Value
                 * @static
                 * @param {google.protobuf.Value} message Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                        object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                        if (options.oneofs)
                            object.kind = "nullValue";
                    }
                    if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                        object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                        if (options.oneofs)
                            object.kind = "numberValue";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        object.stringValue = message.stringValue;
                        if (options.oneofs)
                            object.kind = "stringValue";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        object.boolValue = message.boolValue;
                        if (options.oneofs)
                            object.kind = "boolValue";
                    }
                    if (message.structValue != null && message.hasOwnProperty("structValue")) {
                        object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                        if (options.oneofs)
                            object.kind = "structValue";
                    }
                    if (message.listValue != null && message.hasOwnProperty("listValue")) {
                        object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                        if (options.oneofs)
                            object.kind = "listValue";
                    }
                    return object;
                };
    
                /**
                 * Converts this Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Value;
            })();
    
            /**
             * NullValue enum.
             * @name google.protobuf.NullValue
             * @enum {string}
             * @property {number} NULL_VALUE=0 NULL_VALUE value
             */
            protobuf.NullValue = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NULL_VALUE"] = 0;
                return values;
            })();
    
            protobuf.ListValue = (function() {
    
                /**
                 * Properties of a ListValue.
                 * @memberof google.protobuf
                 * @interface IListValue
                 * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
                 */
    
                /**
                 * Constructs a new ListValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a ListValue.
                 * @implements IListValue
                 * @constructor
                 * @param {google.protobuf.IListValue=} [properties] Properties to set
                 */
                function ListValue(properties) {
                    this.values = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ListValue values.
                 * @member {Array.<google.protobuf.IValue>} values
                 * @memberof google.protobuf.ListValue
                 * @instance
                 */
                ListValue.prototype.values = $util.emptyArray;
    
                /**
                 * Creates a new ListValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.IListValue=} [properties] Properties to set
                 * @returns {google.protobuf.ListValue} ListValue instance
                 */
                ListValue.create = function create(properties) {
                    return new ListValue(properties);
                };
    
                /**
                 * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.values != null && message.values.length)
                        for (var i = 0; i < message.values.length; ++i)
                            $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ListValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ListValue} ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ListValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ListValue} ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ListValue message.
                 * @function verify
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.values != null && message.hasOwnProperty("values")) {
                        if (!Array.isArray(message.values))
                            return "values: array expected";
                        for (var i = 0; i < message.values.length; ++i) {
                            var error = $root.google.protobuf.Value.verify(message.values[i]);
                            if (error)
                                return "values." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ListValue} ListValue
                 */
                ListValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ListValue)
                        return object;
                    var message = new $root.google.protobuf.ListValue();
                    if (object.values) {
                        if (!Array.isArray(object.values))
                            throw TypeError(".google.protobuf.ListValue.values: array expected");
                        message.values = [];
                        for (var i = 0; i < object.values.length; ++i) {
                            if (typeof object.values[i] !== "object")
                                throw TypeError(".google.protobuf.ListValue.values: object expected");
                            message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ListValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ListValue
                 * @static
                 * @param {google.protobuf.ListValue} message ListValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.values = [];
                    if (message.values && message.values.length) {
                        object.values = [];
                        for (var j = 0; j < message.values.length; ++j)
                            object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ListValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ListValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ListValue;
            })();
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
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
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
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
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
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
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        google.type = (function() {
    
            /**
             * Namespace type.
             * @memberof google
             * @namespace
             */
            var type = {};
    
            type.Money = (function() {
    
                /**
                 * Properties of a Money.
                 * @memberof google.type
                 * @interface IMoney
                 * @property {string|null} [currencyCode] Money currencyCode
                 * @property {number|Long|null} [units] Money units
                 * @property {number|null} [nanos] Money nanos
                 */
    
                /**
                 * Constructs a new Money.
                 * @memberof google.type
                 * @classdesc Represents a Money.
                 * @implements IMoney
                 * @constructor
                 * @param {google.type.IMoney=} [properties] Properties to set
                 */
                function Money(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Money currencyCode.
                 * @member {string} currencyCode
                 * @memberof google.type.Money
                 * @instance
                 */
                Money.prototype.currencyCode = "";
    
                /**
                 * Money units.
                 * @member {number|Long} units
                 * @memberof google.type.Money
                 * @instance
                 */
                Money.prototype.units = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Money nanos.
                 * @member {number} nanos
                 * @memberof google.type.Money
                 * @instance
                 */
                Money.prototype.nanos = 0;
    
                /**
                 * Creates a new Money instance using the specified properties.
                 * @function create
                 * @memberof google.type.Money
                 * @static
                 * @param {google.type.IMoney=} [properties] Properties to set
                 * @returns {google.type.Money} Money instance
                 */
                Money.create = function create(properties) {
                    return new Money(properties);
                };
    
                /**
                 * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
                 * @function encode
                 * @memberof google.type.Money
                 * @static
                 * @param {google.type.IMoney} message Money message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Money.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.currencyCode);
                    if (message.units != null && message.hasOwnProperty("units"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.units);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.type.Money
                 * @static
                 * @param {google.type.IMoney} message Money message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Money.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Money message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.type.Money
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.type.Money} Money
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Money.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.type.Money();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.currencyCode = reader.string();
                            break;
                        case 2:
                            message.units = reader.int64();
                            break;
                        case 3:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Money message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.type.Money
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.type.Money} Money
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Money.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Money message.
                 * @function verify
                 * @memberof google.type.Money
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Money.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                        if (!$util.isString(message.currencyCode))
                            return "currencyCode: string expected";
                    if (message.units != null && message.hasOwnProperty("units"))
                        if (!$util.isInteger(message.units) && !(message.units && $util.isInteger(message.units.low) && $util.isInteger(message.units.high)))
                            return "units: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Money message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.type.Money
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.type.Money} Money
                 */
                Money.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.type.Money)
                        return object;
                    var message = new $root.google.type.Money();
                    if (object.currencyCode != null)
                        message.currencyCode = String(object.currencyCode);
                    if (object.units != null)
                        if ($util.Long)
                            (message.units = $util.Long.fromValue(object.units)).unsigned = false;
                        else if (typeof object.units === "string")
                            message.units = parseInt(object.units, 10);
                        else if (typeof object.units === "number")
                            message.units = object.units;
                        else if (typeof object.units === "object")
                            message.units = new $util.LongBits(object.units.low >>> 0, object.units.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Money message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.type.Money
                 * @static
                 * @param {google.type.Money} message Money
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Money.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.currencyCode = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.units = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.units = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.currencyCode != null && message.hasOwnProperty("currencyCode"))
                        object.currencyCode = message.currencyCode;
                    if (message.units != null && message.hasOwnProperty("units"))
                        if (typeof message.units === "number")
                            object.units = options.longs === String ? String(message.units) : message.units;
                        else
                            object.units = options.longs === String ? $util.Long.prototype.toString.call(message.units) : options.longs === Number ? new $util.LongBits(message.units.low >>> 0, message.units.high >>> 0).toNumber() : message.units;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Money to JSON.
                 * @function toJSON
                 * @memberof google.type.Money
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Money.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Money;
            })();
    
            return type;
        })();
    
        return google;
    })();

    return $root;
});
