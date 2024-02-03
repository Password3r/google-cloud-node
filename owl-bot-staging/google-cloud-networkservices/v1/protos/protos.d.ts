// Copyright 2024 Google LLC
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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace networkservices. */
        namespace networkservices {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IOperationMetadata): google.cloud.networkservices.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networkservices.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TrafficPortSelector. */
                interface ITrafficPortSelector {

                    /** TrafficPortSelector ports */
                    ports?: (string[]|null);
                }

                /** Represents a TrafficPortSelector. */
                class TrafficPortSelector implements ITrafficPortSelector {

                    /**
                     * Constructs a new TrafficPortSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ITrafficPortSelector);

                    /** TrafficPortSelector ports. */
                    public ports: string[];

                    /**
                     * Creates a new TrafficPortSelector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TrafficPortSelector instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ITrafficPortSelector): google.cloud.networkservices.v1.TrafficPortSelector;

                    /**
                     * Encodes the specified TrafficPortSelector message. Does not implicitly {@link google.cloud.networkservices.v1.TrafficPortSelector.verify|verify} messages.
                     * @param message TrafficPortSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ITrafficPortSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TrafficPortSelector message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TrafficPortSelector.verify|verify} messages.
                     * @param message TrafficPortSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ITrafficPortSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TrafficPortSelector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TrafficPortSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TrafficPortSelector;

                    /**
                     * Decodes a TrafficPortSelector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TrafficPortSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TrafficPortSelector;

                    /**
                     * Verifies a TrafficPortSelector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TrafficPortSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TrafficPortSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TrafficPortSelector;

                    /**
                     * Creates a plain object from a TrafficPortSelector message. Also converts values to other types if specified.
                     * @param message TrafficPortSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.TrafficPortSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TrafficPortSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TrafficPortSelector
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EndpointMatcher. */
                interface IEndpointMatcher {

                    /** EndpointMatcher metadataLabelMatcher */
                    metadataLabelMatcher?: (google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher|null);
                }

                /** Represents an EndpointMatcher. */
                class EndpointMatcher implements IEndpointMatcher {

                    /**
                     * Constructs a new EndpointMatcher.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IEndpointMatcher);

                    /** EndpointMatcher metadataLabelMatcher. */
                    public metadataLabelMatcher?: (google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher|null);

                    /** EndpointMatcher matcherType. */
                    public matcherType?: "metadataLabelMatcher";

                    /**
                     * Creates a new EndpointMatcher instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointMatcher instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IEndpointMatcher): google.cloud.networkservices.v1.EndpointMatcher;

                    /**
                     * Encodes the specified EndpointMatcher message. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.verify|verify} messages.
                     * @param message EndpointMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IEndpointMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointMatcher message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.verify|verify} messages.
                     * @param message EndpointMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IEndpointMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointMatcher message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.EndpointMatcher;

                    /**
                     * Decodes an EndpointMatcher message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.EndpointMatcher;

                    /**
                     * Verifies an EndpointMatcher message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointMatcher message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointMatcher
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.EndpointMatcher;

                    /**
                     * Creates a plain object from an EndpointMatcher message. Also converts values to other types if specified.
                     * @param message EndpointMatcher
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.EndpointMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointMatcher to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EndpointMatcher
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EndpointMatcher {

                    /** Properties of a MetadataLabelMatcher. */
                    interface IMetadataLabelMatcher {

                        /** MetadataLabelMatcher metadataLabelMatchCriteria */
                        metadataLabelMatchCriteria?: (google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabelMatchCriteria|keyof typeof google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabelMatchCriteria|null);

                        /** MetadataLabelMatcher metadataLabels */
                        metadataLabels?: (google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels[]|null);
                    }

                    /** Represents a MetadataLabelMatcher. */
                    class MetadataLabelMatcher implements IMetadataLabelMatcher {

                        /**
                         * Constructs a new MetadataLabelMatcher.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher);

                        /** MetadataLabelMatcher metadataLabelMatchCriteria. */
                        public metadataLabelMatchCriteria: (google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabelMatchCriteria|keyof typeof google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabelMatchCriteria);

                        /** MetadataLabelMatcher metadataLabels. */
                        public metadataLabels: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels[];

                        /**
                         * Creates a new MetadataLabelMatcher instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetadataLabelMatcher instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher;

                        /**
                         * Encodes the specified MetadataLabelMatcher message. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.verify|verify} messages.
                         * @param message MetadataLabelMatcher message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetadataLabelMatcher message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.verify|verify} messages.
                         * @param message MetadataLabelMatcher message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.EndpointMatcher.IMetadataLabelMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetadataLabelMatcher message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetadataLabelMatcher
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher;

                        /**
                         * Decodes a MetadataLabelMatcher message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetadataLabelMatcher
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher;

                        /**
                         * Verifies a MetadataLabelMatcher message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetadataLabelMatcher message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetadataLabelMatcher
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher;

                        /**
                         * Creates a plain object from a MetadataLabelMatcher message. Also converts values to other types if specified.
                         * @param message MetadataLabelMatcher
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetadataLabelMatcher to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MetadataLabelMatcher
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MetadataLabelMatcher {

                        /** Properties of a MetadataLabels. */
                        interface IMetadataLabels {

                            /** MetadataLabels labelName */
                            labelName?: (string|null);

                            /** MetadataLabels labelValue */
                            labelValue?: (string|null);
                        }

                        /** Represents a MetadataLabels. */
                        class MetadataLabels implements IMetadataLabels {

                            /**
                             * Constructs a new MetadataLabels.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels);

                            /** MetadataLabels labelName. */
                            public labelName: string;

                            /** MetadataLabels labelValue. */
                            public labelValue: string;

                            /**
                             * Creates a new MetadataLabels instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MetadataLabels instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels;

                            /**
                             * Encodes the specified MetadataLabels message. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels.verify|verify} messages.
                             * @param message MetadataLabels message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MetadataLabels message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels.verify|verify} messages.
                             * @param message MetadataLabels message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.IMetadataLabels, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MetadataLabels message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MetadataLabels
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels;

                            /**
                             * Decodes a MetadataLabels message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MetadataLabels
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels;

                            /**
                             * Verifies a MetadataLabels message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MetadataLabels message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MetadataLabels
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels;

                            /**
                             * Creates a plain object from a MetadataLabels message. Also converts values to other types if specified.
                             * @param message MetadataLabels
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.EndpointMatcher.MetadataLabelMatcher.MetadataLabels, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MetadataLabels to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MetadataLabels
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** MetadataLabelMatchCriteria enum. */
                        enum MetadataLabelMatchCriteria {
                            METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = 0,
                            MATCH_ANY = 1,
                            MATCH_ALL = 2
                        }
                    }
                }

                /** Properties of an EndpointPolicy. */
                interface IEndpointPolicy {

                    /** EndpointPolicy name */
                    name?: (string|null);

                    /** EndpointPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** EndpointPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** EndpointPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** EndpointPolicy type */
                    type?: (google.cloud.networkservices.v1.EndpointPolicy.EndpointPolicyType|keyof typeof google.cloud.networkservices.v1.EndpointPolicy.EndpointPolicyType|null);

                    /** EndpointPolicy authorizationPolicy */
                    authorizationPolicy?: (string|null);

                    /** EndpointPolicy endpointMatcher */
                    endpointMatcher?: (google.cloud.networkservices.v1.IEndpointMatcher|null);

                    /** EndpointPolicy trafficPortSelector */
                    trafficPortSelector?: (google.cloud.networkservices.v1.ITrafficPortSelector|null);

                    /** EndpointPolicy description */
                    description?: (string|null);

                    /** EndpointPolicy serverTlsPolicy */
                    serverTlsPolicy?: (string|null);

                    /** EndpointPolicy clientTlsPolicy */
                    clientTlsPolicy?: (string|null);
                }

                /** Represents an EndpointPolicy. */
                class EndpointPolicy implements IEndpointPolicy {

                    /**
                     * Constructs a new EndpointPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IEndpointPolicy);

                    /** EndpointPolicy name. */
                    public name: string;

                    /** EndpointPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** EndpointPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** EndpointPolicy labels. */
                    public labels: { [k: string]: string };

                    /** EndpointPolicy type. */
                    public type: (google.cloud.networkservices.v1.EndpointPolicy.EndpointPolicyType|keyof typeof google.cloud.networkservices.v1.EndpointPolicy.EndpointPolicyType);

                    /** EndpointPolicy authorizationPolicy. */
                    public authorizationPolicy: string;

                    /** EndpointPolicy endpointMatcher. */
                    public endpointMatcher?: (google.cloud.networkservices.v1.IEndpointMatcher|null);

                    /** EndpointPolicy trafficPortSelector. */
                    public trafficPortSelector?: (google.cloud.networkservices.v1.ITrafficPortSelector|null);

                    /** EndpointPolicy description. */
                    public description: string;

                    /** EndpointPolicy serverTlsPolicy. */
                    public serverTlsPolicy: string;

                    /** EndpointPolicy clientTlsPolicy. */
                    public clientTlsPolicy: string;

                    /**
                     * Creates a new EndpointPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointPolicy instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IEndpointPolicy): google.cloud.networkservices.v1.EndpointPolicy;

                    /**
                     * Encodes the specified EndpointPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.EndpointPolicy.verify|verify} messages.
                     * @param message EndpointPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IEndpointPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.EndpointPolicy.verify|verify} messages.
                     * @param message EndpointPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IEndpointPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.EndpointPolicy;

                    /**
                     * Decodes an EndpointPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.EndpointPolicy;

                    /**
                     * Verifies an EndpointPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.EndpointPolicy;

                    /**
                     * Creates a plain object from an EndpointPolicy message. Also converts values to other types if specified.
                     * @param message EndpointPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.EndpointPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EndpointPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EndpointPolicy {

                    /** EndpointPolicyType enum. */
                    enum EndpointPolicyType {
                        ENDPOINT_POLICY_TYPE_UNSPECIFIED = 0,
                        SIDECAR_PROXY = 1,
                        GRPC_SERVER = 2
                    }
                }

                /** Properties of a ListEndpointPoliciesRequest. */
                interface IListEndpointPoliciesRequest {

                    /** ListEndpointPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListEndpointPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEndpointPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEndpointPoliciesRequest. */
                class ListEndpointPoliciesRequest implements IListEndpointPoliciesRequest {

                    /**
                     * Constructs a new ListEndpointPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListEndpointPoliciesRequest);

                    /** ListEndpointPoliciesRequest parent. */
                    public parent: string;

                    /** ListEndpointPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListEndpointPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEndpointPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEndpointPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListEndpointPoliciesRequest): google.cloud.networkservices.v1.ListEndpointPoliciesRequest;

                    /**
                     * Encodes the specified ListEndpointPoliciesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListEndpointPoliciesRequest.verify|verify} messages.
                     * @param message ListEndpointPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListEndpointPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEndpointPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListEndpointPoliciesRequest.verify|verify} messages.
                     * @param message ListEndpointPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListEndpointPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEndpointPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEndpointPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListEndpointPoliciesRequest;

                    /**
                     * Decodes a ListEndpointPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEndpointPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListEndpointPoliciesRequest;

                    /**
                     * Verifies a ListEndpointPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEndpointPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEndpointPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListEndpointPoliciesRequest;

                    /**
                     * Creates a plain object from a ListEndpointPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListEndpointPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListEndpointPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEndpointPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEndpointPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEndpointPoliciesResponse. */
                interface IListEndpointPoliciesResponse {

                    /** ListEndpointPoliciesResponse endpointPolicies */
                    endpointPolicies?: (google.cloud.networkservices.v1.IEndpointPolicy[]|null);

                    /** ListEndpointPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEndpointPoliciesResponse. */
                class ListEndpointPoliciesResponse implements IListEndpointPoliciesResponse {

                    /**
                     * Constructs a new ListEndpointPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListEndpointPoliciesResponse);

                    /** ListEndpointPoliciesResponse endpointPolicies. */
                    public endpointPolicies: google.cloud.networkservices.v1.IEndpointPolicy[];

                    /** ListEndpointPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEndpointPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEndpointPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListEndpointPoliciesResponse): google.cloud.networkservices.v1.ListEndpointPoliciesResponse;

                    /**
                     * Encodes the specified ListEndpointPoliciesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListEndpointPoliciesResponse.verify|verify} messages.
                     * @param message ListEndpointPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListEndpointPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEndpointPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListEndpointPoliciesResponse.verify|verify} messages.
                     * @param message ListEndpointPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListEndpointPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEndpointPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEndpointPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListEndpointPoliciesResponse;

                    /**
                     * Decodes a ListEndpointPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEndpointPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListEndpointPoliciesResponse;

                    /**
                     * Verifies a ListEndpointPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEndpointPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEndpointPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListEndpointPoliciesResponse;

                    /**
                     * Creates a plain object from a ListEndpointPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListEndpointPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListEndpointPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEndpointPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEndpointPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEndpointPolicyRequest. */
                interface IGetEndpointPolicyRequest {

                    /** GetEndpointPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEndpointPolicyRequest. */
                class GetEndpointPolicyRequest implements IGetEndpointPolicyRequest {

                    /**
                     * Constructs a new GetEndpointPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetEndpointPolicyRequest);

                    /** GetEndpointPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEndpointPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEndpointPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetEndpointPolicyRequest): google.cloud.networkservices.v1.GetEndpointPolicyRequest;

                    /**
                     * Encodes the specified GetEndpointPolicyRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetEndpointPolicyRequest.verify|verify} messages.
                     * @param message GetEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEndpointPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetEndpointPolicyRequest.verify|verify} messages.
                     * @param message GetEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEndpointPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetEndpointPolicyRequest;

                    /**
                     * Decodes a GetEndpointPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetEndpointPolicyRequest;

                    /**
                     * Verifies a GetEndpointPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEndpointPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEndpointPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetEndpointPolicyRequest;

                    /**
                     * Creates a plain object from a GetEndpointPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetEndpointPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetEndpointPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEndpointPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEndpointPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEndpointPolicyRequest. */
                interface ICreateEndpointPolicyRequest {

                    /** CreateEndpointPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateEndpointPolicyRequest endpointPolicyId */
                    endpointPolicyId?: (string|null);

                    /** CreateEndpointPolicyRequest endpointPolicy */
                    endpointPolicy?: (google.cloud.networkservices.v1.IEndpointPolicy|null);
                }

                /** Represents a CreateEndpointPolicyRequest. */
                class CreateEndpointPolicyRequest implements ICreateEndpointPolicyRequest {

                    /**
                     * Constructs a new CreateEndpointPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest);

                    /** CreateEndpointPolicyRequest parent. */
                    public parent: string;

                    /** CreateEndpointPolicyRequest endpointPolicyId. */
                    public endpointPolicyId: string;

                    /** CreateEndpointPolicyRequest endpointPolicy. */
                    public endpointPolicy?: (google.cloud.networkservices.v1.IEndpointPolicy|null);

                    /**
                     * Creates a new CreateEndpointPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEndpointPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest): google.cloud.networkservices.v1.CreateEndpointPolicyRequest;

                    /**
                     * Encodes the specified CreateEndpointPolicyRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateEndpointPolicyRequest.verify|verify} messages.
                     * @param message CreateEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEndpointPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateEndpointPolicyRequest.verify|verify} messages.
                     * @param message CreateEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEndpointPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateEndpointPolicyRequest;

                    /**
                     * Decodes a CreateEndpointPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateEndpointPolicyRequest;

                    /**
                     * Verifies a CreateEndpointPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEndpointPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEndpointPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateEndpointPolicyRequest;

                    /**
                     * Creates a plain object from a CreateEndpointPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateEndpointPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateEndpointPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEndpointPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEndpointPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEndpointPolicyRequest. */
                interface IUpdateEndpointPolicyRequest {

                    /** UpdateEndpointPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEndpointPolicyRequest endpointPolicy */
                    endpointPolicy?: (google.cloud.networkservices.v1.IEndpointPolicy|null);
                }

                /** Represents an UpdateEndpointPolicyRequest. */
                class UpdateEndpointPolicyRequest implements IUpdateEndpointPolicyRequest {

                    /**
                     * Constructs a new UpdateEndpointPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest);

                    /** UpdateEndpointPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEndpointPolicyRequest endpointPolicy. */
                    public endpointPolicy?: (google.cloud.networkservices.v1.IEndpointPolicy|null);

                    /**
                     * Creates a new UpdateEndpointPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEndpointPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest): google.cloud.networkservices.v1.UpdateEndpointPolicyRequest;

                    /**
                     * Encodes the specified UpdateEndpointPolicyRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateEndpointPolicyRequest.verify|verify} messages.
                     * @param message UpdateEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEndpointPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateEndpointPolicyRequest.verify|verify} messages.
                     * @param message UpdateEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEndpointPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateEndpointPolicyRequest;

                    /**
                     * Decodes an UpdateEndpointPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateEndpointPolicyRequest;

                    /**
                     * Verifies an UpdateEndpointPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEndpointPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEndpointPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateEndpointPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateEndpointPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateEndpointPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateEndpointPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEndpointPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEndpointPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEndpointPolicyRequest. */
                interface IDeleteEndpointPolicyRequest {

                    /** DeleteEndpointPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteEndpointPolicyRequest. */
                class DeleteEndpointPolicyRequest implements IDeleteEndpointPolicyRequest {

                    /**
                     * Constructs a new DeleteEndpointPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest);

                    /** DeleteEndpointPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteEndpointPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEndpointPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest): google.cloud.networkservices.v1.DeleteEndpointPolicyRequest;

                    /**
                     * Encodes the specified DeleteEndpointPolicyRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteEndpointPolicyRequest.verify|verify} messages.
                     * @param message DeleteEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEndpointPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteEndpointPolicyRequest.verify|verify} messages.
                     * @param message DeleteEndpointPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEndpointPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteEndpointPolicyRequest;

                    /**
                     * Decodes a DeleteEndpointPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEndpointPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteEndpointPolicyRequest;

                    /**
                     * Verifies a DeleteEndpointPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEndpointPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEndpointPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteEndpointPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteEndpointPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteEndpointPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteEndpointPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEndpointPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEndpointPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Gateway. */
                interface IGateway {

                    /** Gateway name */
                    name?: (string|null);

                    /** Gateway selfLink */
                    selfLink?: (string|null);

                    /** Gateway createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Gateway updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Gateway labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Gateway description */
                    description?: (string|null);

                    /** Gateway type */
                    type?: (google.cloud.networkservices.v1.Gateway.Type|keyof typeof google.cloud.networkservices.v1.Gateway.Type|null);

                    /** Gateway ports */
                    ports?: (number[]|null);

                    /** Gateway scope */
                    scope?: (string|null);

                    /** Gateway serverTlsPolicy */
                    serverTlsPolicy?: (string|null);
                }

                /** Represents a Gateway. */
                class Gateway implements IGateway {

                    /**
                     * Constructs a new Gateway.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGateway);

                    /** Gateway name. */
                    public name: string;

                    /** Gateway selfLink. */
                    public selfLink: string;

                    /** Gateway createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Gateway updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Gateway labels. */
                    public labels: { [k: string]: string };

                    /** Gateway description. */
                    public description: string;

                    /** Gateway type. */
                    public type: (google.cloud.networkservices.v1.Gateway.Type|keyof typeof google.cloud.networkservices.v1.Gateway.Type);

                    /** Gateway ports. */
                    public ports: number[];

                    /** Gateway scope. */
                    public scope: string;

                    /** Gateway serverTlsPolicy. */
                    public serverTlsPolicy: string;

                    /**
                     * Creates a new Gateway instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Gateway instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGateway): google.cloud.networkservices.v1.Gateway;

                    /**
                     * Encodes the specified Gateway message. Does not implicitly {@link google.cloud.networkservices.v1.Gateway.verify|verify} messages.
                     * @param message Gateway message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGateway, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Gateway message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.Gateway.verify|verify} messages.
                     * @param message Gateway message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGateway, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Gateway message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Gateway
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.Gateway;

                    /**
                     * Decodes a Gateway message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Gateway
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.Gateway;

                    /**
                     * Verifies a Gateway message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Gateway message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Gateway
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.Gateway;

                    /**
                     * Creates a plain object from a Gateway message. Also converts values to other types if specified.
                     * @param message Gateway
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.Gateway, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Gateway to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Gateway
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Gateway {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        OPEN_MESH = 1,
                        SECURE_WEB_GATEWAY = 2
                    }
                }

                /** Properties of a ListGatewaysRequest. */
                interface IListGatewaysRequest {

                    /** ListGatewaysRequest parent */
                    parent?: (string|null);

                    /** ListGatewaysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGatewaysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGatewaysRequest. */
                class ListGatewaysRequest implements IListGatewaysRequest {

                    /**
                     * Constructs a new ListGatewaysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListGatewaysRequest);

                    /** ListGatewaysRequest parent. */
                    public parent: string;

                    /** ListGatewaysRequest pageSize. */
                    public pageSize: number;

                    /** ListGatewaysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGatewaysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGatewaysRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListGatewaysRequest): google.cloud.networkservices.v1.ListGatewaysRequest;

                    /**
                     * Encodes the specified ListGatewaysRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListGatewaysRequest.verify|verify} messages.
                     * @param message ListGatewaysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListGatewaysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGatewaysRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListGatewaysRequest.verify|verify} messages.
                     * @param message ListGatewaysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListGatewaysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGatewaysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGatewaysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListGatewaysRequest;

                    /**
                     * Decodes a ListGatewaysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGatewaysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListGatewaysRequest;

                    /**
                     * Verifies a ListGatewaysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGatewaysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGatewaysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListGatewaysRequest;

                    /**
                     * Creates a plain object from a ListGatewaysRequest message. Also converts values to other types if specified.
                     * @param message ListGatewaysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListGatewaysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGatewaysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGatewaysRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGatewaysResponse. */
                interface IListGatewaysResponse {

                    /** ListGatewaysResponse gateways */
                    gateways?: (google.cloud.networkservices.v1.IGateway[]|null);

                    /** ListGatewaysResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGatewaysResponse. */
                class ListGatewaysResponse implements IListGatewaysResponse {

                    /**
                     * Constructs a new ListGatewaysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListGatewaysResponse);

                    /** ListGatewaysResponse gateways. */
                    public gateways: google.cloud.networkservices.v1.IGateway[];

                    /** ListGatewaysResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGatewaysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGatewaysResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListGatewaysResponse): google.cloud.networkservices.v1.ListGatewaysResponse;

                    /**
                     * Encodes the specified ListGatewaysResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListGatewaysResponse.verify|verify} messages.
                     * @param message ListGatewaysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListGatewaysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGatewaysResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListGatewaysResponse.verify|verify} messages.
                     * @param message ListGatewaysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListGatewaysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGatewaysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGatewaysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListGatewaysResponse;

                    /**
                     * Decodes a ListGatewaysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGatewaysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListGatewaysResponse;

                    /**
                     * Verifies a ListGatewaysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGatewaysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGatewaysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListGatewaysResponse;

                    /**
                     * Creates a plain object from a ListGatewaysResponse message. Also converts values to other types if specified.
                     * @param message ListGatewaysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListGatewaysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGatewaysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGatewaysResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGatewayRequest. */
                interface IGetGatewayRequest {

                    /** GetGatewayRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGatewayRequest. */
                class GetGatewayRequest implements IGetGatewayRequest {

                    /**
                     * Constructs a new GetGatewayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetGatewayRequest);

                    /** GetGatewayRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGatewayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGatewayRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetGatewayRequest): google.cloud.networkservices.v1.GetGatewayRequest;

                    /**
                     * Encodes the specified GetGatewayRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetGatewayRequest.verify|verify} messages.
                     * @param message GetGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGatewayRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetGatewayRequest.verify|verify} messages.
                     * @param message GetGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGatewayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetGatewayRequest;

                    /**
                     * Decodes a GetGatewayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetGatewayRequest;

                    /**
                     * Verifies a GetGatewayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGatewayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGatewayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetGatewayRequest;

                    /**
                     * Creates a plain object from a GetGatewayRequest message. Also converts values to other types if specified.
                     * @param message GetGatewayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetGatewayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGatewayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGatewayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateGatewayRequest. */
                interface ICreateGatewayRequest {

                    /** CreateGatewayRequest parent */
                    parent?: (string|null);

                    /** CreateGatewayRequest gatewayId */
                    gatewayId?: (string|null);

                    /** CreateGatewayRequest gateway */
                    gateway?: (google.cloud.networkservices.v1.IGateway|null);
                }

                /** Represents a CreateGatewayRequest. */
                class CreateGatewayRequest implements ICreateGatewayRequest {

                    /**
                     * Constructs a new CreateGatewayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateGatewayRequest);

                    /** CreateGatewayRequest parent. */
                    public parent: string;

                    /** CreateGatewayRequest gatewayId. */
                    public gatewayId: string;

                    /** CreateGatewayRequest gateway. */
                    public gateway?: (google.cloud.networkservices.v1.IGateway|null);

                    /**
                     * Creates a new CreateGatewayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGatewayRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateGatewayRequest): google.cloud.networkservices.v1.CreateGatewayRequest;

                    /**
                     * Encodes the specified CreateGatewayRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateGatewayRequest.verify|verify} messages.
                     * @param message CreateGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGatewayRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateGatewayRequest.verify|verify} messages.
                     * @param message CreateGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGatewayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateGatewayRequest;

                    /**
                     * Decodes a CreateGatewayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateGatewayRequest;

                    /**
                     * Verifies a CreateGatewayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGatewayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGatewayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateGatewayRequest;

                    /**
                     * Creates a plain object from a CreateGatewayRequest message. Also converts values to other types if specified.
                     * @param message CreateGatewayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateGatewayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGatewayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateGatewayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGatewayRequest. */
                interface IUpdateGatewayRequest {

                    /** UpdateGatewayRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGatewayRequest gateway */
                    gateway?: (google.cloud.networkservices.v1.IGateway|null);
                }

                /** Represents an UpdateGatewayRequest. */
                class UpdateGatewayRequest implements IUpdateGatewayRequest {

                    /**
                     * Constructs a new UpdateGatewayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateGatewayRequest);

                    /** UpdateGatewayRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGatewayRequest gateway. */
                    public gateway?: (google.cloud.networkservices.v1.IGateway|null);

                    /**
                     * Creates a new UpdateGatewayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGatewayRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateGatewayRequest): google.cloud.networkservices.v1.UpdateGatewayRequest;

                    /**
                     * Encodes the specified UpdateGatewayRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateGatewayRequest.verify|verify} messages.
                     * @param message UpdateGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGatewayRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateGatewayRequest.verify|verify} messages.
                     * @param message UpdateGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGatewayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateGatewayRequest;

                    /**
                     * Decodes an UpdateGatewayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateGatewayRequest;

                    /**
                     * Verifies an UpdateGatewayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGatewayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGatewayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateGatewayRequest;

                    /**
                     * Creates a plain object from an UpdateGatewayRequest message. Also converts values to other types if specified.
                     * @param message UpdateGatewayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateGatewayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGatewayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGatewayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteGatewayRequest. */
                interface IDeleteGatewayRequest {

                    /** DeleteGatewayRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGatewayRequest. */
                class DeleteGatewayRequest implements IDeleteGatewayRequest {

                    /**
                     * Constructs a new DeleteGatewayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteGatewayRequest);

                    /** DeleteGatewayRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGatewayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGatewayRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteGatewayRequest): google.cloud.networkservices.v1.DeleteGatewayRequest;

                    /**
                     * Encodes the specified DeleteGatewayRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteGatewayRequest.verify|verify} messages.
                     * @param message DeleteGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGatewayRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteGatewayRequest.verify|verify} messages.
                     * @param message DeleteGatewayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGatewayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteGatewayRequest;

                    /**
                     * Decodes a DeleteGatewayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGatewayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteGatewayRequest;

                    /**
                     * Verifies a DeleteGatewayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGatewayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGatewayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteGatewayRequest;

                    /**
                     * Creates a plain object from a DeleteGatewayRequest message. Also converts values to other types if specified.
                     * @param message DeleteGatewayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteGatewayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGatewayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteGatewayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GrpcRoute. */
                interface IGrpcRoute {

                    /** GrpcRoute name */
                    name?: (string|null);

                    /** GrpcRoute selfLink */
                    selfLink?: (string|null);

                    /** GrpcRoute createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GrpcRoute updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GrpcRoute labels */
                    labels?: ({ [k: string]: string }|null);

                    /** GrpcRoute description */
                    description?: (string|null);

                    /** GrpcRoute hostnames */
                    hostnames?: (string[]|null);

                    /** GrpcRoute meshes */
                    meshes?: (string[]|null);

                    /** GrpcRoute gateways */
                    gateways?: (string[]|null);

                    /** GrpcRoute rules */
                    rules?: (google.cloud.networkservices.v1.GrpcRoute.IRouteRule[]|null);
                }

                /** Represents a GrpcRoute. */
                class GrpcRoute implements IGrpcRoute {

                    /**
                     * Constructs a new GrpcRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGrpcRoute);

                    /** GrpcRoute name. */
                    public name: string;

                    /** GrpcRoute selfLink. */
                    public selfLink: string;

                    /** GrpcRoute createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GrpcRoute updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GrpcRoute labels. */
                    public labels: { [k: string]: string };

                    /** GrpcRoute description. */
                    public description: string;

                    /** GrpcRoute hostnames. */
                    public hostnames: string[];

                    /** GrpcRoute meshes. */
                    public meshes: string[];

                    /** GrpcRoute gateways. */
                    public gateways: string[];

                    /** GrpcRoute rules. */
                    public rules: google.cloud.networkservices.v1.GrpcRoute.IRouteRule[];

                    /**
                     * Creates a new GrpcRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GrpcRoute instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGrpcRoute): google.cloud.networkservices.v1.GrpcRoute;

                    /**
                     * Encodes the specified GrpcRoute message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.verify|verify} messages.
                     * @param message GrpcRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGrpcRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GrpcRoute message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.verify|verify} messages.
                     * @param message GrpcRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGrpcRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GrpcRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GrpcRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute;

                    /**
                     * Decodes a GrpcRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GrpcRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute;

                    /**
                     * Verifies a GrpcRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GrpcRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GrpcRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute;

                    /**
                     * Creates a plain object from a GrpcRoute message. Also converts values to other types if specified.
                     * @param message GrpcRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GrpcRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GrpcRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GrpcRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace GrpcRoute {

                    /** Properties of a MethodMatch. */
                    interface IMethodMatch {

                        /** MethodMatch type */
                        type?: (google.cloud.networkservices.v1.GrpcRoute.MethodMatch.Type|keyof typeof google.cloud.networkservices.v1.GrpcRoute.MethodMatch.Type|null);

                        /** MethodMatch grpcService */
                        grpcService?: (string|null);

                        /** MethodMatch grpcMethod */
                        grpcMethod?: (string|null);

                        /** MethodMatch caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents a MethodMatch. */
                    class MethodMatch implements IMethodMatch {

                        /**
                         * Constructs a new MethodMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IMethodMatch);

                        /** MethodMatch type. */
                        public type: (google.cloud.networkservices.v1.GrpcRoute.MethodMatch.Type|keyof typeof google.cloud.networkservices.v1.GrpcRoute.MethodMatch.Type);

                        /** MethodMatch grpcService. */
                        public grpcService: string;

                        /** MethodMatch grpcMethod. */
                        public grpcMethod: string;

                        /** MethodMatch caseSensitive. */
                        public caseSensitive?: (boolean|null);

                        /** MethodMatch _caseSensitive. */
                        public _caseSensitive?: "caseSensitive";

                        /**
                         * Creates a new MethodMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MethodMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IMethodMatch): google.cloud.networkservices.v1.GrpcRoute.MethodMatch;

                        /**
                         * Encodes the specified MethodMatch message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.MethodMatch.verify|verify} messages.
                         * @param message MethodMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IMethodMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MethodMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.MethodMatch.verify|verify} messages.
                         * @param message MethodMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IMethodMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MethodMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MethodMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.MethodMatch;

                        /**
                         * Decodes a MethodMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MethodMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.MethodMatch;

                        /**
                         * Verifies a MethodMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MethodMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MethodMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.MethodMatch;

                        /**
                         * Creates a plain object from a MethodMatch message. Also converts values to other types if specified.
                         * @param message MethodMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.MethodMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MethodMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MethodMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MethodMatch {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            EXACT = 1,
                            REGULAR_EXPRESSION = 2
                        }
                    }

                    /** Properties of a HeaderMatch. */
                    interface IHeaderMatch {

                        /** HeaderMatch type */
                        type?: (google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.Type|keyof typeof google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.Type|null);

                        /** HeaderMatch key */
                        key?: (string|null);

                        /** HeaderMatch value */
                        value?: (string|null);
                    }

                    /** Represents a HeaderMatch. */
                    class HeaderMatch implements IHeaderMatch {

                        /**
                         * Constructs a new HeaderMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch);

                        /** HeaderMatch type. */
                        public type: (google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.Type|keyof typeof google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.Type);

                        /** HeaderMatch key. */
                        public key: string;

                        /** HeaderMatch value. */
                        public value: string;

                        /**
                         * Creates a new HeaderMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaderMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch): google.cloud.networkservices.v1.GrpcRoute.HeaderMatch;

                        /**
                         * Encodes the specified HeaderMatch message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.verify|verify} messages.
                         * @param message HeaderMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaderMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.HeaderMatch.verify|verify} messages.
                         * @param message HeaderMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaderMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaderMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.HeaderMatch;

                        /**
                         * Decodes a HeaderMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaderMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.HeaderMatch;

                        /**
                         * Verifies a HeaderMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaderMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaderMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.HeaderMatch;

                        /**
                         * Creates a plain object from a HeaderMatch message. Also converts values to other types if specified.
                         * @param message HeaderMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.HeaderMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaderMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HeaderMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace HeaderMatch {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            EXACT = 1,
                            REGULAR_EXPRESSION = 2
                        }
                    }

                    /** Properties of a RouteMatch. */
                    interface IRouteMatch {

                        /** RouteMatch method */
                        method?: (google.cloud.networkservices.v1.GrpcRoute.IMethodMatch|null);

                        /** RouteMatch headers */
                        headers?: (google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch[]|null);
                    }

                    /** Represents a RouteMatch. */
                    class RouteMatch implements IRouteMatch {

                        /**
                         * Constructs a new RouteMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteMatch);

                        /** RouteMatch method. */
                        public method?: (google.cloud.networkservices.v1.GrpcRoute.IMethodMatch|null);

                        /** RouteMatch headers. */
                        public headers: google.cloud.networkservices.v1.GrpcRoute.IHeaderMatch[];

                        /** RouteMatch _method. */
                        public _method?: "method";

                        /**
                         * Creates a new RouteMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteMatch): google.cloud.networkservices.v1.GrpcRoute.RouteMatch;

                        /**
                         * Encodes the specified RouteMatch message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.RouteMatch;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.RouteMatch;

                        /**
                         * Verifies a RouteMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.RouteMatch;

                        /**
                         * Creates a plain object from a RouteMatch message. Also converts values to other types if specified.
                         * @param message RouteMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.RouteMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Destination. */
                    interface IDestination {

                        /** Destination serviceName */
                        serviceName?: (string|null);

                        /** Destination weight */
                        weight?: (number|null);
                    }

                    /** Represents a Destination. */
                    class Destination implements IDestination {

                        /**
                         * Constructs a new Destination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IDestination);

                        /** Destination serviceName. */
                        public serviceName?: (string|null);

                        /** Destination weight. */
                        public weight?: (number|null);

                        /** Destination destinationType. */
                        public destinationType?: "serviceName";

                        /** Destination _weight. */
                        public _weight?: "weight";

                        /**
                         * Creates a new Destination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Destination instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IDestination): google.cloud.networkservices.v1.GrpcRoute.Destination;

                        /**
                         * Encodes the specified Destination message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Destination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.Destination;

                        /**
                         * Decodes a Destination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.Destination;

                        /**
                         * Verifies a Destination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Destination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.Destination;

                        /**
                         * Creates a plain object from a Destination message. Also converts values to other types if specified.
                         * @param message Destination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Destination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Destination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FaultInjectionPolicy. */
                    interface IFaultInjectionPolicy {

                        /** FaultInjectionPolicy delay */
                        delay?: (google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay|null);

                        /** FaultInjectionPolicy abort */
                        abort?: (google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort|null);
                    }

                    /** Represents a FaultInjectionPolicy. */
                    class FaultInjectionPolicy implements IFaultInjectionPolicy {

                        /**
                         * Constructs a new FaultInjectionPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy);

                        /** FaultInjectionPolicy delay. */
                        public delay?: (google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay|null);

                        /** FaultInjectionPolicy abort. */
                        public abort?: (google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort|null);

                        /** FaultInjectionPolicy _delay. */
                        public _delay?: "delay";

                        /** FaultInjectionPolicy _abort. */
                        public _abort?: "abort";

                        /**
                         * Creates a new FaultInjectionPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FaultInjectionPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy;

                        /**
                         * Encodes the specified FaultInjectionPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.verify|verify} messages.
                         * @param message FaultInjectionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FaultInjectionPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.verify|verify} messages.
                         * @param message FaultInjectionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FaultInjectionPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FaultInjectionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy;

                        /**
                         * Decodes a FaultInjectionPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FaultInjectionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy;

                        /**
                         * Verifies a FaultInjectionPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FaultInjectionPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FaultInjectionPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy;

                        /**
                         * Creates a plain object from a FaultInjectionPolicy message. Also converts values to other types if specified.
                         * @param message FaultInjectionPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FaultInjectionPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FaultInjectionPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace FaultInjectionPolicy {

                        /** Properties of a Delay. */
                        interface IDelay {

                            /** Delay fixedDelay */
                            fixedDelay?: (google.protobuf.IDuration|null);

                            /** Delay percentage */
                            percentage?: (number|null);
                        }

                        /** Represents a Delay. */
                        class Delay implements IDelay {

                            /**
                             * Constructs a new Delay.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay);

                            /** Delay fixedDelay. */
                            public fixedDelay?: (google.protobuf.IDuration|null);

                            /** Delay percentage. */
                            public percentage?: (number|null);

                            /** Delay _fixedDelay. */
                            public _fixedDelay?: "fixedDelay";

                            /** Delay _percentage. */
                            public _percentage?: "percentage";

                            /**
                             * Creates a new Delay instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Delay instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Encodes the specified Delay message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay.verify|verify} messages.
                             * @param message Delay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Delay message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay.verify|verify} messages.
                             * @param message Delay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IDelay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Delay message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Delay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Decodes a Delay message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Delay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Verifies a Delay message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Delay message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Delay
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Creates a plain object from a Delay message. Also converts values to other types if specified.
                             * @param message Delay
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Delay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Delay to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Delay
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Abort. */
                        interface IAbort {

                            /** Abort httpStatus */
                            httpStatus?: (number|null);

                            /** Abort percentage */
                            percentage?: (number|null);
                        }

                        /** Represents an Abort. */
                        class Abort implements IAbort {

                            /**
                             * Constructs a new Abort.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort);

                            /** Abort httpStatus. */
                            public httpStatus?: (number|null);

                            /** Abort percentage. */
                            public percentage?: (number|null);

                            /** Abort _httpStatus. */
                            public _httpStatus?: "httpStatus";

                            /** Abort _percentage. */
                            public _percentage?: "percentage";

                            /**
                             * Creates a new Abort instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Abort instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Encodes the specified Abort message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort.verify|verify} messages.
                             * @param message Abort message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Abort message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort.verify|verify} messages.
                             * @param message Abort message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.IAbort, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Abort message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Abort
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Decodes an Abort message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Abort
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Verifies an Abort message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Abort message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Abort
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Creates a plain object from an Abort message. Also converts values to other types if specified.
                             * @param message Abort
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.FaultInjectionPolicy.Abort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Abort to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Abort
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a RetryPolicy. */
                    interface IRetryPolicy {

                        /** RetryPolicy retryConditions */
                        retryConditions?: (string[]|null);

                        /** RetryPolicy numRetries */
                        numRetries?: (number|null);
                    }

                    /** Represents a RetryPolicy. */
                    class RetryPolicy implements IRetryPolicy {

                        /**
                         * Constructs a new RetryPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy);

                        /** RetryPolicy retryConditions. */
                        public retryConditions: string[];

                        /** RetryPolicy numRetries. */
                        public numRetries: number;

                        /**
                         * Creates a new RetryPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RetryPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy): google.cloud.networkservices.v1.GrpcRoute.RetryPolicy;

                        /**
                         * Encodes the specified RetryPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RetryPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.RetryPolicy;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.RetryPolicy;

                        /**
                         * Verifies a RetryPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RetryPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RetryPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.RetryPolicy;

                        /**
                         * Creates a plain object from a RetryPolicy message. Also converts values to other types if specified.
                         * @param message RetryPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.RetryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RetryPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RetryPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteAction. */
                    interface IRouteAction {

                        /** RouteAction destinations */
                        destinations?: (google.cloud.networkservices.v1.GrpcRoute.IDestination[]|null);

                        /** RouteAction faultInjectionPolicy */
                        faultInjectionPolicy?: (google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy|null);

                        /** RouteAction timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** RouteAction retryPolicy */
                        retryPolicy?: (google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy|null);
                    }

                    /** Represents a RouteAction. */
                    class RouteAction implements IRouteAction {

                        /**
                         * Constructs a new RouteAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteAction);

                        /** RouteAction destinations. */
                        public destinations: google.cloud.networkservices.v1.GrpcRoute.IDestination[];

                        /** RouteAction faultInjectionPolicy. */
                        public faultInjectionPolicy?: (google.cloud.networkservices.v1.GrpcRoute.IFaultInjectionPolicy|null);

                        /** RouteAction timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** RouteAction retryPolicy. */
                        public retryPolicy?: (google.cloud.networkservices.v1.GrpcRoute.IRetryPolicy|null);

                        /**
                         * Creates a new RouteAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteAction instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteAction): google.cloud.networkservices.v1.GrpcRoute.RouteAction;

                        /**
                         * Encodes the specified RouteAction message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteAction message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.RouteAction;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.RouteAction;

                        /**
                         * Verifies a RouteAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.RouteAction;

                        /**
                         * Creates a plain object from a RouteAction message. Also converts values to other types if specified.
                         * @param message RouteAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.RouteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteRule. */
                    interface IRouteRule {

                        /** RouteRule matches */
                        matches?: (google.cloud.networkservices.v1.GrpcRoute.IRouteMatch[]|null);

                        /** RouteRule action */
                        action?: (google.cloud.networkservices.v1.GrpcRoute.IRouteAction|null);
                    }

                    /** Represents a RouteRule. */
                    class RouteRule implements IRouteRule {

                        /**
                         * Constructs a new RouteRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteRule);

                        /** RouteRule matches. */
                        public matches: google.cloud.networkservices.v1.GrpcRoute.IRouteMatch[];

                        /** RouteRule action. */
                        public action?: (google.cloud.networkservices.v1.GrpcRoute.IRouteAction|null);

                        /**
                         * Creates a new RouteRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteRule instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.GrpcRoute.IRouteRule): google.cloud.networkservices.v1.GrpcRoute.RouteRule;

                        /**
                         * Encodes the specified RouteRule message. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.GrpcRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteRule message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GrpcRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.GrpcRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GrpcRoute.RouteRule;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GrpcRoute.RouteRule;

                        /**
                         * Verifies a RouteRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GrpcRoute.RouteRule;

                        /**
                         * Creates a plain object from a RouteRule message. Also converts values to other types if specified.
                         * @param message RouteRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.GrpcRoute.RouteRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListGrpcRoutesRequest. */
                interface IListGrpcRoutesRequest {

                    /** ListGrpcRoutesRequest parent */
                    parent?: (string|null);

                    /** ListGrpcRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGrpcRoutesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGrpcRoutesRequest. */
                class ListGrpcRoutesRequest implements IListGrpcRoutesRequest {

                    /**
                     * Constructs a new ListGrpcRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListGrpcRoutesRequest);

                    /** ListGrpcRoutesRequest parent. */
                    public parent: string;

                    /** ListGrpcRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListGrpcRoutesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGrpcRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGrpcRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListGrpcRoutesRequest): google.cloud.networkservices.v1.ListGrpcRoutesRequest;

                    /**
                     * Encodes the specified ListGrpcRoutesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListGrpcRoutesRequest.verify|verify} messages.
                     * @param message ListGrpcRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListGrpcRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGrpcRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListGrpcRoutesRequest.verify|verify} messages.
                     * @param message ListGrpcRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListGrpcRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGrpcRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGrpcRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListGrpcRoutesRequest;

                    /**
                     * Decodes a ListGrpcRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGrpcRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListGrpcRoutesRequest;

                    /**
                     * Verifies a ListGrpcRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGrpcRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGrpcRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListGrpcRoutesRequest;

                    /**
                     * Creates a plain object from a ListGrpcRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListGrpcRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListGrpcRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGrpcRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGrpcRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGrpcRoutesResponse. */
                interface IListGrpcRoutesResponse {

                    /** ListGrpcRoutesResponse grpcRoutes */
                    grpcRoutes?: (google.cloud.networkservices.v1.IGrpcRoute[]|null);

                    /** ListGrpcRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGrpcRoutesResponse. */
                class ListGrpcRoutesResponse implements IListGrpcRoutesResponse {

                    /**
                     * Constructs a new ListGrpcRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListGrpcRoutesResponse);

                    /** ListGrpcRoutesResponse grpcRoutes. */
                    public grpcRoutes: google.cloud.networkservices.v1.IGrpcRoute[];

                    /** ListGrpcRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGrpcRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGrpcRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListGrpcRoutesResponse): google.cloud.networkservices.v1.ListGrpcRoutesResponse;

                    /**
                     * Encodes the specified ListGrpcRoutesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListGrpcRoutesResponse.verify|verify} messages.
                     * @param message ListGrpcRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListGrpcRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGrpcRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListGrpcRoutesResponse.verify|verify} messages.
                     * @param message ListGrpcRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListGrpcRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGrpcRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGrpcRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListGrpcRoutesResponse;

                    /**
                     * Decodes a ListGrpcRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGrpcRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListGrpcRoutesResponse;

                    /**
                     * Verifies a ListGrpcRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGrpcRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGrpcRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListGrpcRoutesResponse;

                    /**
                     * Creates a plain object from a ListGrpcRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListGrpcRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListGrpcRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGrpcRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGrpcRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGrpcRouteRequest. */
                interface IGetGrpcRouteRequest {

                    /** GetGrpcRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGrpcRouteRequest. */
                class GetGrpcRouteRequest implements IGetGrpcRouteRequest {

                    /**
                     * Constructs a new GetGrpcRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetGrpcRouteRequest);

                    /** GetGrpcRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGrpcRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGrpcRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetGrpcRouteRequest): google.cloud.networkservices.v1.GetGrpcRouteRequest;

                    /**
                     * Encodes the specified GetGrpcRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetGrpcRouteRequest.verify|verify} messages.
                     * @param message GetGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGrpcRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetGrpcRouteRequest.verify|verify} messages.
                     * @param message GetGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGrpcRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetGrpcRouteRequest;

                    /**
                     * Decodes a GetGrpcRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetGrpcRouteRequest;

                    /**
                     * Verifies a GetGrpcRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGrpcRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGrpcRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetGrpcRouteRequest;

                    /**
                     * Creates a plain object from a GetGrpcRouteRequest message. Also converts values to other types if specified.
                     * @param message GetGrpcRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetGrpcRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGrpcRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGrpcRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateGrpcRouteRequest. */
                interface ICreateGrpcRouteRequest {

                    /** CreateGrpcRouteRequest parent */
                    parent?: (string|null);

                    /** CreateGrpcRouteRequest grpcRouteId */
                    grpcRouteId?: (string|null);

                    /** CreateGrpcRouteRequest grpcRoute */
                    grpcRoute?: (google.cloud.networkservices.v1.IGrpcRoute|null);
                }

                /** Represents a CreateGrpcRouteRequest. */
                class CreateGrpcRouteRequest implements ICreateGrpcRouteRequest {

                    /**
                     * Constructs a new CreateGrpcRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateGrpcRouteRequest);

                    /** CreateGrpcRouteRequest parent. */
                    public parent: string;

                    /** CreateGrpcRouteRequest grpcRouteId. */
                    public grpcRouteId: string;

                    /** CreateGrpcRouteRequest grpcRoute. */
                    public grpcRoute?: (google.cloud.networkservices.v1.IGrpcRoute|null);

                    /**
                     * Creates a new CreateGrpcRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGrpcRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateGrpcRouteRequest): google.cloud.networkservices.v1.CreateGrpcRouteRequest;

                    /**
                     * Encodes the specified CreateGrpcRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateGrpcRouteRequest.verify|verify} messages.
                     * @param message CreateGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGrpcRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateGrpcRouteRequest.verify|verify} messages.
                     * @param message CreateGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGrpcRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateGrpcRouteRequest;

                    /**
                     * Decodes a CreateGrpcRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateGrpcRouteRequest;

                    /**
                     * Verifies a CreateGrpcRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGrpcRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGrpcRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateGrpcRouteRequest;

                    /**
                     * Creates a plain object from a CreateGrpcRouteRequest message. Also converts values to other types if specified.
                     * @param message CreateGrpcRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateGrpcRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGrpcRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateGrpcRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGrpcRouteRequest. */
                interface IUpdateGrpcRouteRequest {

                    /** UpdateGrpcRouteRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGrpcRouteRequest grpcRoute */
                    grpcRoute?: (google.cloud.networkservices.v1.IGrpcRoute|null);
                }

                /** Represents an UpdateGrpcRouteRequest. */
                class UpdateGrpcRouteRequest implements IUpdateGrpcRouteRequest {

                    /**
                     * Constructs a new UpdateGrpcRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest);

                    /** UpdateGrpcRouteRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGrpcRouteRequest grpcRoute. */
                    public grpcRoute?: (google.cloud.networkservices.v1.IGrpcRoute|null);

                    /**
                     * Creates a new UpdateGrpcRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGrpcRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest): google.cloud.networkservices.v1.UpdateGrpcRouteRequest;

                    /**
                     * Encodes the specified UpdateGrpcRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateGrpcRouteRequest.verify|verify} messages.
                     * @param message UpdateGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGrpcRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateGrpcRouteRequest.verify|verify} messages.
                     * @param message UpdateGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGrpcRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateGrpcRouteRequest;

                    /**
                     * Decodes an UpdateGrpcRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateGrpcRouteRequest;

                    /**
                     * Verifies an UpdateGrpcRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGrpcRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGrpcRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateGrpcRouteRequest;

                    /**
                     * Creates a plain object from an UpdateGrpcRouteRequest message. Also converts values to other types if specified.
                     * @param message UpdateGrpcRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateGrpcRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGrpcRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGrpcRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteGrpcRouteRequest. */
                interface IDeleteGrpcRouteRequest {

                    /** DeleteGrpcRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGrpcRouteRequest. */
                class DeleteGrpcRouteRequest implements IDeleteGrpcRouteRequest {

                    /**
                     * Constructs a new DeleteGrpcRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest);

                    /** DeleteGrpcRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGrpcRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGrpcRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest): google.cloud.networkservices.v1.DeleteGrpcRouteRequest;

                    /**
                     * Encodes the specified DeleteGrpcRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteGrpcRouteRequest.verify|verify} messages.
                     * @param message DeleteGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGrpcRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteGrpcRouteRequest.verify|verify} messages.
                     * @param message DeleteGrpcRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGrpcRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteGrpcRouteRequest;

                    /**
                     * Decodes a DeleteGrpcRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGrpcRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteGrpcRouteRequest;

                    /**
                     * Verifies a DeleteGrpcRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGrpcRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGrpcRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteGrpcRouteRequest;

                    /**
                     * Creates a plain object from a DeleteGrpcRouteRequest message. Also converts values to other types if specified.
                     * @param message DeleteGrpcRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteGrpcRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGrpcRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteGrpcRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HttpRoute. */
                interface IHttpRoute {

                    /** HttpRoute name */
                    name?: (string|null);

                    /** HttpRoute selfLink */
                    selfLink?: (string|null);

                    /** HttpRoute description */
                    description?: (string|null);

                    /** HttpRoute createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** HttpRoute updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** HttpRoute hostnames */
                    hostnames?: (string[]|null);

                    /** HttpRoute meshes */
                    meshes?: (string[]|null);

                    /** HttpRoute gateways */
                    gateways?: (string[]|null);

                    /** HttpRoute labels */
                    labels?: ({ [k: string]: string }|null);

                    /** HttpRoute rules */
                    rules?: (google.cloud.networkservices.v1.HttpRoute.IRouteRule[]|null);
                }

                /** Represents a HttpRoute. */
                class HttpRoute implements IHttpRoute {

                    /**
                     * Constructs a new HttpRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IHttpRoute);

                    /** HttpRoute name. */
                    public name: string;

                    /** HttpRoute selfLink. */
                    public selfLink: string;

                    /** HttpRoute description. */
                    public description: string;

                    /** HttpRoute createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** HttpRoute updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** HttpRoute hostnames. */
                    public hostnames: string[];

                    /** HttpRoute meshes. */
                    public meshes: string[];

                    /** HttpRoute gateways. */
                    public gateways: string[];

                    /** HttpRoute labels. */
                    public labels: { [k: string]: string };

                    /** HttpRoute rules. */
                    public rules: google.cloud.networkservices.v1.HttpRoute.IRouteRule[];

                    /**
                     * Creates a new HttpRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpRoute instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IHttpRoute): google.cloud.networkservices.v1.HttpRoute;

                    /**
                     * Encodes the specified HttpRoute message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.verify|verify} messages.
                     * @param message HttpRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IHttpRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpRoute message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.verify|verify} messages.
                     * @param message HttpRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IHttpRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute;

                    /**
                     * Decodes a HttpRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute;

                    /**
                     * Verifies a HttpRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute;

                    /**
                     * Creates a plain object from a HttpRoute message. Also converts values to other types if specified.
                     * @param message HttpRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.HttpRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HttpRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HttpRoute {

                    /** Properties of a HeaderMatch. */
                    interface IHeaderMatch {

                        /** HeaderMatch exactMatch */
                        exactMatch?: (string|null);

                        /** HeaderMatch regexMatch */
                        regexMatch?: (string|null);

                        /** HeaderMatch prefixMatch */
                        prefixMatch?: (string|null);

                        /** HeaderMatch presentMatch */
                        presentMatch?: (boolean|null);

                        /** HeaderMatch suffixMatch */
                        suffixMatch?: (string|null);

                        /** HeaderMatch rangeMatch */
                        rangeMatch?: (google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange|null);

                        /** HeaderMatch header */
                        header?: (string|null);

                        /** HeaderMatch invertMatch */
                        invertMatch?: (boolean|null);
                    }

                    /** Represents a HeaderMatch. */
                    class HeaderMatch implements IHeaderMatch {

                        /**
                         * Constructs a new HeaderMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IHeaderMatch);

                        /** HeaderMatch exactMatch. */
                        public exactMatch?: (string|null);

                        /** HeaderMatch regexMatch. */
                        public regexMatch?: (string|null);

                        /** HeaderMatch prefixMatch. */
                        public prefixMatch?: (string|null);

                        /** HeaderMatch presentMatch. */
                        public presentMatch?: (boolean|null);

                        /** HeaderMatch suffixMatch. */
                        public suffixMatch?: (string|null);

                        /** HeaderMatch rangeMatch. */
                        public rangeMatch?: (google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange|null);

                        /** HeaderMatch header. */
                        public header: string;

                        /** HeaderMatch invertMatch. */
                        public invertMatch: boolean;

                        /** HeaderMatch MatchType. */
                        public MatchType?: ("exactMatch"|"regexMatch"|"prefixMatch"|"presentMatch"|"suffixMatch"|"rangeMatch");

                        /**
                         * Creates a new HeaderMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaderMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IHeaderMatch): google.cloud.networkservices.v1.HttpRoute.HeaderMatch;

                        /**
                         * Encodes the specified HeaderMatch message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderMatch.verify|verify} messages.
                         * @param message HeaderMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaderMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderMatch.verify|verify} messages.
                         * @param message HeaderMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaderMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaderMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.HeaderMatch;

                        /**
                         * Decodes a HeaderMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaderMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.HeaderMatch;

                        /**
                         * Verifies a HeaderMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaderMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaderMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.HeaderMatch;

                        /**
                         * Creates a plain object from a HeaderMatch message. Also converts values to other types if specified.
                         * @param message HeaderMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.HeaderMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaderMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HeaderMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace HeaderMatch {

                        /** Properties of an IntegerRange. */
                        interface IIntegerRange {

                            /** IntegerRange start */
                            start?: (number|null);

                            /** IntegerRange end */
                            end?: (number|null);
                        }

                        /** Represents an IntegerRange. */
                        class IntegerRange implements IIntegerRange {

                            /**
                             * Constructs a new IntegerRange.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange);

                            /** IntegerRange start. */
                            public start: number;

                            /** IntegerRange end. */
                            public end: number;

                            /**
                             * Creates a new IntegerRange instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IntegerRange instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange): google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange;

                            /**
                             * Encodes the specified IntegerRange message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange.verify|verify} messages.
                             * @param message IntegerRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IntegerRange message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange.verify|verify} messages.
                             * @param message IntegerRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IIntegerRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an IntegerRange message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IntegerRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange;

                            /**
                             * Decodes an IntegerRange message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IntegerRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange;

                            /**
                             * Verifies an IntegerRange message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an IntegerRange message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IntegerRange
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange;

                            /**
                             * Creates a plain object from an IntegerRange message. Also converts values to other types if specified.
                             * @param message IntegerRange
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.HttpRoute.HeaderMatch.IntegerRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IntegerRange to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for IntegerRange
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a QueryParameterMatch. */
                    interface IQueryParameterMatch {

                        /** QueryParameterMatch exactMatch */
                        exactMatch?: (string|null);

                        /** QueryParameterMatch regexMatch */
                        regexMatch?: (string|null);

                        /** QueryParameterMatch presentMatch */
                        presentMatch?: (boolean|null);

                        /** QueryParameterMatch queryParameter */
                        queryParameter?: (string|null);
                    }

                    /** Represents a QueryParameterMatch. */
                    class QueryParameterMatch implements IQueryParameterMatch {

                        /**
                         * Constructs a new QueryParameterMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch);

                        /** QueryParameterMatch exactMatch. */
                        public exactMatch?: (string|null);

                        /** QueryParameterMatch regexMatch. */
                        public regexMatch?: (string|null);

                        /** QueryParameterMatch presentMatch. */
                        public presentMatch?: (boolean|null);

                        /** QueryParameterMatch queryParameter. */
                        public queryParameter: string;

                        /** QueryParameterMatch MatchType. */
                        public MatchType?: ("exactMatch"|"regexMatch"|"presentMatch");

                        /**
                         * Creates a new QueryParameterMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryParameterMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch): google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch;

                        /**
                         * Encodes the specified QueryParameterMatch message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.verify|verify} messages.
                         * @param message QueryParameterMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QueryParameterMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.verify|verify} messages.
                         * @param message QueryParameterMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryParameterMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryParameterMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch;

                        /**
                         * Decodes a QueryParameterMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QueryParameterMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch;

                        /**
                         * Verifies a QueryParameterMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QueryParameterMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QueryParameterMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch;

                        /**
                         * Creates a plain object from a QueryParameterMatch message. Also converts values to other types if specified.
                         * @param message QueryParameterMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QueryParameterMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for QueryParameterMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteMatch. */
                    interface IRouteMatch {

                        /** RouteMatch fullPathMatch */
                        fullPathMatch?: (string|null);

                        /** RouteMatch prefixMatch */
                        prefixMatch?: (string|null);

                        /** RouteMatch regexMatch */
                        regexMatch?: (string|null);

                        /** RouteMatch ignoreCase */
                        ignoreCase?: (boolean|null);

                        /** RouteMatch headers */
                        headers?: (google.cloud.networkservices.v1.HttpRoute.IHeaderMatch[]|null);

                        /** RouteMatch queryParameters */
                        queryParameters?: (google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch[]|null);
                    }

                    /** Represents a RouteMatch. */
                    class RouteMatch implements IRouteMatch {

                        /**
                         * Constructs a new RouteMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteMatch);

                        /** RouteMatch fullPathMatch. */
                        public fullPathMatch?: (string|null);

                        /** RouteMatch prefixMatch. */
                        public prefixMatch?: (string|null);

                        /** RouteMatch regexMatch. */
                        public regexMatch?: (string|null);

                        /** RouteMatch ignoreCase. */
                        public ignoreCase: boolean;

                        /** RouteMatch headers. */
                        public headers: google.cloud.networkservices.v1.HttpRoute.IHeaderMatch[];

                        /** RouteMatch queryParameters. */
                        public queryParameters: google.cloud.networkservices.v1.HttpRoute.IQueryParameterMatch[];

                        /** RouteMatch PathMatch. */
                        public PathMatch?: ("fullPathMatch"|"prefixMatch"|"regexMatch");

                        /**
                         * Creates a new RouteMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteMatch): google.cloud.networkservices.v1.HttpRoute.RouteMatch;

                        /**
                         * Encodes the specified RouteMatch message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.RouteMatch;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.RouteMatch;

                        /**
                         * Verifies a RouteMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.RouteMatch;

                        /**
                         * Creates a plain object from a RouteMatch message. Also converts values to other types if specified.
                         * @param message RouteMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.RouteMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Destination. */
                    interface IDestination {

                        /** Destination serviceName */
                        serviceName?: (string|null);

                        /** Destination weight */
                        weight?: (number|null);
                    }

                    /** Represents a Destination. */
                    class Destination implements IDestination {

                        /**
                         * Constructs a new Destination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IDestination);

                        /** Destination serviceName. */
                        public serviceName: string;

                        /** Destination weight. */
                        public weight: number;

                        /**
                         * Creates a new Destination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Destination instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IDestination): google.cloud.networkservices.v1.HttpRoute.Destination;

                        /**
                         * Encodes the specified Destination message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Destination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.Destination;

                        /**
                         * Decodes a Destination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.Destination;

                        /**
                         * Verifies a Destination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Destination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.Destination;

                        /**
                         * Creates a plain object from a Destination message. Also converts values to other types if specified.
                         * @param message Destination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Destination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Destination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Redirect. */
                    interface IRedirect {

                        /** Redirect hostRedirect */
                        hostRedirect?: (string|null);

                        /** Redirect pathRedirect */
                        pathRedirect?: (string|null);

                        /** Redirect prefixRewrite */
                        prefixRewrite?: (string|null);

                        /** Redirect responseCode */
                        responseCode?: (google.cloud.networkservices.v1.HttpRoute.Redirect.ResponseCode|keyof typeof google.cloud.networkservices.v1.HttpRoute.Redirect.ResponseCode|null);

                        /** Redirect httpsRedirect */
                        httpsRedirect?: (boolean|null);

                        /** Redirect stripQuery */
                        stripQuery?: (boolean|null);

                        /** Redirect portRedirect */
                        portRedirect?: (number|null);
                    }

                    /** Represents a Redirect. */
                    class Redirect implements IRedirect {

                        /**
                         * Constructs a new Redirect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRedirect);

                        /** Redirect hostRedirect. */
                        public hostRedirect: string;

                        /** Redirect pathRedirect. */
                        public pathRedirect: string;

                        /** Redirect prefixRewrite. */
                        public prefixRewrite: string;

                        /** Redirect responseCode. */
                        public responseCode: (google.cloud.networkservices.v1.HttpRoute.Redirect.ResponseCode|keyof typeof google.cloud.networkservices.v1.HttpRoute.Redirect.ResponseCode);

                        /** Redirect httpsRedirect. */
                        public httpsRedirect: boolean;

                        /** Redirect stripQuery. */
                        public stripQuery: boolean;

                        /** Redirect portRedirect. */
                        public portRedirect: number;

                        /**
                         * Creates a new Redirect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Redirect instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRedirect): google.cloud.networkservices.v1.HttpRoute.Redirect;

                        /**
                         * Encodes the specified Redirect message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.Redirect.verify|verify} messages.
                         * @param message Redirect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRedirect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Redirect message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.Redirect.verify|verify} messages.
                         * @param message Redirect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRedirect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Redirect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Redirect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.Redirect;

                        /**
                         * Decodes a Redirect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Redirect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.Redirect;

                        /**
                         * Verifies a Redirect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Redirect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Redirect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.Redirect;

                        /**
                         * Creates a plain object from a Redirect message. Also converts values to other types if specified.
                         * @param message Redirect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.Redirect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Redirect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Redirect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Redirect {

                        /** ResponseCode enum. */
                        enum ResponseCode {
                            RESPONSE_CODE_UNSPECIFIED = 0,
                            MOVED_PERMANENTLY_DEFAULT = 1,
                            FOUND = 2,
                            SEE_OTHER = 3,
                            TEMPORARY_REDIRECT = 4,
                            PERMANENT_REDIRECT = 5
                        }
                    }

                    /** Properties of a FaultInjectionPolicy. */
                    interface IFaultInjectionPolicy {

                        /** FaultInjectionPolicy delay */
                        delay?: (google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay|null);

                        /** FaultInjectionPolicy abort */
                        abort?: (google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort|null);
                    }

                    /** Represents a FaultInjectionPolicy. */
                    class FaultInjectionPolicy implements IFaultInjectionPolicy {

                        /**
                         * Constructs a new FaultInjectionPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy);

                        /** FaultInjectionPolicy delay. */
                        public delay?: (google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay|null);

                        /** FaultInjectionPolicy abort. */
                        public abort?: (google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort|null);

                        /**
                         * Creates a new FaultInjectionPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FaultInjectionPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy;

                        /**
                         * Encodes the specified FaultInjectionPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.verify|verify} messages.
                         * @param message FaultInjectionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FaultInjectionPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.verify|verify} messages.
                         * @param message FaultInjectionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FaultInjectionPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FaultInjectionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy;

                        /**
                         * Decodes a FaultInjectionPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FaultInjectionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy;

                        /**
                         * Verifies a FaultInjectionPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FaultInjectionPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FaultInjectionPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy;

                        /**
                         * Creates a plain object from a FaultInjectionPolicy message. Also converts values to other types if specified.
                         * @param message FaultInjectionPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FaultInjectionPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FaultInjectionPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace FaultInjectionPolicy {

                        /** Properties of a Delay. */
                        interface IDelay {

                            /** Delay fixedDelay */
                            fixedDelay?: (google.protobuf.IDuration|null);

                            /** Delay percentage */
                            percentage?: (number|null);
                        }

                        /** Represents a Delay. */
                        class Delay implements IDelay {

                            /**
                             * Constructs a new Delay.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay);

                            /** Delay fixedDelay. */
                            public fixedDelay?: (google.protobuf.IDuration|null);

                            /** Delay percentage. */
                            public percentage: number;

                            /**
                             * Creates a new Delay instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Delay instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Encodes the specified Delay message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay.verify|verify} messages.
                             * @param message Delay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Delay message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay.verify|verify} messages.
                             * @param message Delay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IDelay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Delay message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Delay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Decodes a Delay message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Delay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Verifies a Delay message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Delay message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Delay
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay;

                            /**
                             * Creates a plain object from a Delay message. Also converts values to other types if specified.
                             * @param message Delay
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Delay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Delay to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Delay
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Abort. */
                        interface IAbort {

                            /** Abort httpStatus */
                            httpStatus?: (number|null);

                            /** Abort percentage */
                            percentage?: (number|null);
                        }

                        /** Represents an Abort. */
                        class Abort implements IAbort {

                            /**
                             * Constructs a new Abort.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort);

                            /** Abort httpStatus. */
                            public httpStatus: number;

                            /** Abort percentage. */
                            public percentage: number;

                            /**
                             * Creates a new Abort instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Abort instance
                             */
                            public static create(properties?: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Encodes the specified Abort message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort.verify|verify} messages.
                             * @param message Abort message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Abort message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort.verify|verify} messages.
                             * @param message Abort message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.IAbort, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Abort message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Abort
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Decodes an Abort message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Abort
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Verifies an Abort message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Abort message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Abort
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort;

                            /**
                             * Creates a plain object from an Abort message. Also converts values to other types if specified.
                             * @param message Abort
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy.Abort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Abort to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Abort
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a HeaderModifier. */
                    interface IHeaderModifier {

                        /** HeaderModifier set */
                        set?: ({ [k: string]: string }|null);

                        /** HeaderModifier add */
                        add?: ({ [k: string]: string }|null);

                        /** HeaderModifier remove */
                        remove?: (string[]|null);
                    }

                    /** Represents a HeaderModifier. */
                    class HeaderModifier implements IHeaderModifier {

                        /**
                         * Constructs a new HeaderModifier.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IHeaderModifier);

                        /** HeaderModifier set. */
                        public set: { [k: string]: string };

                        /** HeaderModifier add. */
                        public add: { [k: string]: string };

                        /** HeaderModifier remove. */
                        public remove: string[];

                        /**
                         * Creates a new HeaderModifier instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaderModifier instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IHeaderModifier): google.cloud.networkservices.v1.HttpRoute.HeaderModifier;

                        /**
                         * Encodes the specified HeaderModifier message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderModifier.verify|verify} messages.
                         * @param message HeaderModifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IHeaderModifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaderModifier message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.HeaderModifier.verify|verify} messages.
                         * @param message HeaderModifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IHeaderModifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaderModifier message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaderModifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.HeaderModifier;

                        /**
                         * Decodes a HeaderModifier message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaderModifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.HeaderModifier;

                        /**
                         * Verifies a HeaderModifier message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaderModifier message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaderModifier
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.HeaderModifier;

                        /**
                         * Creates a plain object from a HeaderModifier message. Also converts values to other types if specified.
                         * @param message HeaderModifier
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.HeaderModifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaderModifier to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HeaderModifier
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a URLRewrite. */
                    interface IURLRewrite {

                        /** URLRewrite pathPrefixRewrite */
                        pathPrefixRewrite?: (string|null);

                        /** URLRewrite hostRewrite */
                        hostRewrite?: (string|null);
                    }

                    /** Represents a URLRewrite. */
                    class URLRewrite implements IURLRewrite {

                        /**
                         * Constructs a new URLRewrite.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IURLRewrite);

                        /** URLRewrite pathPrefixRewrite. */
                        public pathPrefixRewrite: string;

                        /** URLRewrite hostRewrite. */
                        public hostRewrite: string;

                        /**
                         * Creates a new URLRewrite instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns URLRewrite instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IURLRewrite): google.cloud.networkservices.v1.HttpRoute.URLRewrite;

                        /**
                         * Encodes the specified URLRewrite message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.URLRewrite.verify|verify} messages.
                         * @param message URLRewrite message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IURLRewrite, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified URLRewrite message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.URLRewrite.verify|verify} messages.
                         * @param message URLRewrite message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IURLRewrite, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a URLRewrite message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns URLRewrite
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.URLRewrite;

                        /**
                         * Decodes a URLRewrite message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns URLRewrite
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.URLRewrite;

                        /**
                         * Verifies a URLRewrite message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a URLRewrite message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns URLRewrite
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.URLRewrite;

                        /**
                         * Creates a plain object from a URLRewrite message. Also converts values to other types if specified.
                         * @param message URLRewrite
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.URLRewrite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this URLRewrite to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for URLRewrite
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RetryPolicy. */
                    interface IRetryPolicy {

                        /** RetryPolicy retryConditions */
                        retryConditions?: (string[]|null);

                        /** RetryPolicy numRetries */
                        numRetries?: (number|null);

                        /** RetryPolicy perTryTimeout */
                        perTryTimeout?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a RetryPolicy. */
                    class RetryPolicy implements IRetryPolicy {

                        /**
                         * Constructs a new RetryPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRetryPolicy);

                        /** RetryPolicy retryConditions. */
                        public retryConditions: string[];

                        /** RetryPolicy numRetries. */
                        public numRetries: number;

                        /** RetryPolicy perTryTimeout. */
                        public perTryTimeout?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new RetryPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RetryPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRetryPolicy): google.cloud.networkservices.v1.HttpRoute.RetryPolicy;

                        /**
                         * Encodes the specified RetryPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RetryPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.RetryPolicy;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.RetryPolicy;

                        /**
                         * Verifies a RetryPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RetryPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RetryPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.RetryPolicy;

                        /**
                         * Creates a plain object from a RetryPolicy message. Also converts values to other types if specified.
                         * @param message RetryPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.RetryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RetryPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RetryPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RequestMirrorPolicy. */
                    interface IRequestMirrorPolicy {

                        /** RequestMirrorPolicy destination */
                        destination?: (google.cloud.networkservices.v1.HttpRoute.IDestination|null);
                    }

                    /** Represents a RequestMirrorPolicy. */
                    class RequestMirrorPolicy implements IRequestMirrorPolicy {

                        /**
                         * Constructs a new RequestMirrorPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy);

                        /** RequestMirrorPolicy destination. */
                        public destination?: (google.cloud.networkservices.v1.HttpRoute.IDestination|null);

                        /**
                         * Creates a new RequestMirrorPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RequestMirrorPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy): google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy;

                        /**
                         * Encodes the specified RequestMirrorPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy.verify|verify} messages.
                         * @param message RequestMirrorPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RequestMirrorPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy.verify|verify} messages.
                         * @param message RequestMirrorPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RequestMirrorPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RequestMirrorPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy;

                        /**
                         * Decodes a RequestMirrorPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RequestMirrorPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy;

                        /**
                         * Verifies a RequestMirrorPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RequestMirrorPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RequestMirrorPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy;

                        /**
                         * Creates a plain object from a RequestMirrorPolicy message. Also converts values to other types if specified.
                         * @param message RequestMirrorPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RequestMirrorPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RequestMirrorPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CorsPolicy. */
                    interface ICorsPolicy {

                        /** CorsPolicy allowOrigins */
                        allowOrigins?: (string[]|null);

                        /** CorsPolicy allowOriginRegexes */
                        allowOriginRegexes?: (string[]|null);

                        /** CorsPolicy allowMethods */
                        allowMethods?: (string[]|null);

                        /** CorsPolicy allowHeaders */
                        allowHeaders?: (string[]|null);

                        /** CorsPolicy exposeHeaders */
                        exposeHeaders?: (string[]|null);

                        /** CorsPolicy maxAge */
                        maxAge?: (string|null);

                        /** CorsPolicy allowCredentials */
                        allowCredentials?: (boolean|null);

                        /** CorsPolicy disabled */
                        disabled?: (boolean|null);
                    }

                    /** Represents a CorsPolicy. */
                    class CorsPolicy implements ICorsPolicy {

                        /**
                         * Constructs a new CorsPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.ICorsPolicy);

                        /** CorsPolicy allowOrigins. */
                        public allowOrigins: string[];

                        /** CorsPolicy allowOriginRegexes. */
                        public allowOriginRegexes: string[];

                        /** CorsPolicy allowMethods. */
                        public allowMethods: string[];

                        /** CorsPolicy allowHeaders. */
                        public allowHeaders: string[];

                        /** CorsPolicy exposeHeaders. */
                        public exposeHeaders: string[];

                        /** CorsPolicy maxAge. */
                        public maxAge: string;

                        /** CorsPolicy allowCredentials. */
                        public allowCredentials: boolean;

                        /** CorsPolicy disabled. */
                        public disabled: boolean;

                        /**
                         * Creates a new CorsPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CorsPolicy instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.ICorsPolicy): google.cloud.networkservices.v1.HttpRoute.CorsPolicy;

                        /**
                         * Encodes the specified CorsPolicy message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.CorsPolicy.verify|verify} messages.
                         * @param message CorsPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.ICorsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CorsPolicy message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.CorsPolicy.verify|verify} messages.
                         * @param message CorsPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.ICorsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CorsPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CorsPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.CorsPolicy;

                        /**
                         * Decodes a CorsPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CorsPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.CorsPolicy;

                        /**
                         * Verifies a CorsPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CorsPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CorsPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.CorsPolicy;

                        /**
                         * Creates a plain object from a CorsPolicy message. Also converts values to other types if specified.
                         * @param message CorsPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.CorsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CorsPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CorsPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteAction. */
                    interface IRouteAction {

                        /** RouteAction destinations */
                        destinations?: (google.cloud.networkservices.v1.HttpRoute.IDestination[]|null);

                        /** RouteAction redirect */
                        redirect?: (google.cloud.networkservices.v1.HttpRoute.IRedirect|null);

                        /** RouteAction faultInjectionPolicy */
                        faultInjectionPolicy?: (google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy|null);

                        /** RouteAction requestHeaderModifier */
                        requestHeaderModifier?: (google.cloud.networkservices.v1.HttpRoute.IHeaderModifier|null);

                        /** RouteAction responseHeaderModifier */
                        responseHeaderModifier?: (google.cloud.networkservices.v1.HttpRoute.IHeaderModifier|null);

                        /** RouteAction urlRewrite */
                        urlRewrite?: (google.cloud.networkservices.v1.HttpRoute.IURLRewrite|null);

                        /** RouteAction timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** RouteAction retryPolicy */
                        retryPolicy?: (google.cloud.networkservices.v1.HttpRoute.IRetryPolicy|null);

                        /** RouteAction requestMirrorPolicy */
                        requestMirrorPolicy?: (google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy|null);

                        /** RouteAction corsPolicy */
                        corsPolicy?: (google.cloud.networkservices.v1.HttpRoute.ICorsPolicy|null);
                    }

                    /** Represents a RouteAction. */
                    class RouteAction implements IRouteAction {

                        /**
                         * Constructs a new RouteAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteAction);

                        /** RouteAction destinations. */
                        public destinations: google.cloud.networkservices.v1.HttpRoute.IDestination[];

                        /** RouteAction redirect. */
                        public redirect?: (google.cloud.networkservices.v1.HttpRoute.IRedirect|null);

                        /** RouteAction faultInjectionPolicy. */
                        public faultInjectionPolicy?: (google.cloud.networkservices.v1.HttpRoute.IFaultInjectionPolicy|null);

                        /** RouteAction requestHeaderModifier. */
                        public requestHeaderModifier?: (google.cloud.networkservices.v1.HttpRoute.IHeaderModifier|null);

                        /** RouteAction responseHeaderModifier. */
                        public responseHeaderModifier?: (google.cloud.networkservices.v1.HttpRoute.IHeaderModifier|null);

                        /** RouteAction urlRewrite. */
                        public urlRewrite?: (google.cloud.networkservices.v1.HttpRoute.IURLRewrite|null);

                        /** RouteAction timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** RouteAction retryPolicy. */
                        public retryPolicy?: (google.cloud.networkservices.v1.HttpRoute.IRetryPolicy|null);

                        /** RouteAction requestMirrorPolicy. */
                        public requestMirrorPolicy?: (google.cloud.networkservices.v1.HttpRoute.IRequestMirrorPolicy|null);

                        /** RouteAction corsPolicy. */
                        public corsPolicy?: (google.cloud.networkservices.v1.HttpRoute.ICorsPolicy|null);

                        /**
                         * Creates a new RouteAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteAction instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteAction): google.cloud.networkservices.v1.HttpRoute.RouteAction;

                        /**
                         * Encodes the specified RouteAction message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteAction message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.RouteAction;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.RouteAction;

                        /**
                         * Verifies a RouteAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.RouteAction;

                        /**
                         * Creates a plain object from a RouteAction message. Also converts values to other types if specified.
                         * @param message RouteAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.RouteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteRule. */
                    interface IRouteRule {

                        /** RouteRule matches */
                        matches?: (google.cloud.networkservices.v1.HttpRoute.IRouteMatch[]|null);

                        /** RouteRule action */
                        action?: (google.cloud.networkservices.v1.HttpRoute.IRouteAction|null);
                    }

                    /** Represents a RouteRule. */
                    class RouteRule implements IRouteRule {

                        /**
                         * Constructs a new RouteRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteRule);

                        /** RouteRule matches. */
                        public matches: google.cloud.networkservices.v1.HttpRoute.IRouteMatch[];

                        /** RouteRule action. */
                        public action?: (google.cloud.networkservices.v1.HttpRoute.IRouteAction|null);

                        /**
                         * Creates a new RouteRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteRule instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.HttpRoute.IRouteRule): google.cloud.networkservices.v1.HttpRoute.RouteRule;

                        /**
                         * Encodes the specified RouteRule message. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.HttpRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteRule message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.HttpRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.HttpRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.HttpRoute.RouteRule;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.HttpRoute.RouteRule;

                        /**
                         * Verifies a RouteRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.HttpRoute.RouteRule;

                        /**
                         * Creates a plain object from a RouteRule message. Also converts values to other types if specified.
                         * @param message RouteRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.HttpRoute.RouteRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListHttpRoutesRequest. */
                interface IListHttpRoutesRequest {

                    /** ListHttpRoutesRequest parent */
                    parent?: (string|null);

                    /** ListHttpRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHttpRoutesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListHttpRoutesRequest. */
                class ListHttpRoutesRequest implements IListHttpRoutesRequest {

                    /**
                     * Constructs a new ListHttpRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListHttpRoutesRequest);

                    /** ListHttpRoutesRequest parent. */
                    public parent: string;

                    /** ListHttpRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListHttpRoutesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListHttpRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHttpRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListHttpRoutesRequest): google.cloud.networkservices.v1.ListHttpRoutesRequest;

                    /**
                     * Encodes the specified ListHttpRoutesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListHttpRoutesRequest.verify|verify} messages.
                     * @param message ListHttpRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListHttpRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHttpRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListHttpRoutesRequest.verify|verify} messages.
                     * @param message ListHttpRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListHttpRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHttpRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHttpRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListHttpRoutesRequest;

                    /**
                     * Decodes a ListHttpRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHttpRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListHttpRoutesRequest;

                    /**
                     * Verifies a ListHttpRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHttpRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHttpRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListHttpRoutesRequest;

                    /**
                     * Creates a plain object from a ListHttpRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListHttpRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListHttpRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHttpRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHttpRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHttpRoutesResponse. */
                interface IListHttpRoutesResponse {

                    /** ListHttpRoutesResponse httpRoutes */
                    httpRoutes?: (google.cloud.networkservices.v1.IHttpRoute[]|null);

                    /** ListHttpRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListHttpRoutesResponse. */
                class ListHttpRoutesResponse implements IListHttpRoutesResponse {

                    /**
                     * Constructs a new ListHttpRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListHttpRoutesResponse);

                    /** ListHttpRoutesResponse httpRoutes. */
                    public httpRoutes: google.cloud.networkservices.v1.IHttpRoute[];

                    /** ListHttpRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListHttpRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHttpRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListHttpRoutesResponse): google.cloud.networkservices.v1.ListHttpRoutesResponse;

                    /**
                     * Encodes the specified ListHttpRoutesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListHttpRoutesResponse.verify|verify} messages.
                     * @param message ListHttpRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListHttpRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHttpRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListHttpRoutesResponse.verify|verify} messages.
                     * @param message ListHttpRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListHttpRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHttpRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHttpRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListHttpRoutesResponse;

                    /**
                     * Decodes a ListHttpRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHttpRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListHttpRoutesResponse;

                    /**
                     * Verifies a ListHttpRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHttpRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHttpRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListHttpRoutesResponse;

                    /**
                     * Creates a plain object from a ListHttpRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListHttpRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListHttpRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHttpRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHttpRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHttpRouteRequest. */
                interface IGetHttpRouteRequest {

                    /** GetHttpRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHttpRouteRequest. */
                class GetHttpRouteRequest implements IGetHttpRouteRequest {

                    /**
                     * Constructs a new GetHttpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetHttpRouteRequest);

                    /** GetHttpRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHttpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHttpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetHttpRouteRequest): google.cloud.networkservices.v1.GetHttpRouteRequest;

                    /**
                     * Encodes the specified GetHttpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetHttpRouteRequest.verify|verify} messages.
                     * @param message GetHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHttpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetHttpRouteRequest.verify|verify} messages.
                     * @param message GetHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHttpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetHttpRouteRequest;

                    /**
                     * Decodes a GetHttpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetHttpRouteRequest;

                    /**
                     * Verifies a GetHttpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHttpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHttpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetHttpRouteRequest;

                    /**
                     * Creates a plain object from a GetHttpRouteRequest message. Also converts values to other types if specified.
                     * @param message GetHttpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetHttpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHttpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHttpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHttpRouteRequest. */
                interface ICreateHttpRouteRequest {

                    /** CreateHttpRouteRequest parent */
                    parent?: (string|null);

                    /** CreateHttpRouteRequest httpRouteId */
                    httpRouteId?: (string|null);

                    /** CreateHttpRouteRequest httpRoute */
                    httpRoute?: (google.cloud.networkservices.v1.IHttpRoute|null);
                }

                /** Represents a CreateHttpRouteRequest. */
                class CreateHttpRouteRequest implements ICreateHttpRouteRequest {

                    /**
                     * Constructs a new CreateHttpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateHttpRouteRequest);

                    /** CreateHttpRouteRequest parent. */
                    public parent: string;

                    /** CreateHttpRouteRequest httpRouteId. */
                    public httpRouteId: string;

                    /** CreateHttpRouteRequest httpRoute. */
                    public httpRoute?: (google.cloud.networkservices.v1.IHttpRoute|null);

                    /**
                     * Creates a new CreateHttpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHttpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateHttpRouteRequest): google.cloud.networkservices.v1.CreateHttpRouteRequest;

                    /**
                     * Encodes the specified CreateHttpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateHttpRouteRequest.verify|verify} messages.
                     * @param message CreateHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHttpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateHttpRouteRequest.verify|verify} messages.
                     * @param message CreateHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHttpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateHttpRouteRequest;

                    /**
                     * Decodes a CreateHttpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateHttpRouteRequest;

                    /**
                     * Verifies a CreateHttpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHttpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHttpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateHttpRouteRequest;

                    /**
                     * Creates a plain object from a CreateHttpRouteRequest message. Also converts values to other types if specified.
                     * @param message CreateHttpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateHttpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHttpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHttpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHttpRouteRequest. */
                interface IUpdateHttpRouteRequest {

                    /** UpdateHttpRouteRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHttpRouteRequest httpRoute */
                    httpRoute?: (google.cloud.networkservices.v1.IHttpRoute|null);
                }

                /** Represents an UpdateHttpRouteRequest. */
                class UpdateHttpRouteRequest implements IUpdateHttpRouteRequest {

                    /**
                     * Constructs a new UpdateHttpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateHttpRouteRequest);

                    /** UpdateHttpRouteRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHttpRouteRequest httpRoute. */
                    public httpRoute?: (google.cloud.networkservices.v1.IHttpRoute|null);

                    /**
                     * Creates a new UpdateHttpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHttpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateHttpRouteRequest): google.cloud.networkservices.v1.UpdateHttpRouteRequest;

                    /**
                     * Encodes the specified UpdateHttpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateHttpRouteRequest.verify|verify} messages.
                     * @param message UpdateHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHttpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateHttpRouteRequest.verify|verify} messages.
                     * @param message UpdateHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHttpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateHttpRouteRequest;

                    /**
                     * Decodes an UpdateHttpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateHttpRouteRequest;

                    /**
                     * Verifies an UpdateHttpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHttpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHttpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateHttpRouteRequest;

                    /**
                     * Creates a plain object from an UpdateHttpRouteRequest message. Also converts values to other types if specified.
                     * @param message UpdateHttpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateHttpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHttpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHttpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteHttpRouteRequest. */
                interface IDeleteHttpRouteRequest {

                    /** DeleteHttpRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteHttpRouteRequest. */
                class DeleteHttpRouteRequest implements IDeleteHttpRouteRequest {

                    /**
                     * Constructs a new DeleteHttpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteHttpRouteRequest);

                    /** DeleteHttpRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteHttpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteHttpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteHttpRouteRequest): google.cloud.networkservices.v1.DeleteHttpRouteRequest;

                    /**
                     * Encodes the specified DeleteHttpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteHttpRouteRequest.verify|verify} messages.
                     * @param message DeleteHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteHttpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteHttpRouteRequest.verify|verify} messages.
                     * @param message DeleteHttpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteHttpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteHttpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteHttpRouteRequest;

                    /**
                     * Decodes a DeleteHttpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteHttpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteHttpRouteRequest;

                    /**
                     * Verifies a DeleteHttpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteHttpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteHttpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteHttpRouteRequest;

                    /**
                     * Creates a plain object from a DeleteHttpRouteRequest message. Also converts values to other types if specified.
                     * @param message DeleteHttpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteHttpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteHttpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteHttpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Mesh. */
                interface IMesh {

                    /** Mesh name */
                    name?: (string|null);

                    /** Mesh selfLink */
                    selfLink?: (string|null);

                    /** Mesh createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Mesh updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Mesh labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Mesh description */
                    description?: (string|null);

                    /** Mesh interceptionPort */
                    interceptionPort?: (number|null);
                }

                /** Represents a Mesh. */
                class Mesh implements IMesh {

                    /**
                     * Constructs a new Mesh.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IMesh);

                    /** Mesh name. */
                    public name: string;

                    /** Mesh selfLink. */
                    public selfLink: string;

                    /** Mesh createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Mesh updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Mesh labels. */
                    public labels: { [k: string]: string };

                    /** Mesh description. */
                    public description: string;

                    /** Mesh interceptionPort. */
                    public interceptionPort: number;

                    /**
                     * Creates a new Mesh instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Mesh instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IMesh): google.cloud.networkservices.v1.Mesh;

                    /**
                     * Encodes the specified Mesh message. Does not implicitly {@link google.cloud.networkservices.v1.Mesh.verify|verify} messages.
                     * @param message Mesh message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Mesh message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.Mesh.verify|verify} messages.
                     * @param message Mesh message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Mesh message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Mesh
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.Mesh;

                    /**
                     * Decodes a Mesh message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Mesh
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.Mesh;

                    /**
                     * Verifies a Mesh message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Mesh message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Mesh
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.Mesh;

                    /**
                     * Creates a plain object from a Mesh message. Also converts values to other types if specified.
                     * @param message Mesh
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.Mesh, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Mesh to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Mesh
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMeshesRequest. */
                interface IListMeshesRequest {

                    /** ListMeshesRequest parent */
                    parent?: (string|null);

                    /** ListMeshesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMeshesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListMeshesRequest. */
                class ListMeshesRequest implements IListMeshesRequest {

                    /**
                     * Constructs a new ListMeshesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListMeshesRequest);

                    /** ListMeshesRequest parent. */
                    public parent: string;

                    /** ListMeshesRequest pageSize. */
                    public pageSize: number;

                    /** ListMeshesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListMeshesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMeshesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListMeshesRequest): google.cloud.networkservices.v1.ListMeshesRequest;

                    /**
                     * Encodes the specified ListMeshesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListMeshesRequest.verify|verify} messages.
                     * @param message ListMeshesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListMeshesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMeshesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListMeshesRequest.verify|verify} messages.
                     * @param message ListMeshesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListMeshesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMeshesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMeshesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListMeshesRequest;

                    /**
                     * Decodes a ListMeshesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMeshesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListMeshesRequest;

                    /**
                     * Verifies a ListMeshesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMeshesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMeshesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListMeshesRequest;

                    /**
                     * Creates a plain object from a ListMeshesRequest message. Also converts values to other types if specified.
                     * @param message ListMeshesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListMeshesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMeshesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMeshesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMeshesResponse. */
                interface IListMeshesResponse {

                    /** ListMeshesResponse meshes */
                    meshes?: (google.cloud.networkservices.v1.IMesh[]|null);

                    /** ListMeshesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListMeshesResponse. */
                class ListMeshesResponse implements IListMeshesResponse {

                    /**
                     * Constructs a new ListMeshesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListMeshesResponse);

                    /** ListMeshesResponse meshes. */
                    public meshes: google.cloud.networkservices.v1.IMesh[];

                    /** ListMeshesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListMeshesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMeshesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListMeshesResponse): google.cloud.networkservices.v1.ListMeshesResponse;

                    /**
                     * Encodes the specified ListMeshesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListMeshesResponse.verify|verify} messages.
                     * @param message ListMeshesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListMeshesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMeshesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListMeshesResponse.verify|verify} messages.
                     * @param message ListMeshesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListMeshesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMeshesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMeshesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListMeshesResponse;

                    /**
                     * Decodes a ListMeshesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMeshesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListMeshesResponse;

                    /**
                     * Verifies a ListMeshesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMeshesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMeshesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListMeshesResponse;

                    /**
                     * Creates a plain object from a ListMeshesResponse message. Also converts values to other types if specified.
                     * @param message ListMeshesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListMeshesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMeshesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMeshesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetMeshRequest. */
                interface IGetMeshRequest {

                    /** GetMeshRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMeshRequest. */
                class GetMeshRequest implements IGetMeshRequest {

                    /**
                     * Constructs a new GetMeshRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetMeshRequest);

                    /** GetMeshRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMeshRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMeshRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetMeshRequest): google.cloud.networkservices.v1.GetMeshRequest;

                    /**
                     * Encodes the specified GetMeshRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetMeshRequest.verify|verify} messages.
                     * @param message GetMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMeshRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetMeshRequest.verify|verify} messages.
                     * @param message GetMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMeshRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetMeshRequest;

                    /**
                     * Decodes a GetMeshRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetMeshRequest;

                    /**
                     * Verifies a GetMeshRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMeshRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMeshRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetMeshRequest;

                    /**
                     * Creates a plain object from a GetMeshRequest message. Also converts values to other types if specified.
                     * @param message GetMeshRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetMeshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMeshRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetMeshRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateMeshRequest. */
                interface ICreateMeshRequest {

                    /** CreateMeshRequest parent */
                    parent?: (string|null);

                    /** CreateMeshRequest meshId */
                    meshId?: (string|null);

                    /** CreateMeshRequest mesh */
                    mesh?: (google.cloud.networkservices.v1.IMesh|null);
                }

                /** Represents a CreateMeshRequest. */
                class CreateMeshRequest implements ICreateMeshRequest {

                    /**
                     * Constructs a new CreateMeshRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateMeshRequest);

                    /** CreateMeshRequest parent. */
                    public parent: string;

                    /** CreateMeshRequest meshId. */
                    public meshId: string;

                    /** CreateMeshRequest mesh. */
                    public mesh?: (google.cloud.networkservices.v1.IMesh|null);

                    /**
                     * Creates a new CreateMeshRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMeshRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateMeshRequest): google.cloud.networkservices.v1.CreateMeshRequest;

                    /**
                     * Encodes the specified CreateMeshRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateMeshRequest.verify|verify} messages.
                     * @param message CreateMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMeshRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateMeshRequest.verify|verify} messages.
                     * @param message CreateMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMeshRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateMeshRequest;

                    /**
                     * Decodes a CreateMeshRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateMeshRequest;

                    /**
                     * Verifies a CreateMeshRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMeshRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMeshRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateMeshRequest;

                    /**
                     * Creates a plain object from a CreateMeshRequest message. Also converts values to other types if specified.
                     * @param message CreateMeshRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateMeshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMeshRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateMeshRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateMeshRequest. */
                interface IUpdateMeshRequest {

                    /** UpdateMeshRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMeshRequest mesh */
                    mesh?: (google.cloud.networkservices.v1.IMesh|null);
                }

                /** Represents an UpdateMeshRequest. */
                class UpdateMeshRequest implements IUpdateMeshRequest {

                    /**
                     * Constructs a new UpdateMeshRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateMeshRequest);

                    /** UpdateMeshRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMeshRequest mesh. */
                    public mesh?: (google.cloud.networkservices.v1.IMesh|null);

                    /**
                     * Creates a new UpdateMeshRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMeshRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateMeshRequest): google.cloud.networkservices.v1.UpdateMeshRequest;

                    /**
                     * Encodes the specified UpdateMeshRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateMeshRequest.verify|verify} messages.
                     * @param message UpdateMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMeshRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateMeshRequest.verify|verify} messages.
                     * @param message UpdateMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMeshRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateMeshRequest;

                    /**
                     * Decodes an UpdateMeshRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateMeshRequest;

                    /**
                     * Verifies an UpdateMeshRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMeshRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMeshRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateMeshRequest;

                    /**
                     * Creates a plain object from an UpdateMeshRequest message. Also converts values to other types if specified.
                     * @param message UpdateMeshRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateMeshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMeshRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateMeshRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteMeshRequest. */
                interface IDeleteMeshRequest {

                    /** DeleteMeshRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteMeshRequest. */
                class DeleteMeshRequest implements IDeleteMeshRequest {

                    /**
                     * Constructs a new DeleteMeshRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteMeshRequest);

                    /** DeleteMeshRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteMeshRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMeshRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteMeshRequest): google.cloud.networkservices.v1.DeleteMeshRequest;

                    /**
                     * Encodes the specified DeleteMeshRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteMeshRequest.verify|verify} messages.
                     * @param message DeleteMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMeshRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteMeshRequest.verify|verify} messages.
                     * @param message DeleteMeshRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteMeshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMeshRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteMeshRequest;

                    /**
                     * Decodes a DeleteMeshRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMeshRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteMeshRequest;

                    /**
                     * Verifies a DeleteMeshRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMeshRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMeshRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteMeshRequest;

                    /**
                     * Creates a plain object from a DeleteMeshRequest message. Also converts values to other types if specified.
                     * @param message DeleteMeshRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteMeshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMeshRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteMeshRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a NetworkServices */
                class NetworkServices extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NetworkServices service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NetworkServices service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetworkServices;

                    /**
                     * Calls ListEndpointPolicies.
                     * @param request ListEndpointPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEndpointPoliciesResponse
                     */
                    public listEndpointPolicies(request: google.cloud.networkservices.v1.IListEndpointPoliciesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListEndpointPoliciesCallback): void;

                    /**
                     * Calls ListEndpointPolicies.
                     * @param request ListEndpointPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listEndpointPolicies(request: google.cloud.networkservices.v1.IListEndpointPoliciesRequest): Promise<google.cloud.networkservices.v1.ListEndpointPoliciesResponse>;

                    /**
                     * Calls GetEndpointPolicy.
                     * @param request GetEndpointPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EndpointPolicy
                     */
                    public getEndpointPolicy(request: google.cloud.networkservices.v1.IGetEndpointPolicyRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetEndpointPolicyCallback): void;

                    /**
                     * Calls GetEndpointPolicy.
                     * @param request GetEndpointPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getEndpointPolicy(request: google.cloud.networkservices.v1.IGetEndpointPolicyRequest): Promise<google.cloud.networkservices.v1.EndpointPolicy>;

                    /**
                     * Calls CreateEndpointPolicy.
                     * @param request CreateEndpointPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEndpointPolicy(request: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateEndpointPolicyCallback): void;

                    /**
                     * Calls CreateEndpointPolicy.
                     * @param request CreateEndpointPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createEndpointPolicy(request: google.cloud.networkservices.v1.ICreateEndpointPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateEndpointPolicy.
                     * @param request UpdateEndpointPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateEndpointPolicy(request: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateEndpointPolicyCallback): void;

                    /**
                     * Calls UpdateEndpointPolicy.
                     * @param request UpdateEndpointPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateEndpointPolicy(request: google.cloud.networkservices.v1.IUpdateEndpointPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEndpointPolicy.
                     * @param request DeleteEndpointPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEndpointPolicy(request: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteEndpointPolicyCallback): void;

                    /**
                     * Calls DeleteEndpointPolicy.
                     * @param request DeleteEndpointPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEndpointPolicy(request: google.cloud.networkservices.v1.IDeleteEndpointPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListGateways.
                     * @param request ListGatewaysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGatewaysResponse
                     */
                    public listGateways(request: google.cloud.networkservices.v1.IListGatewaysRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListGatewaysCallback): void;

                    /**
                     * Calls ListGateways.
                     * @param request ListGatewaysRequest message or plain object
                     * @returns Promise
                     */
                    public listGateways(request: google.cloud.networkservices.v1.IListGatewaysRequest): Promise<google.cloud.networkservices.v1.ListGatewaysResponse>;

                    /**
                     * Calls GetGateway.
                     * @param request GetGatewayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Gateway
                     */
                    public getGateway(request: google.cloud.networkservices.v1.IGetGatewayRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetGatewayCallback): void;

                    /**
                     * Calls GetGateway.
                     * @param request GetGatewayRequest message or plain object
                     * @returns Promise
                     */
                    public getGateway(request: google.cloud.networkservices.v1.IGetGatewayRequest): Promise<google.cloud.networkservices.v1.Gateway>;

                    /**
                     * Calls CreateGateway.
                     * @param request CreateGatewayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGateway(request: google.cloud.networkservices.v1.ICreateGatewayRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateGatewayCallback): void;

                    /**
                     * Calls CreateGateway.
                     * @param request CreateGatewayRequest message or plain object
                     * @returns Promise
                     */
                    public createGateway(request: google.cloud.networkservices.v1.ICreateGatewayRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGateway.
                     * @param request UpdateGatewayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGateway(request: google.cloud.networkservices.v1.IUpdateGatewayRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateGatewayCallback): void;

                    /**
                     * Calls UpdateGateway.
                     * @param request UpdateGatewayRequest message or plain object
                     * @returns Promise
                     */
                    public updateGateway(request: google.cloud.networkservices.v1.IUpdateGatewayRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGateway.
                     * @param request DeleteGatewayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGateway(request: google.cloud.networkservices.v1.IDeleteGatewayRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteGatewayCallback): void;

                    /**
                     * Calls DeleteGateway.
                     * @param request DeleteGatewayRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGateway(request: google.cloud.networkservices.v1.IDeleteGatewayRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListGrpcRoutes.
                     * @param request ListGrpcRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGrpcRoutesResponse
                     */
                    public listGrpcRoutes(request: google.cloud.networkservices.v1.IListGrpcRoutesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListGrpcRoutesCallback): void;

                    /**
                     * Calls ListGrpcRoutes.
                     * @param request ListGrpcRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listGrpcRoutes(request: google.cloud.networkservices.v1.IListGrpcRoutesRequest): Promise<google.cloud.networkservices.v1.ListGrpcRoutesResponse>;

                    /**
                     * Calls GetGrpcRoute.
                     * @param request GetGrpcRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GrpcRoute
                     */
                    public getGrpcRoute(request: google.cloud.networkservices.v1.IGetGrpcRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetGrpcRouteCallback): void;

                    /**
                     * Calls GetGrpcRoute.
                     * @param request GetGrpcRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getGrpcRoute(request: google.cloud.networkservices.v1.IGetGrpcRouteRequest): Promise<google.cloud.networkservices.v1.GrpcRoute>;

                    /**
                     * Calls CreateGrpcRoute.
                     * @param request CreateGrpcRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGrpcRoute(request: google.cloud.networkservices.v1.ICreateGrpcRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateGrpcRouteCallback): void;

                    /**
                     * Calls CreateGrpcRoute.
                     * @param request CreateGrpcRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createGrpcRoute(request: google.cloud.networkservices.v1.ICreateGrpcRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGrpcRoute.
                     * @param request UpdateGrpcRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGrpcRoute(request: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateGrpcRouteCallback): void;

                    /**
                     * Calls UpdateGrpcRoute.
                     * @param request UpdateGrpcRouteRequest message or plain object
                     * @returns Promise
                     */
                    public updateGrpcRoute(request: google.cloud.networkservices.v1.IUpdateGrpcRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGrpcRoute.
                     * @param request DeleteGrpcRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGrpcRoute(request: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteGrpcRouteCallback): void;

                    /**
                     * Calls DeleteGrpcRoute.
                     * @param request DeleteGrpcRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGrpcRoute(request: google.cloud.networkservices.v1.IDeleteGrpcRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListHttpRoutes.
                     * @param request ListHttpRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHttpRoutesResponse
                     */
                    public listHttpRoutes(request: google.cloud.networkservices.v1.IListHttpRoutesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListHttpRoutesCallback): void;

                    /**
                     * Calls ListHttpRoutes.
                     * @param request ListHttpRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listHttpRoutes(request: google.cloud.networkservices.v1.IListHttpRoutesRequest): Promise<google.cloud.networkservices.v1.ListHttpRoutesResponse>;

                    /**
                     * Calls GetHttpRoute.
                     * @param request GetHttpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HttpRoute
                     */
                    public getHttpRoute(request: google.cloud.networkservices.v1.IGetHttpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetHttpRouteCallback): void;

                    /**
                     * Calls GetHttpRoute.
                     * @param request GetHttpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getHttpRoute(request: google.cloud.networkservices.v1.IGetHttpRouteRequest): Promise<google.cloud.networkservices.v1.HttpRoute>;

                    /**
                     * Calls CreateHttpRoute.
                     * @param request CreateHttpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHttpRoute(request: google.cloud.networkservices.v1.ICreateHttpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateHttpRouteCallback): void;

                    /**
                     * Calls CreateHttpRoute.
                     * @param request CreateHttpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createHttpRoute(request: google.cloud.networkservices.v1.ICreateHttpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateHttpRoute.
                     * @param request UpdateHttpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateHttpRoute(request: google.cloud.networkservices.v1.IUpdateHttpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateHttpRouteCallback): void;

                    /**
                     * Calls UpdateHttpRoute.
                     * @param request UpdateHttpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public updateHttpRoute(request: google.cloud.networkservices.v1.IUpdateHttpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteHttpRoute.
                     * @param request DeleteHttpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteHttpRoute(request: google.cloud.networkservices.v1.IDeleteHttpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteHttpRouteCallback): void;

                    /**
                     * Calls DeleteHttpRoute.
                     * @param request DeleteHttpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteHttpRoute(request: google.cloud.networkservices.v1.IDeleteHttpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTcpRoutes.
                     * @param request ListTcpRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTcpRoutesResponse
                     */
                    public listTcpRoutes(request: google.cloud.networkservices.v1.IListTcpRoutesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListTcpRoutesCallback): void;

                    /**
                     * Calls ListTcpRoutes.
                     * @param request ListTcpRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listTcpRoutes(request: google.cloud.networkservices.v1.IListTcpRoutesRequest): Promise<google.cloud.networkservices.v1.ListTcpRoutesResponse>;

                    /**
                     * Calls GetTcpRoute.
                     * @param request GetTcpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TcpRoute
                     */
                    public getTcpRoute(request: google.cloud.networkservices.v1.IGetTcpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetTcpRouteCallback): void;

                    /**
                     * Calls GetTcpRoute.
                     * @param request GetTcpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getTcpRoute(request: google.cloud.networkservices.v1.IGetTcpRouteRequest): Promise<google.cloud.networkservices.v1.TcpRoute>;

                    /**
                     * Calls CreateTcpRoute.
                     * @param request CreateTcpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTcpRoute(request: google.cloud.networkservices.v1.ICreateTcpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateTcpRouteCallback): void;

                    /**
                     * Calls CreateTcpRoute.
                     * @param request CreateTcpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createTcpRoute(request: google.cloud.networkservices.v1.ICreateTcpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTcpRoute.
                     * @param request UpdateTcpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTcpRoute(request: google.cloud.networkservices.v1.IUpdateTcpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateTcpRouteCallback): void;

                    /**
                     * Calls UpdateTcpRoute.
                     * @param request UpdateTcpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public updateTcpRoute(request: google.cloud.networkservices.v1.IUpdateTcpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTcpRoute.
                     * @param request DeleteTcpRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTcpRoute(request: google.cloud.networkservices.v1.IDeleteTcpRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteTcpRouteCallback): void;

                    /**
                     * Calls DeleteTcpRoute.
                     * @param request DeleteTcpRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTcpRoute(request: google.cloud.networkservices.v1.IDeleteTcpRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTlsRoutes.
                     * @param request ListTlsRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTlsRoutesResponse
                     */
                    public listTlsRoutes(request: google.cloud.networkservices.v1.IListTlsRoutesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListTlsRoutesCallback): void;

                    /**
                     * Calls ListTlsRoutes.
                     * @param request ListTlsRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listTlsRoutes(request: google.cloud.networkservices.v1.IListTlsRoutesRequest): Promise<google.cloud.networkservices.v1.ListTlsRoutesResponse>;

                    /**
                     * Calls GetTlsRoute.
                     * @param request GetTlsRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TlsRoute
                     */
                    public getTlsRoute(request: google.cloud.networkservices.v1.IGetTlsRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetTlsRouteCallback): void;

                    /**
                     * Calls GetTlsRoute.
                     * @param request GetTlsRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getTlsRoute(request: google.cloud.networkservices.v1.IGetTlsRouteRequest): Promise<google.cloud.networkservices.v1.TlsRoute>;

                    /**
                     * Calls CreateTlsRoute.
                     * @param request CreateTlsRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTlsRoute(request: google.cloud.networkservices.v1.ICreateTlsRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateTlsRouteCallback): void;

                    /**
                     * Calls CreateTlsRoute.
                     * @param request CreateTlsRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createTlsRoute(request: google.cloud.networkservices.v1.ICreateTlsRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTlsRoute.
                     * @param request UpdateTlsRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTlsRoute(request: google.cloud.networkservices.v1.IUpdateTlsRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateTlsRouteCallback): void;

                    /**
                     * Calls UpdateTlsRoute.
                     * @param request UpdateTlsRouteRequest message or plain object
                     * @returns Promise
                     */
                    public updateTlsRoute(request: google.cloud.networkservices.v1.IUpdateTlsRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTlsRoute.
                     * @param request DeleteTlsRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTlsRoute(request: google.cloud.networkservices.v1.IDeleteTlsRouteRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteTlsRouteCallback): void;

                    /**
                     * Calls DeleteTlsRoute.
                     * @param request DeleteTlsRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTlsRoute(request: google.cloud.networkservices.v1.IDeleteTlsRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServiceBindings.
                     * @param request ListServiceBindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServiceBindingsResponse
                     */
                    public listServiceBindings(request: google.cloud.networkservices.v1.IListServiceBindingsRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListServiceBindingsCallback): void;

                    /**
                     * Calls ListServiceBindings.
                     * @param request ListServiceBindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listServiceBindings(request: google.cloud.networkservices.v1.IListServiceBindingsRequest): Promise<google.cloud.networkservices.v1.ListServiceBindingsResponse>;

                    /**
                     * Calls GetServiceBinding.
                     * @param request GetServiceBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ServiceBinding
                     */
                    public getServiceBinding(request: google.cloud.networkservices.v1.IGetServiceBindingRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetServiceBindingCallback): void;

                    /**
                     * Calls GetServiceBinding.
                     * @param request GetServiceBindingRequest message or plain object
                     * @returns Promise
                     */
                    public getServiceBinding(request: google.cloud.networkservices.v1.IGetServiceBindingRequest): Promise<google.cloud.networkservices.v1.ServiceBinding>;

                    /**
                     * Calls CreateServiceBinding.
                     * @param request CreateServiceBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createServiceBinding(request: google.cloud.networkservices.v1.ICreateServiceBindingRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateServiceBindingCallback): void;

                    /**
                     * Calls CreateServiceBinding.
                     * @param request CreateServiceBindingRequest message or plain object
                     * @returns Promise
                     */
                    public createServiceBinding(request: google.cloud.networkservices.v1.ICreateServiceBindingRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteServiceBinding.
                     * @param request DeleteServiceBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteServiceBinding(request: google.cloud.networkservices.v1.IDeleteServiceBindingRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteServiceBindingCallback): void;

                    /**
                     * Calls DeleteServiceBinding.
                     * @param request DeleteServiceBindingRequest message or plain object
                     * @returns Promise
                     */
                    public deleteServiceBinding(request: google.cloud.networkservices.v1.IDeleteServiceBindingRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListMeshes.
                     * @param request ListMeshesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMeshesResponse
                     */
                    public listMeshes(request: google.cloud.networkservices.v1.IListMeshesRequest, callback: google.cloud.networkservices.v1.NetworkServices.ListMeshesCallback): void;

                    /**
                     * Calls ListMeshes.
                     * @param request ListMeshesRequest message or plain object
                     * @returns Promise
                     */
                    public listMeshes(request: google.cloud.networkservices.v1.IListMeshesRequest): Promise<google.cloud.networkservices.v1.ListMeshesResponse>;

                    /**
                     * Calls GetMesh.
                     * @param request GetMeshRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Mesh
                     */
                    public getMesh(request: google.cloud.networkservices.v1.IGetMeshRequest, callback: google.cloud.networkservices.v1.NetworkServices.GetMeshCallback): void;

                    /**
                     * Calls GetMesh.
                     * @param request GetMeshRequest message or plain object
                     * @returns Promise
                     */
                    public getMesh(request: google.cloud.networkservices.v1.IGetMeshRequest): Promise<google.cloud.networkservices.v1.Mesh>;

                    /**
                     * Calls CreateMesh.
                     * @param request CreateMeshRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMesh(request: google.cloud.networkservices.v1.ICreateMeshRequest, callback: google.cloud.networkservices.v1.NetworkServices.CreateMeshCallback): void;

                    /**
                     * Calls CreateMesh.
                     * @param request CreateMeshRequest message or plain object
                     * @returns Promise
                     */
                    public createMesh(request: google.cloud.networkservices.v1.ICreateMeshRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMesh.
                     * @param request UpdateMeshRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMesh(request: google.cloud.networkservices.v1.IUpdateMeshRequest, callback: google.cloud.networkservices.v1.NetworkServices.UpdateMeshCallback): void;

                    /**
                     * Calls UpdateMesh.
                     * @param request UpdateMeshRequest message or plain object
                     * @returns Promise
                     */
                    public updateMesh(request: google.cloud.networkservices.v1.IUpdateMeshRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteMesh.
                     * @param request DeleteMeshRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteMesh(request: google.cloud.networkservices.v1.IDeleteMeshRequest, callback: google.cloud.networkservices.v1.NetworkServices.DeleteMeshCallback): void;

                    /**
                     * Calls DeleteMesh.
                     * @param request DeleteMeshRequest message or plain object
                     * @returns Promise
                     */
                    public deleteMesh(request: google.cloud.networkservices.v1.IDeleteMeshRequest): Promise<google.longrunning.Operation>;
                }

                namespace NetworkServices {

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listEndpointPolicies}.
                     * @param error Error, if any
                     * @param [response] ListEndpointPoliciesResponse
                     */
                    type ListEndpointPoliciesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListEndpointPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getEndpointPolicy}.
                     * @param error Error, if any
                     * @param [response] EndpointPolicy
                     */
                    type GetEndpointPolicyCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.EndpointPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createEndpointPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEndpointPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateEndpointPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateEndpointPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteEndpointPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEndpointPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listGateways}.
                     * @param error Error, if any
                     * @param [response] ListGatewaysResponse
                     */
                    type ListGatewaysCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListGatewaysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getGateway}.
                     * @param error Error, if any
                     * @param [response] Gateway
                     */
                    type GetGatewayCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.Gateway) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createGateway}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGatewayCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateGateway}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGatewayCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteGateway}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGatewayCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listGrpcRoutes}.
                     * @param error Error, if any
                     * @param [response] ListGrpcRoutesResponse
                     */
                    type ListGrpcRoutesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListGrpcRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getGrpcRoute}.
                     * @param error Error, if any
                     * @param [response] GrpcRoute
                     */
                    type GetGrpcRouteCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.GrpcRoute) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createGrpcRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGrpcRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateGrpcRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGrpcRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteGrpcRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGrpcRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listHttpRoutes}.
                     * @param error Error, if any
                     * @param [response] ListHttpRoutesResponse
                     */
                    type ListHttpRoutesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListHttpRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getHttpRoute}.
                     * @param error Error, if any
                     * @param [response] HttpRoute
                     */
                    type GetHttpRouteCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.HttpRoute) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createHttpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHttpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateHttpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateHttpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteHttpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteHttpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listTcpRoutes}.
                     * @param error Error, if any
                     * @param [response] ListTcpRoutesResponse
                     */
                    type ListTcpRoutesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListTcpRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getTcpRoute}.
                     * @param error Error, if any
                     * @param [response] TcpRoute
                     */
                    type GetTcpRouteCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.TcpRoute) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createTcpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTcpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateTcpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTcpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteTcpRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTcpRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listTlsRoutes}.
                     * @param error Error, if any
                     * @param [response] ListTlsRoutesResponse
                     */
                    type ListTlsRoutesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListTlsRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getTlsRoute}.
                     * @param error Error, if any
                     * @param [response] TlsRoute
                     */
                    type GetTlsRouteCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.TlsRoute) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createTlsRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTlsRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateTlsRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTlsRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteTlsRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTlsRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listServiceBindings}.
                     * @param error Error, if any
                     * @param [response] ListServiceBindingsResponse
                     */
                    type ListServiceBindingsCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListServiceBindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getServiceBinding}.
                     * @param error Error, if any
                     * @param [response] ServiceBinding
                     */
                    type GetServiceBindingCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ServiceBinding) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createServiceBinding}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteServiceBinding}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServiceBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|listMeshes}.
                     * @param error Error, if any
                     * @param [response] ListMeshesResponse
                     */
                    type ListMeshesCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.ListMeshesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|getMesh}.
                     * @param error Error, if any
                     * @param [response] Mesh
                     */
                    type GetMeshCallback = (error: (Error|null), response?: google.cloud.networkservices.v1.Mesh) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|createMesh}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMeshCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|updateMesh}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMeshCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkservices.v1.NetworkServices|deleteMesh}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteMeshCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ServiceBinding. */
                interface IServiceBinding {

                    /** ServiceBinding name */
                    name?: (string|null);

                    /** ServiceBinding description */
                    description?: (string|null);

                    /** ServiceBinding createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ServiceBinding updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServiceBinding service */
                    service?: (string|null);

                    /** ServiceBinding labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a ServiceBinding. */
                class ServiceBinding implements IServiceBinding {

                    /**
                     * Constructs a new ServiceBinding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IServiceBinding);

                    /** ServiceBinding name. */
                    public name: string;

                    /** ServiceBinding description. */
                    public description: string;

                    /** ServiceBinding createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ServiceBinding updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServiceBinding service. */
                    public service: string;

                    /** ServiceBinding labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new ServiceBinding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceBinding instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IServiceBinding): google.cloud.networkservices.v1.ServiceBinding;

                    /**
                     * Encodes the specified ServiceBinding message. Does not implicitly {@link google.cloud.networkservices.v1.ServiceBinding.verify|verify} messages.
                     * @param message ServiceBinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IServiceBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceBinding message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ServiceBinding.verify|verify} messages.
                     * @param message ServiceBinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IServiceBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceBinding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceBinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ServiceBinding;

                    /**
                     * Decodes a ServiceBinding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceBinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ServiceBinding;

                    /**
                     * Verifies a ServiceBinding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceBinding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceBinding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ServiceBinding;

                    /**
                     * Creates a plain object from a ServiceBinding message. Also converts values to other types if specified.
                     * @param message ServiceBinding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ServiceBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceBinding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceBinding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServiceBindingsRequest. */
                interface IListServiceBindingsRequest {

                    /** ListServiceBindingsRequest parent */
                    parent?: (string|null);

                    /** ListServiceBindingsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServiceBindingsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListServiceBindingsRequest. */
                class ListServiceBindingsRequest implements IListServiceBindingsRequest {

                    /**
                     * Constructs a new ListServiceBindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListServiceBindingsRequest);

                    /** ListServiceBindingsRequest parent. */
                    public parent: string;

                    /** ListServiceBindingsRequest pageSize. */
                    public pageSize: number;

                    /** ListServiceBindingsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListServiceBindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceBindingsRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListServiceBindingsRequest): google.cloud.networkservices.v1.ListServiceBindingsRequest;

                    /**
                     * Encodes the specified ListServiceBindingsRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListServiceBindingsRequest.verify|verify} messages.
                     * @param message ListServiceBindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListServiceBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceBindingsRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListServiceBindingsRequest.verify|verify} messages.
                     * @param message ListServiceBindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListServiceBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceBindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceBindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListServiceBindingsRequest;

                    /**
                     * Decodes a ListServiceBindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceBindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListServiceBindingsRequest;

                    /**
                     * Verifies a ListServiceBindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceBindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceBindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListServiceBindingsRequest;

                    /**
                     * Creates a plain object from a ListServiceBindingsRequest message. Also converts values to other types if specified.
                     * @param message ListServiceBindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListServiceBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceBindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServiceBindingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServiceBindingsResponse. */
                interface IListServiceBindingsResponse {

                    /** ListServiceBindingsResponse serviceBindings */
                    serviceBindings?: (google.cloud.networkservices.v1.IServiceBinding[]|null);

                    /** ListServiceBindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServiceBindingsResponse. */
                class ListServiceBindingsResponse implements IListServiceBindingsResponse {

                    /**
                     * Constructs a new ListServiceBindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListServiceBindingsResponse);

                    /** ListServiceBindingsResponse serviceBindings. */
                    public serviceBindings: google.cloud.networkservices.v1.IServiceBinding[];

                    /** ListServiceBindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServiceBindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceBindingsResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListServiceBindingsResponse): google.cloud.networkservices.v1.ListServiceBindingsResponse;

                    /**
                     * Encodes the specified ListServiceBindingsResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListServiceBindingsResponse.verify|verify} messages.
                     * @param message ListServiceBindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListServiceBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceBindingsResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListServiceBindingsResponse.verify|verify} messages.
                     * @param message ListServiceBindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListServiceBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceBindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceBindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListServiceBindingsResponse;

                    /**
                     * Decodes a ListServiceBindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceBindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListServiceBindingsResponse;

                    /**
                     * Verifies a ListServiceBindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceBindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceBindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListServiceBindingsResponse;

                    /**
                     * Creates a plain object from a ListServiceBindingsResponse message. Also converts values to other types if specified.
                     * @param message ListServiceBindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListServiceBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceBindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServiceBindingsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetServiceBindingRequest. */
                interface IGetServiceBindingRequest {

                    /** GetServiceBindingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServiceBindingRequest. */
                class GetServiceBindingRequest implements IGetServiceBindingRequest {

                    /**
                     * Constructs a new GetServiceBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetServiceBindingRequest);

                    /** GetServiceBindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceBindingRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetServiceBindingRequest): google.cloud.networkservices.v1.GetServiceBindingRequest;

                    /**
                     * Encodes the specified GetServiceBindingRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetServiceBindingRequest.verify|verify} messages.
                     * @param message GetServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceBindingRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetServiceBindingRequest.verify|verify} messages.
                     * @param message GetServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetServiceBindingRequest;

                    /**
                     * Decodes a GetServiceBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetServiceBindingRequest;

                    /**
                     * Verifies a GetServiceBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetServiceBindingRequest;

                    /**
                     * Creates a plain object from a GetServiceBindingRequest message. Also converts values to other types if specified.
                     * @param message GetServiceBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetServiceBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetServiceBindingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateServiceBindingRequest. */
                interface ICreateServiceBindingRequest {

                    /** CreateServiceBindingRequest parent */
                    parent?: (string|null);

                    /** CreateServiceBindingRequest serviceBindingId */
                    serviceBindingId?: (string|null);

                    /** CreateServiceBindingRequest serviceBinding */
                    serviceBinding?: (google.cloud.networkservices.v1.IServiceBinding|null);
                }

                /** Represents a CreateServiceBindingRequest. */
                class CreateServiceBindingRequest implements ICreateServiceBindingRequest {

                    /**
                     * Constructs a new CreateServiceBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateServiceBindingRequest);

                    /** CreateServiceBindingRequest parent. */
                    public parent: string;

                    /** CreateServiceBindingRequest serviceBindingId. */
                    public serviceBindingId: string;

                    /** CreateServiceBindingRequest serviceBinding. */
                    public serviceBinding?: (google.cloud.networkservices.v1.IServiceBinding|null);

                    /**
                     * Creates a new CreateServiceBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceBindingRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateServiceBindingRequest): google.cloud.networkservices.v1.CreateServiceBindingRequest;

                    /**
                     * Encodes the specified CreateServiceBindingRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateServiceBindingRequest.verify|verify} messages.
                     * @param message CreateServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceBindingRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateServiceBindingRequest.verify|verify} messages.
                     * @param message CreateServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateServiceBindingRequest;

                    /**
                     * Decodes a CreateServiceBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateServiceBindingRequest;

                    /**
                     * Verifies a CreateServiceBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateServiceBindingRequest;

                    /**
                     * Creates a plain object from a CreateServiceBindingRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateServiceBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateServiceBindingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteServiceBindingRequest. */
                interface IDeleteServiceBindingRequest {

                    /** DeleteServiceBindingRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteServiceBindingRequest. */
                class DeleteServiceBindingRequest implements IDeleteServiceBindingRequest {

                    /**
                     * Constructs a new DeleteServiceBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteServiceBindingRequest);

                    /** DeleteServiceBindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteServiceBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServiceBindingRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteServiceBindingRequest): google.cloud.networkservices.v1.DeleteServiceBindingRequest;

                    /**
                     * Encodes the specified DeleteServiceBindingRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteServiceBindingRequest.verify|verify} messages.
                     * @param message DeleteServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServiceBindingRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteServiceBindingRequest.verify|verify} messages.
                     * @param message DeleteServiceBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteServiceBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServiceBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteServiceBindingRequest;

                    /**
                     * Decodes a DeleteServiceBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServiceBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteServiceBindingRequest;

                    /**
                     * Verifies a DeleteServiceBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServiceBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServiceBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteServiceBindingRequest;

                    /**
                     * Creates a plain object from a DeleteServiceBindingRequest message. Also converts values to other types if specified.
                     * @param message DeleteServiceBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteServiceBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServiceBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteServiceBindingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TcpRoute. */
                interface ITcpRoute {

                    /** TcpRoute name */
                    name?: (string|null);

                    /** TcpRoute selfLink */
                    selfLink?: (string|null);

                    /** TcpRoute createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TcpRoute updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TcpRoute description */
                    description?: (string|null);

                    /** TcpRoute rules */
                    rules?: (google.cloud.networkservices.v1.TcpRoute.IRouteRule[]|null);

                    /** TcpRoute meshes */
                    meshes?: (string[]|null);

                    /** TcpRoute gateways */
                    gateways?: (string[]|null);

                    /** TcpRoute labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a TcpRoute. */
                class TcpRoute implements ITcpRoute {

                    /**
                     * Constructs a new TcpRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ITcpRoute);

                    /** TcpRoute name. */
                    public name: string;

                    /** TcpRoute selfLink. */
                    public selfLink: string;

                    /** TcpRoute createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TcpRoute updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TcpRoute description. */
                    public description: string;

                    /** TcpRoute rules. */
                    public rules: google.cloud.networkservices.v1.TcpRoute.IRouteRule[];

                    /** TcpRoute meshes. */
                    public meshes: string[];

                    /** TcpRoute gateways. */
                    public gateways: string[];

                    /** TcpRoute labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new TcpRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TcpRoute instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ITcpRoute): google.cloud.networkservices.v1.TcpRoute;

                    /**
                     * Encodes the specified TcpRoute message. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.verify|verify} messages.
                     * @param message TcpRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ITcpRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TcpRoute message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.verify|verify} messages.
                     * @param message TcpRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ITcpRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TcpRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TcpRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TcpRoute;

                    /**
                     * Decodes a TcpRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TcpRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TcpRoute;

                    /**
                     * Verifies a TcpRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TcpRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TcpRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TcpRoute;

                    /**
                     * Creates a plain object from a TcpRoute message. Also converts values to other types if specified.
                     * @param message TcpRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.TcpRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TcpRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TcpRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TcpRoute {

                    /** Properties of a RouteRule. */
                    interface IRouteRule {

                        /** RouteRule matches */
                        matches?: (google.cloud.networkservices.v1.TcpRoute.IRouteMatch[]|null);

                        /** RouteRule action */
                        action?: (google.cloud.networkservices.v1.TcpRoute.IRouteAction|null);
                    }

                    /** Represents a RouteRule. */
                    class RouteRule implements IRouteRule {

                        /**
                         * Constructs a new RouteRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteRule);

                        /** RouteRule matches. */
                        public matches: google.cloud.networkservices.v1.TcpRoute.IRouteMatch[];

                        /** RouteRule action. */
                        public action?: (google.cloud.networkservices.v1.TcpRoute.IRouteAction|null);

                        /**
                         * Creates a new RouteRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteRule instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteRule): google.cloud.networkservices.v1.TcpRoute.RouteRule;

                        /**
                         * Encodes the specified RouteRule message. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TcpRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteRule message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TcpRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TcpRoute.RouteRule;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TcpRoute.RouteRule;

                        /**
                         * Verifies a RouteRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TcpRoute.RouteRule;

                        /**
                         * Creates a plain object from a RouteRule message. Also converts values to other types if specified.
                         * @param message RouteRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TcpRoute.RouteRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteMatch. */
                    interface IRouteMatch {

                        /** RouteMatch address */
                        address?: (string|null);

                        /** RouteMatch port */
                        port?: (string|null);
                    }

                    /** Represents a RouteMatch. */
                    class RouteMatch implements IRouteMatch {

                        /**
                         * Constructs a new RouteMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteMatch);

                        /** RouteMatch address. */
                        public address: string;

                        /** RouteMatch port. */
                        public port: string;

                        /**
                         * Creates a new RouteMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteMatch): google.cloud.networkservices.v1.TcpRoute.RouteMatch;

                        /**
                         * Encodes the specified RouteMatch message. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TcpRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TcpRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TcpRoute.RouteMatch;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TcpRoute.RouteMatch;

                        /**
                         * Verifies a RouteMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TcpRoute.RouteMatch;

                        /**
                         * Creates a plain object from a RouteMatch message. Also converts values to other types if specified.
                         * @param message RouteMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TcpRoute.RouteMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteAction. */
                    interface IRouteAction {

                        /** RouteAction destinations */
                        destinations?: (google.cloud.networkservices.v1.TcpRoute.IRouteDestination[]|null);

                        /** RouteAction originalDestination */
                        originalDestination?: (boolean|null);
                    }

                    /** Represents a RouteAction. */
                    class RouteAction implements IRouteAction {

                        /**
                         * Constructs a new RouteAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteAction);

                        /** RouteAction destinations. */
                        public destinations: google.cloud.networkservices.v1.TcpRoute.IRouteDestination[];

                        /** RouteAction originalDestination. */
                        public originalDestination: boolean;

                        /**
                         * Creates a new RouteAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteAction instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteAction): google.cloud.networkservices.v1.TcpRoute.RouteAction;

                        /**
                         * Encodes the specified RouteAction message. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TcpRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteAction message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TcpRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TcpRoute.RouteAction;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TcpRoute.RouteAction;

                        /**
                         * Verifies a RouteAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TcpRoute.RouteAction;

                        /**
                         * Creates a plain object from a RouteAction message. Also converts values to other types if specified.
                         * @param message RouteAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TcpRoute.RouteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteDestination. */
                    interface IRouteDestination {

                        /** RouteDestination serviceName */
                        serviceName?: (string|null);

                        /** RouteDestination weight */
                        weight?: (number|null);
                    }

                    /** Represents a RouteDestination. */
                    class RouteDestination implements IRouteDestination {

                        /**
                         * Constructs a new RouteDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteDestination);

                        /** RouteDestination serviceName. */
                        public serviceName: string;

                        /** RouteDestination weight. */
                        public weight: number;

                        /**
                         * Creates a new RouteDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteDestination instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TcpRoute.IRouteDestination): google.cloud.networkservices.v1.TcpRoute.RouteDestination;

                        /**
                         * Encodes the specified RouteDestination message. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteDestination.verify|verify} messages.
                         * @param message RouteDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TcpRoute.IRouteDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteDestination message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TcpRoute.RouteDestination.verify|verify} messages.
                         * @param message RouteDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TcpRoute.IRouteDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TcpRoute.RouteDestination;

                        /**
                         * Decodes a RouteDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TcpRoute.RouteDestination;

                        /**
                         * Verifies a RouteDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TcpRoute.RouteDestination;

                        /**
                         * Creates a plain object from a RouteDestination message. Also converts values to other types if specified.
                         * @param message RouteDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TcpRoute.RouteDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteDestination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListTcpRoutesRequest. */
                interface IListTcpRoutesRequest {

                    /** ListTcpRoutesRequest parent */
                    parent?: (string|null);

                    /** ListTcpRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTcpRoutesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTcpRoutesRequest. */
                class ListTcpRoutesRequest implements IListTcpRoutesRequest {

                    /**
                     * Constructs a new ListTcpRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListTcpRoutesRequest);

                    /** ListTcpRoutesRequest parent. */
                    public parent: string;

                    /** ListTcpRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListTcpRoutesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTcpRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTcpRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListTcpRoutesRequest): google.cloud.networkservices.v1.ListTcpRoutesRequest;

                    /**
                     * Encodes the specified ListTcpRoutesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListTcpRoutesRequest.verify|verify} messages.
                     * @param message ListTcpRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListTcpRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTcpRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListTcpRoutesRequest.verify|verify} messages.
                     * @param message ListTcpRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListTcpRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTcpRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTcpRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListTcpRoutesRequest;

                    /**
                     * Decodes a ListTcpRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTcpRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListTcpRoutesRequest;

                    /**
                     * Verifies a ListTcpRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTcpRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTcpRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListTcpRoutesRequest;

                    /**
                     * Creates a plain object from a ListTcpRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListTcpRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListTcpRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTcpRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTcpRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTcpRoutesResponse. */
                interface IListTcpRoutesResponse {

                    /** ListTcpRoutesResponse tcpRoutes */
                    tcpRoutes?: (google.cloud.networkservices.v1.ITcpRoute[]|null);

                    /** ListTcpRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTcpRoutesResponse. */
                class ListTcpRoutesResponse implements IListTcpRoutesResponse {

                    /**
                     * Constructs a new ListTcpRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListTcpRoutesResponse);

                    /** ListTcpRoutesResponse tcpRoutes. */
                    public tcpRoutes: google.cloud.networkservices.v1.ITcpRoute[];

                    /** ListTcpRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTcpRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTcpRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListTcpRoutesResponse): google.cloud.networkservices.v1.ListTcpRoutesResponse;

                    /**
                     * Encodes the specified ListTcpRoutesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListTcpRoutesResponse.verify|verify} messages.
                     * @param message ListTcpRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListTcpRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTcpRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListTcpRoutesResponse.verify|verify} messages.
                     * @param message ListTcpRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListTcpRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTcpRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTcpRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListTcpRoutesResponse;

                    /**
                     * Decodes a ListTcpRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTcpRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListTcpRoutesResponse;

                    /**
                     * Verifies a ListTcpRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTcpRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTcpRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListTcpRoutesResponse;

                    /**
                     * Creates a plain object from a ListTcpRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListTcpRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListTcpRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTcpRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTcpRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTcpRouteRequest. */
                interface IGetTcpRouteRequest {

                    /** GetTcpRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTcpRouteRequest. */
                class GetTcpRouteRequest implements IGetTcpRouteRequest {

                    /**
                     * Constructs a new GetTcpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetTcpRouteRequest);

                    /** GetTcpRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTcpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTcpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetTcpRouteRequest): google.cloud.networkservices.v1.GetTcpRouteRequest;

                    /**
                     * Encodes the specified GetTcpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetTcpRouteRequest.verify|verify} messages.
                     * @param message GetTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTcpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetTcpRouteRequest.verify|verify} messages.
                     * @param message GetTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTcpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetTcpRouteRequest;

                    /**
                     * Decodes a GetTcpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetTcpRouteRequest;

                    /**
                     * Verifies a GetTcpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTcpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTcpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetTcpRouteRequest;

                    /**
                     * Creates a plain object from a GetTcpRouteRequest message. Also converts values to other types if specified.
                     * @param message GetTcpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetTcpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTcpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTcpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTcpRouteRequest. */
                interface ICreateTcpRouteRequest {

                    /** CreateTcpRouteRequest parent */
                    parent?: (string|null);

                    /** CreateTcpRouteRequest tcpRouteId */
                    tcpRouteId?: (string|null);

                    /** CreateTcpRouteRequest tcpRoute */
                    tcpRoute?: (google.cloud.networkservices.v1.ITcpRoute|null);
                }

                /** Represents a CreateTcpRouteRequest. */
                class CreateTcpRouteRequest implements ICreateTcpRouteRequest {

                    /**
                     * Constructs a new CreateTcpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateTcpRouteRequest);

                    /** CreateTcpRouteRequest parent. */
                    public parent: string;

                    /** CreateTcpRouteRequest tcpRouteId. */
                    public tcpRouteId: string;

                    /** CreateTcpRouteRequest tcpRoute. */
                    public tcpRoute?: (google.cloud.networkservices.v1.ITcpRoute|null);

                    /**
                     * Creates a new CreateTcpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTcpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateTcpRouteRequest): google.cloud.networkservices.v1.CreateTcpRouteRequest;

                    /**
                     * Encodes the specified CreateTcpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateTcpRouteRequest.verify|verify} messages.
                     * @param message CreateTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTcpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateTcpRouteRequest.verify|verify} messages.
                     * @param message CreateTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTcpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateTcpRouteRequest;

                    /**
                     * Decodes a CreateTcpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateTcpRouteRequest;

                    /**
                     * Verifies a CreateTcpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTcpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTcpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateTcpRouteRequest;

                    /**
                     * Creates a plain object from a CreateTcpRouteRequest message. Also converts values to other types if specified.
                     * @param message CreateTcpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateTcpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTcpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTcpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTcpRouteRequest. */
                interface IUpdateTcpRouteRequest {

                    /** UpdateTcpRouteRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTcpRouteRequest tcpRoute */
                    tcpRoute?: (google.cloud.networkservices.v1.ITcpRoute|null);
                }

                /** Represents an UpdateTcpRouteRequest. */
                class UpdateTcpRouteRequest implements IUpdateTcpRouteRequest {

                    /**
                     * Constructs a new UpdateTcpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateTcpRouteRequest);

                    /** UpdateTcpRouteRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTcpRouteRequest tcpRoute. */
                    public tcpRoute?: (google.cloud.networkservices.v1.ITcpRoute|null);

                    /**
                     * Creates a new UpdateTcpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTcpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateTcpRouteRequest): google.cloud.networkservices.v1.UpdateTcpRouteRequest;

                    /**
                     * Encodes the specified UpdateTcpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateTcpRouteRequest.verify|verify} messages.
                     * @param message UpdateTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTcpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateTcpRouteRequest.verify|verify} messages.
                     * @param message UpdateTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTcpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateTcpRouteRequest;

                    /**
                     * Decodes an UpdateTcpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateTcpRouteRequest;

                    /**
                     * Verifies an UpdateTcpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTcpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTcpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateTcpRouteRequest;

                    /**
                     * Creates a plain object from an UpdateTcpRouteRequest message. Also converts values to other types if specified.
                     * @param message UpdateTcpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateTcpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTcpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTcpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTcpRouteRequest. */
                interface IDeleteTcpRouteRequest {

                    /** DeleteTcpRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTcpRouteRequest. */
                class DeleteTcpRouteRequest implements IDeleteTcpRouteRequest {

                    /**
                     * Constructs a new DeleteTcpRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteTcpRouteRequest);

                    /** DeleteTcpRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTcpRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTcpRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteTcpRouteRequest): google.cloud.networkservices.v1.DeleteTcpRouteRequest;

                    /**
                     * Encodes the specified DeleteTcpRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteTcpRouteRequest.verify|verify} messages.
                     * @param message DeleteTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTcpRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteTcpRouteRequest.verify|verify} messages.
                     * @param message DeleteTcpRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteTcpRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTcpRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteTcpRouteRequest;

                    /**
                     * Decodes a DeleteTcpRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTcpRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteTcpRouteRequest;

                    /**
                     * Verifies a DeleteTcpRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTcpRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTcpRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteTcpRouteRequest;

                    /**
                     * Creates a plain object from a DeleteTcpRouteRequest message. Also converts values to other types if specified.
                     * @param message DeleteTcpRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteTcpRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTcpRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTcpRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TlsRoute. */
                interface ITlsRoute {

                    /** TlsRoute name */
                    name?: (string|null);

                    /** TlsRoute selfLink */
                    selfLink?: (string|null);

                    /** TlsRoute createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TlsRoute updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TlsRoute description */
                    description?: (string|null);

                    /** TlsRoute rules */
                    rules?: (google.cloud.networkservices.v1.TlsRoute.IRouteRule[]|null);

                    /** TlsRoute meshes */
                    meshes?: (string[]|null);

                    /** TlsRoute gateways */
                    gateways?: (string[]|null);
                }

                /** Represents a TlsRoute. */
                class TlsRoute implements ITlsRoute {

                    /**
                     * Constructs a new TlsRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ITlsRoute);

                    /** TlsRoute name. */
                    public name: string;

                    /** TlsRoute selfLink. */
                    public selfLink: string;

                    /** TlsRoute createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TlsRoute updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TlsRoute description. */
                    public description: string;

                    /** TlsRoute rules. */
                    public rules: google.cloud.networkservices.v1.TlsRoute.IRouteRule[];

                    /** TlsRoute meshes. */
                    public meshes: string[];

                    /** TlsRoute gateways. */
                    public gateways: string[];

                    /**
                     * Creates a new TlsRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TlsRoute instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ITlsRoute): google.cloud.networkservices.v1.TlsRoute;

                    /**
                     * Encodes the specified TlsRoute message. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.verify|verify} messages.
                     * @param message TlsRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ITlsRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TlsRoute message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.verify|verify} messages.
                     * @param message TlsRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ITlsRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TlsRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TlsRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TlsRoute;

                    /**
                     * Decodes a TlsRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TlsRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TlsRoute;

                    /**
                     * Verifies a TlsRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TlsRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TlsRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TlsRoute;

                    /**
                     * Creates a plain object from a TlsRoute message. Also converts values to other types if specified.
                     * @param message TlsRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.TlsRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TlsRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TlsRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TlsRoute {

                    /** Properties of a RouteRule. */
                    interface IRouteRule {

                        /** RouteRule matches */
                        matches?: (google.cloud.networkservices.v1.TlsRoute.IRouteMatch[]|null);

                        /** RouteRule action */
                        action?: (google.cloud.networkservices.v1.TlsRoute.IRouteAction|null);
                    }

                    /** Represents a RouteRule. */
                    class RouteRule implements IRouteRule {

                        /**
                         * Constructs a new RouteRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteRule);

                        /** RouteRule matches. */
                        public matches: google.cloud.networkservices.v1.TlsRoute.IRouteMatch[];

                        /** RouteRule action. */
                        public action?: (google.cloud.networkservices.v1.TlsRoute.IRouteAction|null);

                        /**
                         * Creates a new RouteRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteRule instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteRule): google.cloud.networkservices.v1.TlsRoute.RouteRule;

                        /**
                         * Encodes the specified RouteRule message. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TlsRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteRule message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteRule.verify|verify} messages.
                         * @param message RouteRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TlsRoute.IRouteRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TlsRoute.RouteRule;

                        /**
                         * Decodes a RouteRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TlsRoute.RouteRule;

                        /**
                         * Verifies a RouteRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TlsRoute.RouteRule;

                        /**
                         * Creates a plain object from a RouteRule message. Also converts values to other types if specified.
                         * @param message RouteRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TlsRoute.RouteRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteMatch. */
                    interface IRouteMatch {

                        /** RouteMatch sniHost */
                        sniHost?: (string[]|null);

                        /** RouteMatch alpn */
                        alpn?: (string[]|null);
                    }

                    /** Represents a RouteMatch. */
                    class RouteMatch implements IRouteMatch {

                        /**
                         * Constructs a new RouteMatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteMatch);

                        /** RouteMatch sniHost. */
                        public sniHost: string[];

                        /** RouteMatch alpn. */
                        public alpn: string[];

                        /**
                         * Creates a new RouteMatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteMatch instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteMatch): google.cloud.networkservices.v1.TlsRoute.RouteMatch;

                        /**
                         * Encodes the specified RouteMatch message. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TlsRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteMatch message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteMatch.verify|verify} messages.
                         * @param message RouteMatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TlsRoute.IRouteMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TlsRoute.RouteMatch;

                        /**
                         * Decodes a RouteMatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteMatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TlsRoute.RouteMatch;

                        /**
                         * Verifies a RouteMatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteMatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteMatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TlsRoute.RouteMatch;

                        /**
                         * Creates a plain object from a RouteMatch message. Also converts values to other types if specified.
                         * @param message RouteMatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TlsRoute.RouteMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteMatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteMatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteAction. */
                    interface IRouteAction {

                        /** RouteAction destinations */
                        destinations?: (google.cloud.networkservices.v1.TlsRoute.IRouteDestination[]|null);
                    }

                    /** Represents a RouteAction. */
                    class RouteAction implements IRouteAction {

                        /**
                         * Constructs a new RouteAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteAction);

                        /** RouteAction destinations. */
                        public destinations: google.cloud.networkservices.v1.TlsRoute.IRouteDestination[];

                        /**
                         * Creates a new RouteAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteAction instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteAction): google.cloud.networkservices.v1.TlsRoute.RouteAction;

                        /**
                         * Encodes the specified RouteAction message. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TlsRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteAction message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteAction.verify|verify} messages.
                         * @param message RouteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TlsRoute.IRouteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TlsRoute.RouteAction;

                        /**
                         * Decodes a RouteAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TlsRoute.RouteAction;

                        /**
                         * Verifies a RouteAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TlsRoute.RouteAction;

                        /**
                         * Creates a plain object from a RouteAction message. Also converts values to other types if specified.
                         * @param message RouteAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TlsRoute.RouteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RouteDestination. */
                    interface IRouteDestination {

                        /** RouteDestination serviceName */
                        serviceName?: (string|null);

                        /** RouteDestination weight */
                        weight?: (number|null);
                    }

                    /** Represents a RouteDestination. */
                    class RouteDestination implements IRouteDestination {

                        /**
                         * Constructs a new RouteDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteDestination);

                        /** RouteDestination serviceName. */
                        public serviceName: string;

                        /** RouteDestination weight. */
                        public weight: number;

                        /**
                         * Creates a new RouteDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteDestination instance
                         */
                        public static create(properties?: google.cloud.networkservices.v1.TlsRoute.IRouteDestination): google.cloud.networkservices.v1.TlsRoute.RouteDestination;

                        /**
                         * Encodes the specified RouteDestination message. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteDestination.verify|verify} messages.
                         * @param message RouteDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkservices.v1.TlsRoute.IRouteDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteDestination message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.TlsRoute.RouteDestination.verify|verify} messages.
                         * @param message RouteDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkservices.v1.TlsRoute.IRouteDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.TlsRoute.RouteDestination;

                        /**
                         * Decodes a RouteDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.TlsRoute.RouteDestination;

                        /**
                         * Verifies a RouteDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.TlsRoute.RouteDestination;

                        /**
                         * Creates a plain object from a RouteDestination message. Also converts values to other types if specified.
                         * @param message RouteDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkservices.v1.TlsRoute.RouteDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteDestination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListTlsRoutesRequest. */
                interface IListTlsRoutesRequest {

                    /** ListTlsRoutesRequest parent */
                    parent?: (string|null);

                    /** ListTlsRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTlsRoutesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTlsRoutesRequest. */
                class ListTlsRoutesRequest implements IListTlsRoutesRequest {

                    /**
                     * Constructs a new ListTlsRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListTlsRoutesRequest);

                    /** ListTlsRoutesRequest parent. */
                    public parent: string;

                    /** ListTlsRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListTlsRoutesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTlsRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTlsRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListTlsRoutesRequest): google.cloud.networkservices.v1.ListTlsRoutesRequest;

                    /**
                     * Encodes the specified ListTlsRoutesRequest message. Does not implicitly {@link google.cloud.networkservices.v1.ListTlsRoutesRequest.verify|verify} messages.
                     * @param message ListTlsRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListTlsRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTlsRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListTlsRoutesRequest.verify|verify} messages.
                     * @param message ListTlsRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListTlsRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTlsRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTlsRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListTlsRoutesRequest;

                    /**
                     * Decodes a ListTlsRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTlsRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListTlsRoutesRequest;

                    /**
                     * Verifies a ListTlsRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTlsRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTlsRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListTlsRoutesRequest;

                    /**
                     * Creates a plain object from a ListTlsRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListTlsRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListTlsRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTlsRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTlsRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTlsRoutesResponse. */
                interface IListTlsRoutesResponse {

                    /** ListTlsRoutesResponse tlsRoutes */
                    tlsRoutes?: (google.cloud.networkservices.v1.ITlsRoute[]|null);

                    /** ListTlsRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTlsRoutesResponse. */
                class ListTlsRoutesResponse implements IListTlsRoutesResponse {

                    /**
                     * Constructs a new ListTlsRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IListTlsRoutesResponse);

                    /** ListTlsRoutesResponse tlsRoutes. */
                    public tlsRoutes: google.cloud.networkservices.v1.ITlsRoute[];

                    /** ListTlsRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTlsRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTlsRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IListTlsRoutesResponse): google.cloud.networkservices.v1.ListTlsRoutesResponse;

                    /**
                     * Encodes the specified ListTlsRoutesResponse message. Does not implicitly {@link google.cloud.networkservices.v1.ListTlsRoutesResponse.verify|verify} messages.
                     * @param message ListTlsRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IListTlsRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTlsRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.ListTlsRoutesResponse.verify|verify} messages.
                     * @param message ListTlsRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IListTlsRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTlsRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTlsRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.ListTlsRoutesResponse;

                    /**
                     * Decodes a ListTlsRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTlsRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.ListTlsRoutesResponse;

                    /**
                     * Verifies a ListTlsRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTlsRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTlsRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.ListTlsRoutesResponse;

                    /**
                     * Creates a plain object from a ListTlsRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListTlsRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.ListTlsRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTlsRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTlsRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTlsRouteRequest. */
                interface IGetTlsRouteRequest {

                    /** GetTlsRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTlsRouteRequest. */
                class GetTlsRouteRequest implements IGetTlsRouteRequest {

                    /**
                     * Constructs a new GetTlsRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IGetTlsRouteRequest);

                    /** GetTlsRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTlsRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTlsRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IGetTlsRouteRequest): google.cloud.networkservices.v1.GetTlsRouteRequest;

                    /**
                     * Encodes the specified GetTlsRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.GetTlsRouteRequest.verify|verify} messages.
                     * @param message GetTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IGetTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTlsRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.GetTlsRouteRequest.verify|verify} messages.
                     * @param message GetTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IGetTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTlsRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.GetTlsRouteRequest;

                    /**
                     * Decodes a GetTlsRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.GetTlsRouteRequest;

                    /**
                     * Verifies a GetTlsRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTlsRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTlsRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.GetTlsRouteRequest;

                    /**
                     * Creates a plain object from a GetTlsRouteRequest message. Also converts values to other types if specified.
                     * @param message GetTlsRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.GetTlsRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTlsRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTlsRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTlsRouteRequest. */
                interface ICreateTlsRouteRequest {

                    /** CreateTlsRouteRequest parent */
                    parent?: (string|null);

                    /** CreateTlsRouteRequest tlsRouteId */
                    tlsRouteId?: (string|null);

                    /** CreateTlsRouteRequest tlsRoute */
                    tlsRoute?: (google.cloud.networkservices.v1.ITlsRoute|null);
                }

                /** Represents a CreateTlsRouteRequest. */
                class CreateTlsRouteRequest implements ICreateTlsRouteRequest {

                    /**
                     * Constructs a new CreateTlsRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.ICreateTlsRouteRequest);

                    /** CreateTlsRouteRequest parent. */
                    public parent: string;

                    /** CreateTlsRouteRequest tlsRouteId. */
                    public tlsRouteId: string;

                    /** CreateTlsRouteRequest tlsRoute. */
                    public tlsRoute?: (google.cloud.networkservices.v1.ITlsRoute|null);

                    /**
                     * Creates a new CreateTlsRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTlsRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.ICreateTlsRouteRequest): google.cloud.networkservices.v1.CreateTlsRouteRequest;

                    /**
                     * Encodes the specified CreateTlsRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.CreateTlsRouteRequest.verify|verify} messages.
                     * @param message CreateTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.ICreateTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTlsRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.CreateTlsRouteRequest.verify|verify} messages.
                     * @param message CreateTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.ICreateTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTlsRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.CreateTlsRouteRequest;

                    /**
                     * Decodes a CreateTlsRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.CreateTlsRouteRequest;

                    /**
                     * Verifies a CreateTlsRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTlsRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTlsRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.CreateTlsRouteRequest;

                    /**
                     * Creates a plain object from a CreateTlsRouteRequest message. Also converts values to other types if specified.
                     * @param message CreateTlsRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.CreateTlsRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTlsRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTlsRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTlsRouteRequest. */
                interface IUpdateTlsRouteRequest {

                    /** UpdateTlsRouteRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTlsRouteRequest tlsRoute */
                    tlsRoute?: (google.cloud.networkservices.v1.ITlsRoute|null);
                }

                /** Represents an UpdateTlsRouteRequest. */
                class UpdateTlsRouteRequest implements IUpdateTlsRouteRequest {

                    /**
                     * Constructs a new UpdateTlsRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IUpdateTlsRouteRequest);

                    /** UpdateTlsRouteRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTlsRouteRequest tlsRoute. */
                    public tlsRoute?: (google.cloud.networkservices.v1.ITlsRoute|null);

                    /**
                     * Creates a new UpdateTlsRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTlsRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IUpdateTlsRouteRequest): google.cloud.networkservices.v1.UpdateTlsRouteRequest;

                    /**
                     * Encodes the specified UpdateTlsRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.UpdateTlsRouteRequest.verify|verify} messages.
                     * @param message UpdateTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IUpdateTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTlsRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.UpdateTlsRouteRequest.verify|verify} messages.
                     * @param message UpdateTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IUpdateTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTlsRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.UpdateTlsRouteRequest;

                    /**
                     * Decodes an UpdateTlsRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.UpdateTlsRouteRequest;

                    /**
                     * Verifies an UpdateTlsRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTlsRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTlsRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.UpdateTlsRouteRequest;

                    /**
                     * Creates a plain object from an UpdateTlsRouteRequest message. Also converts values to other types if specified.
                     * @param message UpdateTlsRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.UpdateTlsRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTlsRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTlsRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTlsRouteRequest. */
                interface IDeleteTlsRouteRequest {

                    /** DeleteTlsRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTlsRouteRequest. */
                class DeleteTlsRouteRequest implements IDeleteTlsRouteRequest {

                    /**
                     * Constructs a new DeleteTlsRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkservices.v1.IDeleteTlsRouteRequest);

                    /** DeleteTlsRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTlsRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTlsRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkservices.v1.IDeleteTlsRouteRequest): google.cloud.networkservices.v1.DeleteTlsRouteRequest;

                    /**
                     * Encodes the specified DeleteTlsRouteRequest message. Does not implicitly {@link google.cloud.networkservices.v1.DeleteTlsRouteRequest.verify|verify} messages.
                     * @param message DeleteTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkservices.v1.IDeleteTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTlsRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkservices.v1.DeleteTlsRouteRequest.verify|verify} messages.
                     * @param message DeleteTlsRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkservices.v1.IDeleteTlsRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTlsRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkservices.v1.DeleteTlsRouteRequest;

                    /**
                     * Decodes a DeleteTlsRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTlsRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkservices.v1.DeleteTlsRouteRequest;

                    /**
                     * Verifies a DeleteTlsRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTlsRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTlsRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkservices.v1.DeleteTlsRouteRequest;

                    /**
                     * Creates a plain object from a DeleteTlsRouteRequest message. Also converts values to other types if specified.
                     * @param message DeleteTlsRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkservices.v1.DeleteTlsRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTlsRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTlsRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
