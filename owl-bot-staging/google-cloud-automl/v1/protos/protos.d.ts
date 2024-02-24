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

        /** Namespace automl. */
        namespace automl {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AnnotationPayload. */
                interface IAnnotationPayload {

                    /** AnnotationPayload translation */
                    translation?: (google.cloud.automl.v1.ITranslationAnnotation|null);

                    /** AnnotationPayload classification */
                    classification?: (google.cloud.automl.v1.IClassificationAnnotation|null);

                    /** AnnotationPayload imageObjectDetection */
                    imageObjectDetection?: (google.cloud.automl.v1.IImageObjectDetectionAnnotation|null);

                    /** AnnotationPayload textExtraction */
                    textExtraction?: (google.cloud.automl.v1.ITextExtractionAnnotation|null);

                    /** AnnotationPayload textSentiment */
                    textSentiment?: (google.cloud.automl.v1.ITextSentimentAnnotation|null);

                    /** AnnotationPayload annotationSpecId */
                    annotationSpecId?: (string|null);

                    /** AnnotationPayload displayName */
                    displayName?: (string|null);
                }

                /** Represents an AnnotationPayload. */
                class AnnotationPayload implements IAnnotationPayload {

                    /**
                     * Constructs a new AnnotationPayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IAnnotationPayload);

                    /** AnnotationPayload translation. */
                    public translation?: (google.cloud.automl.v1.ITranslationAnnotation|null);

                    /** AnnotationPayload classification. */
                    public classification?: (google.cloud.automl.v1.IClassificationAnnotation|null);

                    /** AnnotationPayload imageObjectDetection. */
                    public imageObjectDetection?: (google.cloud.automl.v1.IImageObjectDetectionAnnotation|null);

                    /** AnnotationPayload textExtraction. */
                    public textExtraction?: (google.cloud.automl.v1.ITextExtractionAnnotation|null);

                    /** AnnotationPayload textSentiment. */
                    public textSentiment?: (google.cloud.automl.v1.ITextSentimentAnnotation|null);

                    /** AnnotationPayload annotationSpecId. */
                    public annotationSpecId: string;

                    /** AnnotationPayload displayName. */
                    public displayName: string;

                    /** AnnotationPayload detail. */
                    public detail?: ("translation"|"classification"|"imageObjectDetection"|"textExtraction"|"textSentiment");

                    /**
                     * Creates a new AnnotationPayload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationPayload instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IAnnotationPayload): google.cloud.automl.v1.AnnotationPayload;

                    /**
                     * Encodes the specified AnnotationPayload message. Does not implicitly {@link google.cloud.automl.v1.AnnotationPayload.verify|verify} messages.
                     * @param message AnnotationPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IAnnotationPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationPayload message, length delimited. Does not implicitly {@link google.cloud.automl.v1.AnnotationPayload.verify|verify} messages.
                     * @param message AnnotationPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IAnnotationPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationPayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.AnnotationPayload;

                    /**
                     * Decodes an AnnotationPayload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.AnnotationPayload;

                    /**
                     * Verifies an AnnotationPayload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationPayload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationPayload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.AnnotationPayload;

                    /**
                     * Creates a plain object from an AnnotationPayload message. Also converts values to other types if specified.
                     * @param message AnnotationPayload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.AnnotationPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationPayload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotationPayload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** ClassificationType enum. */
                enum ClassificationType {
                    CLASSIFICATION_TYPE_UNSPECIFIED = 0,
                    MULTICLASS = 1,
                    MULTILABEL = 2
                }

                /** Properties of a ClassificationAnnotation. */
                interface IClassificationAnnotation {

                    /** ClassificationAnnotation score */
                    score?: (number|null);
                }

                /** Represents a ClassificationAnnotation. */
                class ClassificationAnnotation implements IClassificationAnnotation {

                    /**
                     * Constructs a new ClassificationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IClassificationAnnotation);

                    /** ClassificationAnnotation score. */
                    public score: number;

                    /**
                     * Creates a new ClassificationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationAnnotation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IClassificationAnnotation): google.cloud.automl.v1.ClassificationAnnotation;

                    /**
                     * Encodes the specified ClassificationAnnotation message. Does not implicitly {@link google.cloud.automl.v1.ClassificationAnnotation.verify|verify} messages.
                     * @param message ClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationAnnotation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ClassificationAnnotation.verify|verify} messages.
                     * @param message ClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ClassificationAnnotation;

                    /**
                     * Decodes a ClassificationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ClassificationAnnotation;

                    /**
                     * Verifies a ClassificationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ClassificationAnnotation;

                    /**
                     * Creates a plain object from a ClassificationAnnotation message. Also converts values to other types if specified.
                     * @param message ClassificationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ClassificationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClassificationAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClassificationEvaluationMetrics. */
                interface IClassificationEvaluationMetrics {

                    /** ClassificationEvaluationMetrics auPrc */
                    auPrc?: (number|null);

                    /** ClassificationEvaluationMetrics auRoc */
                    auRoc?: (number|null);

                    /** ClassificationEvaluationMetrics logLoss */
                    logLoss?: (number|null);

                    /** ClassificationEvaluationMetrics confidenceMetricsEntry */
                    confidenceMetricsEntry?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry[]|null);

                    /** ClassificationEvaluationMetrics confusionMatrix */
                    confusionMatrix?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix|null);

                    /** ClassificationEvaluationMetrics annotationSpecId */
                    annotationSpecId?: (string[]|null);
                }

                /** Represents a ClassificationEvaluationMetrics. */
                class ClassificationEvaluationMetrics implements IClassificationEvaluationMetrics {

                    /**
                     * Constructs a new ClassificationEvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IClassificationEvaluationMetrics);

                    /** ClassificationEvaluationMetrics auPrc. */
                    public auPrc: number;

                    /** ClassificationEvaluationMetrics auRoc. */
                    public auRoc: number;

                    /** ClassificationEvaluationMetrics logLoss. */
                    public logLoss: number;

                    /** ClassificationEvaluationMetrics confidenceMetricsEntry. */
                    public confidenceMetricsEntry: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry[];

                    /** ClassificationEvaluationMetrics confusionMatrix. */
                    public confusionMatrix?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix|null);

                    /** ClassificationEvaluationMetrics annotationSpecId. */
                    public annotationSpecId: string[];

                    /**
                     * Creates a new ClassificationEvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationEvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IClassificationEvaluationMetrics): google.cloud.automl.v1.ClassificationEvaluationMetrics;

                    /**
                     * Encodes the specified ClassificationEvaluationMetrics message. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.verify|verify} messages.
                     * @param message ClassificationEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IClassificationEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationEvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.verify|verify} messages.
                     * @param message ClassificationEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IClassificationEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationEvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ClassificationEvaluationMetrics;

                    /**
                     * Decodes a ClassificationEvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ClassificationEvaluationMetrics;

                    /**
                     * Verifies a ClassificationEvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationEvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationEvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ClassificationEvaluationMetrics;

                    /**
                     * Creates a plain object from a ClassificationEvaluationMetrics message. Also converts values to other types if specified.
                     * @param message ClassificationEvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ClassificationEvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationEvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClassificationEvaluationMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ClassificationEvaluationMetrics {

                    /** Properties of a ConfidenceMetricsEntry. */
                    interface IConfidenceMetricsEntry {

                        /** ConfidenceMetricsEntry confidenceThreshold */
                        confidenceThreshold?: (number|null);

                        /** ConfidenceMetricsEntry positionThreshold */
                        positionThreshold?: (number|null);

                        /** ConfidenceMetricsEntry recall */
                        recall?: (number|null);

                        /** ConfidenceMetricsEntry precision */
                        precision?: (number|null);

                        /** ConfidenceMetricsEntry falsePositiveRate */
                        falsePositiveRate?: (number|null);

                        /** ConfidenceMetricsEntry f1Score */
                        f1Score?: (number|null);

                        /** ConfidenceMetricsEntry recallAt1 */
                        recallAt1?: (number|null);

                        /** ConfidenceMetricsEntry precisionAt1 */
                        precisionAt1?: (number|null);

                        /** ConfidenceMetricsEntry falsePositiveRateAt1 */
                        falsePositiveRateAt1?: (number|null);

                        /** ConfidenceMetricsEntry f1ScoreAt1 */
                        f1ScoreAt1?: (number|null);

                        /** ConfidenceMetricsEntry truePositiveCount */
                        truePositiveCount?: (number|Long|string|null);

                        /** ConfidenceMetricsEntry falsePositiveCount */
                        falsePositiveCount?: (number|Long|string|null);

                        /** ConfidenceMetricsEntry falseNegativeCount */
                        falseNegativeCount?: (number|Long|string|null);

                        /** ConfidenceMetricsEntry trueNegativeCount */
                        trueNegativeCount?: (number|Long|string|null);
                    }

                    /** Represents a ConfidenceMetricsEntry. */
                    class ConfidenceMetricsEntry implements IConfidenceMetricsEntry {

                        /**
                         * Constructs a new ConfidenceMetricsEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry);

                        /** ConfidenceMetricsEntry confidenceThreshold. */
                        public confidenceThreshold: number;

                        /** ConfidenceMetricsEntry positionThreshold. */
                        public positionThreshold: number;

                        /** ConfidenceMetricsEntry recall. */
                        public recall: number;

                        /** ConfidenceMetricsEntry precision. */
                        public precision: number;

                        /** ConfidenceMetricsEntry falsePositiveRate. */
                        public falsePositiveRate: number;

                        /** ConfidenceMetricsEntry f1Score. */
                        public f1Score: number;

                        /** ConfidenceMetricsEntry recallAt1. */
                        public recallAt1: number;

                        /** ConfidenceMetricsEntry precisionAt1. */
                        public precisionAt1: number;

                        /** ConfidenceMetricsEntry falsePositiveRateAt1. */
                        public falsePositiveRateAt1: number;

                        /** ConfidenceMetricsEntry f1ScoreAt1. */
                        public f1ScoreAt1: number;

                        /** ConfidenceMetricsEntry truePositiveCount. */
                        public truePositiveCount: (number|Long|string);

                        /** ConfidenceMetricsEntry falsePositiveCount. */
                        public falsePositiveCount: (number|Long|string);

                        /** ConfidenceMetricsEntry falseNegativeCount. */
                        public falseNegativeCount: (number|Long|string);

                        /** ConfidenceMetricsEntry trueNegativeCount. */
                        public trueNegativeCount: (number|Long|string);

                        /**
                         * Creates a new ConfidenceMetricsEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfidenceMetricsEntry instance
                         */
                        public static create(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Verifies a ConfidenceMetricsEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfidenceMetricsEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfidenceMetricsEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Creates a plain object from a ConfidenceMetricsEntry message. Also converts values to other types if specified.
                         * @param message ConfidenceMetricsEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfidenceMetricsEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConfidenceMetricsEntry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ConfusionMatrix. */
                    interface IConfusionMatrix {

                        /** ConfusionMatrix annotationSpecId */
                        annotationSpecId?: (string[]|null);

                        /** ConfusionMatrix displayName */
                        displayName?: (string[]|null);

                        /** ConfusionMatrix row */
                        row?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow[]|null);
                    }

                    /** Represents a ConfusionMatrix. */
                    class ConfusionMatrix implements IConfusionMatrix {

                        /**
                         * Constructs a new ConfusionMatrix.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix);

                        /** ConfusionMatrix annotationSpecId. */
                        public annotationSpecId: string[];

                        /** ConfusionMatrix displayName. */
                        public displayName: string[];

                        /** ConfusionMatrix row. */
                        public row: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow[];

                        /**
                         * Creates a new ConfusionMatrix instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfusionMatrix instance
                         */
                        public static create(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix;

                        /**
                         * Encodes the specified ConfusionMatrix message. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.verify|verify} messages.
                         * @param message ConfusionMatrix message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfusionMatrix message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.verify|verify} messages.
                         * @param message ConfusionMatrix message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfusionMatrix message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfusionMatrix
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix;

                        /**
                         * Decodes a ConfusionMatrix message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfusionMatrix
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix;

                        /**
                         * Verifies a ConfusionMatrix message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfusionMatrix message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfusionMatrix
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix;

                        /**
                         * Creates a plain object from a ConfusionMatrix message. Also converts values to other types if specified.
                         * @param message ConfusionMatrix
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfusionMatrix to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConfusionMatrix
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConfusionMatrix {

                        /** Properties of a Row. */
                        interface IRow {

                            /** Row exampleCount */
                            exampleCount?: (number[]|null);
                        }

                        /** Represents a Row. */
                        class Row implements IRow {

                            /**
                             * Constructs a new Row.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow);

                            /** Row exampleCount. */
                            public exampleCount: number[];

                            /**
                             * Creates a new Row instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Row instance
                             */
                            public static create(properties?: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row;

                            /**
                             * Encodes the specified Row message. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Row message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Row message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row;

                            /**
                             * Decodes a Row message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row;

                            /**
                             * Verifies a Row message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Row message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Row
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row;

                            /**
                             * Creates a plain object from a Row message. Also converts values to other types if specified.
                             * @param message Row
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Row to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Row
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of an ImageObjectDetectionAnnotation. */
                interface IImageObjectDetectionAnnotation {

                    /** ImageObjectDetectionAnnotation boundingBox */
                    boundingBox?: (google.cloud.automl.v1.IBoundingPoly|null);

                    /** ImageObjectDetectionAnnotation score */
                    score?: (number|null);
                }

                /** Represents an ImageObjectDetectionAnnotation. */
                class ImageObjectDetectionAnnotation implements IImageObjectDetectionAnnotation {

                    /**
                     * Constructs a new ImageObjectDetectionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageObjectDetectionAnnotation);

                    /** ImageObjectDetectionAnnotation boundingBox. */
                    public boundingBox?: (google.cloud.automl.v1.IBoundingPoly|null);

                    /** ImageObjectDetectionAnnotation score. */
                    public score: number;

                    /**
                     * Creates a new ImageObjectDetectionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageObjectDetectionAnnotation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageObjectDetectionAnnotation): google.cloud.automl.v1.ImageObjectDetectionAnnotation;

                    /**
                     * Encodes the specified ImageObjectDetectionAnnotation message. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionAnnotation.verify|verify} messages.
                     * @param message ImageObjectDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageObjectDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageObjectDetectionAnnotation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionAnnotation.verify|verify} messages.
                     * @param message ImageObjectDetectionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageObjectDetectionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageObjectDetectionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageObjectDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageObjectDetectionAnnotation;

                    /**
                     * Decodes an ImageObjectDetectionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageObjectDetectionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageObjectDetectionAnnotation;

                    /**
                     * Verifies an ImageObjectDetectionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageObjectDetectionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageObjectDetectionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageObjectDetectionAnnotation;

                    /**
                     * Creates a plain object from an ImageObjectDetectionAnnotation message. Also converts values to other types if specified.
                     * @param message ImageObjectDetectionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageObjectDetectionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageObjectDetectionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageObjectDetectionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BoundingBoxMetricsEntry. */
                interface IBoundingBoxMetricsEntry {

                    /** BoundingBoxMetricsEntry iouThreshold */
                    iouThreshold?: (number|null);

                    /** BoundingBoxMetricsEntry meanAveragePrecision */
                    meanAveragePrecision?: (number|null);

                    /** BoundingBoxMetricsEntry confidenceMetricsEntries */
                    confidenceMetricsEntries?: (google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry[]|null);
                }

                /** Represents a BoundingBoxMetricsEntry. */
                class BoundingBoxMetricsEntry implements IBoundingBoxMetricsEntry {

                    /**
                     * Constructs a new BoundingBoxMetricsEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBoundingBoxMetricsEntry);

                    /** BoundingBoxMetricsEntry iouThreshold. */
                    public iouThreshold: number;

                    /** BoundingBoxMetricsEntry meanAveragePrecision. */
                    public meanAveragePrecision: number;

                    /** BoundingBoxMetricsEntry confidenceMetricsEntries. */
                    public confidenceMetricsEntries: google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry[];

                    /**
                     * Creates a new BoundingBoxMetricsEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingBoxMetricsEntry instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBoundingBoxMetricsEntry): google.cloud.automl.v1.BoundingBoxMetricsEntry;

                    /**
                     * Encodes the specified BoundingBoxMetricsEntry message. Does not implicitly {@link google.cloud.automl.v1.BoundingBoxMetricsEntry.verify|verify} messages.
                     * @param message BoundingBoxMetricsEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBoundingBoxMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingBoxMetricsEntry message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BoundingBoxMetricsEntry.verify|verify} messages.
                     * @param message BoundingBoxMetricsEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBoundingBoxMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingBoxMetricsEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingBoxMetricsEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BoundingBoxMetricsEntry;

                    /**
                     * Decodes a BoundingBoxMetricsEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingBoxMetricsEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BoundingBoxMetricsEntry;

                    /**
                     * Verifies a BoundingBoxMetricsEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingBoxMetricsEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingBoxMetricsEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BoundingBoxMetricsEntry;

                    /**
                     * Creates a plain object from a BoundingBoxMetricsEntry message. Also converts values to other types if specified.
                     * @param message BoundingBoxMetricsEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BoundingBoxMetricsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingBoxMetricsEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BoundingBoxMetricsEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BoundingBoxMetricsEntry {

                    /** Properties of a ConfidenceMetricsEntry. */
                    interface IConfidenceMetricsEntry {

                        /** ConfidenceMetricsEntry confidenceThreshold */
                        confidenceThreshold?: (number|null);

                        /** ConfidenceMetricsEntry recall */
                        recall?: (number|null);

                        /** ConfidenceMetricsEntry precision */
                        precision?: (number|null);

                        /** ConfidenceMetricsEntry f1Score */
                        f1Score?: (number|null);
                    }

                    /** Represents a ConfidenceMetricsEntry. */
                    class ConfidenceMetricsEntry implements IConfidenceMetricsEntry {

                        /**
                         * Constructs a new ConfidenceMetricsEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry);

                        /** ConfidenceMetricsEntry confidenceThreshold. */
                        public confidenceThreshold: number;

                        /** ConfidenceMetricsEntry recall. */
                        public recall: number;

                        /** ConfidenceMetricsEntry precision. */
                        public precision: number;

                        /** ConfidenceMetricsEntry f1Score. */
                        public f1Score: number;

                        /**
                         * Creates a new ConfidenceMetricsEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfidenceMetricsEntry instance
                         */
                        public static create(properties?: google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry): google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message. Does not implicitly {@link google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.BoundingBoxMetricsEntry.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry;

                        /**
                         * Verifies a ConfidenceMetricsEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfidenceMetricsEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfidenceMetricsEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry;

                        /**
                         * Creates a plain object from a ConfidenceMetricsEntry message. Also converts values to other types if specified.
                         * @param message ConfidenceMetricsEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfidenceMetricsEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConfidenceMetricsEntry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an ImageObjectDetectionEvaluationMetrics. */
                interface IImageObjectDetectionEvaluationMetrics {

                    /** ImageObjectDetectionEvaluationMetrics evaluatedBoundingBoxCount */
                    evaluatedBoundingBoxCount?: (number|null);

                    /** ImageObjectDetectionEvaluationMetrics boundingBoxMetricsEntries */
                    boundingBoxMetricsEntries?: (google.cloud.automl.v1.IBoundingBoxMetricsEntry[]|null);

                    /** ImageObjectDetectionEvaluationMetrics boundingBoxMeanAveragePrecision */
                    boundingBoxMeanAveragePrecision?: (number|null);
                }

                /** Represents an ImageObjectDetectionEvaluationMetrics. */
                class ImageObjectDetectionEvaluationMetrics implements IImageObjectDetectionEvaluationMetrics {

                    /**
                     * Constructs a new ImageObjectDetectionEvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics);

                    /** ImageObjectDetectionEvaluationMetrics evaluatedBoundingBoxCount. */
                    public evaluatedBoundingBoxCount: number;

                    /** ImageObjectDetectionEvaluationMetrics boundingBoxMetricsEntries. */
                    public boundingBoxMetricsEntries: google.cloud.automl.v1.IBoundingBoxMetricsEntry[];

                    /** ImageObjectDetectionEvaluationMetrics boundingBoxMeanAveragePrecision. */
                    public boundingBoxMeanAveragePrecision: number;

                    /**
                     * Creates a new ImageObjectDetectionEvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageObjectDetectionEvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics): google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics;

                    /**
                     * Encodes the specified ImageObjectDetectionEvaluationMetrics message. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics.verify|verify} messages.
                     * @param message ImageObjectDetectionEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageObjectDetectionEvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics.verify|verify} messages.
                     * @param message ImageObjectDetectionEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageObjectDetectionEvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageObjectDetectionEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics;

                    /**
                     * Decodes an ImageObjectDetectionEvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageObjectDetectionEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics;

                    /**
                     * Verifies an ImageObjectDetectionEvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageObjectDetectionEvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageObjectDetectionEvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics;

                    /**
                     * Creates a plain object from an ImageObjectDetectionEvaluationMetrics message. Also converts values to other types if specified.
                     * @param message ImageObjectDetectionEvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageObjectDetectionEvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageObjectDetectionEvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageObjectDetectionEvaluationMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NormalizedVertex. */
                interface INormalizedVertex {

                    /** NormalizedVertex x */
                    x?: (number|null);

                    /** NormalizedVertex y */
                    y?: (number|null);
                }

                /** Represents a NormalizedVertex. */
                class NormalizedVertex implements INormalizedVertex {

                    /**
                     * Constructs a new NormalizedVertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.automl.v1.INormalizedVertex): google.cloud.automl.v1.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.automl.v1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.automl.v1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.NormalizedVertex;

                    /**
                     * Verifies a NormalizedVertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedVertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedVertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NormalizedVertex
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BoundingPoly. */
                interface IBoundingPoly {

                    /** BoundingPoly normalizedVertices */
                    normalizedVertices?: (google.cloud.automl.v1.INormalizedVertex[]|null);
                }

                /** Represents a BoundingPoly. */
                class BoundingPoly implements IBoundingPoly {

                    /**
                     * Constructs a new BoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBoundingPoly);

                    /** BoundingPoly normalizedVertices. */
                    public normalizedVertices: google.cloud.automl.v1.INormalizedVertex[];

                    /**
                     * Creates a new BoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPoly instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBoundingPoly): google.cloud.automl.v1.BoundingPoly;

                    /**
                     * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.automl.v1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BoundingPoly;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BoundingPoly;

                    /**
                     * Verifies a BoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BoundingPoly;

                    /**
                     * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                     * @param message BoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BoundingPoly
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextExtractionAnnotation. */
                interface ITextExtractionAnnotation {

                    /** TextExtractionAnnotation textSegment */
                    textSegment?: (google.cloud.automl.v1.ITextSegment|null);

                    /** TextExtractionAnnotation score */
                    score?: (number|null);
                }

                /** Represents a TextExtractionAnnotation. */
                class TextExtractionAnnotation implements ITextExtractionAnnotation {

                    /**
                     * Constructs a new TextExtractionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextExtractionAnnotation);

                    /** TextExtractionAnnotation textSegment. */
                    public textSegment?: (google.cloud.automl.v1.ITextSegment|null);

                    /** TextExtractionAnnotation score. */
                    public score: number;

                    /** TextExtractionAnnotation annotation. */
                    public annotation?: "textSegment";

                    /**
                     * Creates a new TextExtractionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextExtractionAnnotation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextExtractionAnnotation): google.cloud.automl.v1.TextExtractionAnnotation;

                    /**
                     * Encodes the specified TextExtractionAnnotation message. Does not implicitly {@link google.cloud.automl.v1.TextExtractionAnnotation.verify|verify} messages.
                     * @param message TextExtractionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextExtractionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextExtractionAnnotation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextExtractionAnnotation.verify|verify} messages.
                     * @param message TextExtractionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextExtractionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextExtractionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextExtractionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextExtractionAnnotation;

                    /**
                     * Decodes a TextExtractionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextExtractionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextExtractionAnnotation;

                    /**
                     * Verifies a TextExtractionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextExtractionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextExtractionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextExtractionAnnotation;

                    /**
                     * Creates a plain object from a TextExtractionAnnotation message. Also converts values to other types if specified.
                     * @param message TextExtractionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextExtractionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextExtractionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextExtractionAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextExtractionEvaluationMetrics. */
                interface ITextExtractionEvaluationMetrics {

                    /** TextExtractionEvaluationMetrics auPrc */
                    auPrc?: (number|null);

                    /** TextExtractionEvaluationMetrics confidenceMetricsEntries */
                    confidenceMetricsEntries?: (google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry[]|null);
                }

                /** Represents a TextExtractionEvaluationMetrics. */
                class TextExtractionEvaluationMetrics implements ITextExtractionEvaluationMetrics {

                    /**
                     * Constructs a new TextExtractionEvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextExtractionEvaluationMetrics);

                    /** TextExtractionEvaluationMetrics auPrc. */
                    public auPrc: number;

                    /** TextExtractionEvaluationMetrics confidenceMetricsEntries. */
                    public confidenceMetricsEntries: google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry[];

                    /**
                     * Creates a new TextExtractionEvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextExtractionEvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextExtractionEvaluationMetrics): google.cloud.automl.v1.TextExtractionEvaluationMetrics;

                    /**
                     * Encodes the specified TextExtractionEvaluationMetrics message. Does not implicitly {@link google.cloud.automl.v1.TextExtractionEvaluationMetrics.verify|verify} messages.
                     * @param message TextExtractionEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextExtractionEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextExtractionEvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextExtractionEvaluationMetrics.verify|verify} messages.
                     * @param message TextExtractionEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextExtractionEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextExtractionEvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextExtractionEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextExtractionEvaluationMetrics;

                    /**
                     * Decodes a TextExtractionEvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextExtractionEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextExtractionEvaluationMetrics;

                    /**
                     * Verifies a TextExtractionEvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextExtractionEvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextExtractionEvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextExtractionEvaluationMetrics;

                    /**
                     * Creates a plain object from a TextExtractionEvaluationMetrics message. Also converts values to other types if specified.
                     * @param message TextExtractionEvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextExtractionEvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextExtractionEvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextExtractionEvaluationMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TextExtractionEvaluationMetrics {

                    /** Properties of a ConfidenceMetricsEntry. */
                    interface IConfidenceMetricsEntry {

                        /** ConfidenceMetricsEntry confidenceThreshold */
                        confidenceThreshold?: (number|null);

                        /** ConfidenceMetricsEntry recall */
                        recall?: (number|null);

                        /** ConfidenceMetricsEntry precision */
                        precision?: (number|null);

                        /** ConfidenceMetricsEntry f1Score */
                        f1Score?: (number|null);
                    }

                    /** Represents a ConfidenceMetricsEntry. */
                    class ConfidenceMetricsEntry implements IConfidenceMetricsEntry {

                        /**
                         * Constructs a new ConfidenceMetricsEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry);

                        /** ConfidenceMetricsEntry confidenceThreshold. */
                        public confidenceThreshold: number;

                        /** ConfidenceMetricsEntry recall. */
                        public recall: number;

                        /** ConfidenceMetricsEntry precision. */
                        public precision: number;

                        /** ConfidenceMetricsEntry f1Score. */
                        public f1Score: number;

                        /**
                         * Creates a new ConfidenceMetricsEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfidenceMetricsEntry instance
                         */
                        public static create(properties?: google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry): google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message. Does not implicitly {@link google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.TextExtractionEvaluationMetrics.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Verifies a ConfidenceMetricsEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfidenceMetricsEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfidenceMetricsEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry;

                        /**
                         * Creates a plain object from a ConfidenceMetricsEntry message. Also converts values to other types if specified.
                         * @param message ConfidenceMetricsEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfidenceMetricsEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConfidenceMetricsEntry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TextSegment. */
                interface ITextSegment {

                    /** TextSegment content */
                    content?: (string|null);

                    /** TextSegment startOffset */
                    startOffset?: (number|Long|string|null);

                    /** TextSegment endOffset */
                    endOffset?: (number|Long|string|null);
                }

                /** Represents a TextSegment. */
                class TextSegment implements ITextSegment {

                    /**
                     * Constructs a new TextSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSegment);

                    /** TextSegment content. */
                    public content: string;

                    /** TextSegment startOffset. */
                    public startOffset: (number|Long|string);

                    /** TextSegment endOffset. */
                    public endOffset: (number|Long|string);

                    /**
                     * Creates a new TextSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSegment instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSegment): google.cloud.automl.v1.TextSegment;

                    /**
                     * Encodes the specified TextSegment message. Does not implicitly {@link google.cloud.automl.v1.TextSegment.verify|verify} messages.
                     * @param message TextSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSegment message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSegment.verify|verify} messages.
                     * @param message TextSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSegment;

                    /**
                     * Decodes a TextSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSegment;

                    /**
                     * Verifies a TextSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSegment;

                    /**
                     * Creates a plain object from a TextSegment message. Also converts values to other types if specified.
                     * @param message TextSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSegment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSentimentAnnotation. */
                interface ITextSentimentAnnotation {

                    /** TextSentimentAnnotation sentiment */
                    sentiment?: (number|null);
                }

                /** Represents a TextSentimentAnnotation. */
                class TextSentimentAnnotation implements ITextSentimentAnnotation {

                    /**
                     * Constructs a new TextSentimentAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSentimentAnnotation);

                    /** TextSentimentAnnotation sentiment. */
                    public sentiment: number;

                    /**
                     * Creates a new TextSentimentAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSentimentAnnotation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSentimentAnnotation): google.cloud.automl.v1.TextSentimentAnnotation;

                    /**
                     * Encodes the specified TextSentimentAnnotation message. Does not implicitly {@link google.cloud.automl.v1.TextSentimentAnnotation.verify|verify} messages.
                     * @param message TextSentimentAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSentimentAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSentimentAnnotation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSentimentAnnotation.verify|verify} messages.
                     * @param message TextSentimentAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSentimentAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSentimentAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSentimentAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSentimentAnnotation;

                    /**
                     * Decodes a TextSentimentAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSentimentAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSentimentAnnotation;

                    /**
                     * Verifies a TextSentimentAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSentimentAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSentimentAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSentimentAnnotation;

                    /**
                     * Creates a plain object from a TextSentimentAnnotation message. Also converts values to other types if specified.
                     * @param message TextSentimentAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSentimentAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSentimentAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSentimentAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSentimentEvaluationMetrics. */
                interface ITextSentimentEvaluationMetrics {

                    /** TextSentimentEvaluationMetrics precision */
                    precision?: (number|null);

                    /** TextSentimentEvaluationMetrics recall */
                    recall?: (number|null);

                    /** TextSentimentEvaluationMetrics f1Score */
                    f1Score?: (number|null);

                    /** TextSentimentEvaluationMetrics meanAbsoluteError */
                    meanAbsoluteError?: (number|null);

                    /** TextSentimentEvaluationMetrics meanSquaredError */
                    meanSquaredError?: (number|null);

                    /** TextSentimentEvaluationMetrics linearKappa */
                    linearKappa?: (number|null);

                    /** TextSentimentEvaluationMetrics quadraticKappa */
                    quadraticKappa?: (number|null);

                    /** TextSentimentEvaluationMetrics confusionMatrix */
                    confusionMatrix?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix|null);
                }

                /** Represents a TextSentimentEvaluationMetrics. */
                class TextSentimentEvaluationMetrics implements ITextSentimentEvaluationMetrics {

                    /**
                     * Constructs a new TextSentimentEvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSentimentEvaluationMetrics);

                    /** TextSentimentEvaluationMetrics precision. */
                    public precision: number;

                    /** TextSentimentEvaluationMetrics recall. */
                    public recall: number;

                    /** TextSentimentEvaluationMetrics f1Score. */
                    public f1Score: number;

                    /** TextSentimentEvaluationMetrics meanAbsoluteError. */
                    public meanAbsoluteError: number;

                    /** TextSentimentEvaluationMetrics meanSquaredError. */
                    public meanSquaredError: number;

                    /** TextSentimentEvaluationMetrics linearKappa. */
                    public linearKappa: number;

                    /** TextSentimentEvaluationMetrics quadraticKappa. */
                    public quadraticKappa: number;

                    /** TextSentimentEvaluationMetrics confusionMatrix. */
                    public confusionMatrix?: (google.cloud.automl.v1.ClassificationEvaluationMetrics.IConfusionMatrix|null);

                    /**
                     * Creates a new TextSentimentEvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSentimentEvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSentimentEvaluationMetrics): google.cloud.automl.v1.TextSentimentEvaluationMetrics;

                    /**
                     * Encodes the specified TextSentimentEvaluationMetrics message. Does not implicitly {@link google.cloud.automl.v1.TextSentimentEvaluationMetrics.verify|verify} messages.
                     * @param message TextSentimentEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSentimentEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSentimentEvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSentimentEvaluationMetrics.verify|verify} messages.
                     * @param message TextSentimentEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSentimentEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSentimentEvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSentimentEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSentimentEvaluationMetrics;

                    /**
                     * Decodes a TextSentimentEvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSentimentEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSentimentEvaluationMetrics;

                    /**
                     * Verifies a TextSentimentEvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSentimentEvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSentimentEvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSentimentEvaluationMetrics;

                    /**
                     * Creates a plain object from a TextSentimentEvaluationMetrics message. Also converts values to other types if specified.
                     * @param message TextSentimentEvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSentimentEvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSentimentEvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSentimentEvaluationMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranslationDatasetMetadata. */
                interface ITranslationDatasetMetadata {

                    /** TranslationDatasetMetadata sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslationDatasetMetadata targetLanguageCode */
                    targetLanguageCode?: (string|null);
                }

                /** Represents a TranslationDatasetMetadata. */
                class TranslationDatasetMetadata implements ITranslationDatasetMetadata {

                    /**
                     * Constructs a new TranslationDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITranslationDatasetMetadata);

                    /** TranslationDatasetMetadata sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslationDatasetMetadata targetLanguageCode. */
                    public targetLanguageCode: string;

                    /**
                     * Creates a new TranslationDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITranslationDatasetMetadata): google.cloud.automl.v1.TranslationDatasetMetadata;

                    /**
                     * Encodes the specified TranslationDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.TranslationDatasetMetadata.verify|verify} messages.
                     * @param message TranslationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITranslationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TranslationDatasetMetadata.verify|verify} messages.
                     * @param message TranslationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITranslationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TranslationDatasetMetadata;

                    /**
                     * Decodes a TranslationDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TranslationDatasetMetadata;

                    /**
                     * Verifies a TranslationDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TranslationDatasetMetadata;

                    /**
                     * Creates a plain object from a TranslationDatasetMetadata message. Also converts values to other types if specified.
                     * @param message TranslationDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TranslationDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranslationEvaluationMetrics. */
                interface ITranslationEvaluationMetrics {

                    /** TranslationEvaluationMetrics bleuScore */
                    bleuScore?: (number|null);

                    /** TranslationEvaluationMetrics baseBleuScore */
                    baseBleuScore?: (number|null);
                }

                /** Represents a TranslationEvaluationMetrics. */
                class TranslationEvaluationMetrics implements ITranslationEvaluationMetrics {

                    /**
                     * Constructs a new TranslationEvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITranslationEvaluationMetrics);

                    /** TranslationEvaluationMetrics bleuScore. */
                    public bleuScore: number;

                    /** TranslationEvaluationMetrics baseBleuScore. */
                    public baseBleuScore: number;

                    /**
                     * Creates a new TranslationEvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationEvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITranslationEvaluationMetrics): google.cloud.automl.v1.TranslationEvaluationMetrics;

                    /**
                     * Encodes the specified TranslationEvaluationMetrics message. Does not implicitly {@link google.cloud.automl.v1.TranslationEvaluationMetrics.verify|verify} messages.
                     * @param message TranslationEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITranslationEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationEvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TranslationEvaluationMetrics.verify|verify} messages.
                     * @param message TranslationEvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITranslationEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationEvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TranslationEvaluationMetrics;

                    /**
                     * Decodes a TranslationEvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationEvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TranslationEvaluationMetrics;

                    /**
                     * Verifies a TranslationEvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationEvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationEvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TranslationEvaluationMetrics;

                    /**
                     * Creates a plain object from a TranslationEvaluationMetrics message. Also converts values to other types if specified.
                     * @param message TranslationEvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TranslationEvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationEvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationEvaluationMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranslationModelMetadata. */
                interface ITranslationModelMetadata {

                    /** TranslationModelMetadata baseModel */
                    baseModel?: (string|null);

                    /** TranslationModelMetadata sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslationModelMetadata targetLanguageCode */
                    targetLanguageCode?: (string|null);
                }

                /** Represents a TranslationModelMetadata. */
                class TranslationModelMetadata implements ITranslationModelMetadata {

                    /**
                     * Constructs a new TranslationModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITranslationModelMetadata);

                    /** TranslationModelMetadata baseModel. */
                    public baseModel: string;

                    /** TranslationModelMetadata sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslationModelMetadata targetLanguageCode. */
                    public targetLanguageCode: string;

                    /**
                     * Creates a new TranslationModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITranslationModelMetadata): google.cloud.automl.v1.TranslationModelMetadata;

                    /**
                     * Encodes the specified TranslationModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.TranslationModelMetadata.verify|verify} messages.
                     * @param message TranslationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITranslationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TranslationModelMetadata.verify|verify} messages.
                     * @param message TranslationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITranslationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TranslationModelMetadata;

                    /**
                     * Decodes a TranslationModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TranslationModelMetadata;

                    /**
                     * Verifies a TranslationModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TranslationModelMetadata;

                    /**
                     * Creates a plain object from a TranslationModelMetadata message. Also converts values to other types if specified.
                     * @param message TranslationModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TranslationModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranslationAnnotation. */
                interface ITranslationAnnotation {

                    /** TranslationAnnotation translatedContent */
                    translatedContent?: (google.cloud.automl.v1.ITextSnippet|null);
                }

                /** Represents a TranslationAnnotation. */
                class TranslationAnnotation implements ITranslationAnnotation {

                    /**
                     * Constructs a new TranslationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITranslationAnnotation);

                    /** TranslationAnnotation translatedContent. */
                    public translatedContent?: (google.cloud.automl.v1.ITextSnippet|null);

                    /**
                     * Creates a new TranslationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationAnnotation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITranslationAnnotation): google.cloud.automl.v1.TranslationAnnotation;

                    /**
                     * Encodes the specified TranslationAnnotation message. Does not implicitly {@link google.cloud.automl.v1.TranslationAnnotation.verify|verify} messages.
                     * @param message TranslationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITranslationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationAnnotation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TranslationAnnotation.verify|verify} messages.
                     * @param message TranslationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITranslationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TranslationAnnotation;

                    /**
                     * Decodes a TranslationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TranslationAnnotation;

                    /**
                     * Verifies a TranslationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TranslationAnnotation;

                    /**
                     * Creates a plain object from a TranslationAnnotation message. Also converts values to other types if specified.
                     * @param message TranslationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TranslationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationAnnotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Image. */
                interface IImage {

                    /** Image imageBytes */
                    imageBytes?: (Uint8Array|string|null);

                    /** Image thumbnailUri */
                    thumbnailUri?: (string|null);
                }

                /** Represents an Image. */
                class Image implements IImage {

                    /**
                     * Constructs a new Image.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImage);

                    /** Image imageBytes. */
                    public imageBytes?: (Uint8Array|string|null);

                    /** Image thumbnailUri. */
                    public thumbnailUri: string;

                    /** Image data. */
                    public data?: "imageBytes";

                    /**
                     * Creates a new Image instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Image instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImage): google.cloud.automl.v1.Image;

                    /**
                     * Encodes the specified Image message. Does not implicitly {@link google.cloud.automl.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.automl.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Image message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.Image;

                    /**
                     * Decodes an Image message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.Image;

                    /**
                     * Verifies an Image message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Image message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Image
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.Image;

                    /**
                     * Creates a plain object from an Image message. Also converts values to other types if specified.
                     * @param message Image
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Image to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Image
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSnippet. */
                interface ITextSnippet {

                    /** TextSnippet content */
                    content?: (string|null);

                    /** TextSnippet mimeType */
                    mimeType?: (string|null);

                    /** TextSnippet contentUri */
                    contentUri?: (string|null);
                }

                /** Represents a TextSnippet. */
                class TextSnippet implements ITextSnippet {

                    /**
                     * Constructs a new TextSnippet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSnippet);

                    /** TextSnippet content. */
                    public content: string;

                    /** TextSnippet mimeType. */
                    public mimeType: string;

                    /** TextSnippet contentUri. */
                    public contentUri: string;

                    /**
                     * Creates a new TextSnippet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSnippet instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSnippet): google.cloud.automl.v1.TextSnippet;

                    /**
                     * Encodes the specified TextSnippet message. Does not implicitly {@link google.cloud.automl.v1.TextSnippet.verify|verify} messages.
                     * @param message TextSnippet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSnippet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSnippet message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSnippet.verify|verify} messages.
                     * @param message TextSnippet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSnippet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSnippet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSnippet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSnippet;

                    /**
                     * Decodes a TextSnippet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSnippet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSnippet;

                    /**
                     * Verifies a TextSnippet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSnippet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSnippet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSnippet;

                    /**
                     * Creates a plain object from a TextSnippet message. Also converts values to other types if specified.
                     * @param message TextSnippet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSnippet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSnippet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSnippet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DocumentDimensions. */
                interface IDocumentDimensions {

                    /** DocumentDimensions unit */
                    unit?: (google.cloud.automl.v1.DocumentDimensions.DocumentDimensionUnit|keyof typeof google.cloud.automl.v1.DocumentDimensions.DocumentDimensionUnit|null);

                    /** DocumentDimensions width */
                    width?: (number|null);

                    /** DocumentDimensions height */
                    height?: (number|null);
                }

                /** Represents a DocumentDimensions. */
                class DocumentDimensions implements IDocumentDimensions {

                    /**
                     * Constructs a new DocumentDimensions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDocumentDimensions);

                    /** DocumentDimensions unit. */
                    public unit: (google.cloud.automl.v1.DocumentDimensions.DocumentDimensionUnit|keyof typeof google.cloud.automl.v1.DocumentDimensions.DocumentDimensionUnit);

                    /** DocumentDimensions width. */
                    public width: number;

                    /** DocumentDimensions height. */
                    public height: number;

                    /**
                     * Creates a new DocumentDimensions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentDimensions instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDocumentDimensions): google.cloud.automl.v1.DocumentDimensions;

                    /**
                     * Encodes the specified DocumentDimensions message. Does not implicitly {@link google.cloud.automl.v1.DocumentDimensions.verify|verify} messages.
                     * @param message DocumentDimensions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDocumentDimensions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentDimensions message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DocumentDimensions.verify|verify} messages.
                     * @param message DocumentDimensions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDocumentDimensions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentDimensions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentDimensions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DocumentDimensions;

                    /**
                     * Decodes a DocumentDimensions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentDimensions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DocumentDimensions;

                    /**
                     * Verifies a DocumentDimensions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentDimensions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentDimensions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DocumentDimensions;

                    /**
                     * Creates a plain object from a DocumentDimensions message. Also converts values to other types if specified.
                     * @param message DocumentDimensions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DocumentDimensions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentDimensions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DocumentDimensions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DocumentDimensions {

                    /** DocumentDimensionUnit enum. */
                    enum DocumentDimensionUnit {
                        DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = 0,
                        INCH = 1,
                        CENTIMETER = 2,
                        POINT = 3
                    }
                }

                /** Properties of a Document. */
                interface IDocument {

                    /** Document inputConfig */
                    inputConfig?: (google.cloud.automl.v1.IDocumentInputConfig|null);

                    /** Document documentText */
                    documentText?: (google.cloud.automl.v1.ITextSnippet|null);

                    /** Document layout */
                    layout?: (google.cloud.automl.v1.Document.ILayout[]|null);

                    /** Document documentDimensions */
                    documentDimensions?: (google.cloud.automl.v1.IDocumentDimensions|null);

                    /** Document pageCount */
                    pageCount?: (number|null);
                }

                /** Represents a Document. */
                class Document implements IDocument {

                    /**
                     * Constructs a new Document.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDocument);

                    /** Document inputConfig. */
                    public inputConfig?: (google.cloud.automl.v1.IDocumentInputConfig|null);

                    /** Document documentText. */
                    public documentText?: (google.cloud.automl.v1.ITextSnippet|null);

                    /** Document layout. */
                    public layout: google.cloud.automl.v1.Document.ILayout[];

                    /** Document documentDimensions. */
                    public documentDimensions?: (google.cloud.automl.v1.IDocumentDimensions|null);

                    /** Document pageCount. */
                    public pageCount: number;

                    /**
                     * Creates a new Document instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Document instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDocument): google.cloud.automl.v1.Document;

                    /**
                     * Encodes the specified Document message. Does not implicitly {@link google.cloud.automl.v1.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Document message, length delimited. Does not implicitly {@link google.cloud.automl.v1.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Document message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.Document;

                    /**
                     * Decodes a Document message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.Document;

                    /**
                     * Verifies a Document message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Document message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Document
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.Document;

                    /**
                     * Creates a plain object from a Document message. Also converts values to other types if specified.
                     * @param message Document
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Document to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Document
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Document {

                    /** Properties of a Layout. */
                    interface ILayout {

                        /** Layout textSegment */
                        textSegment?: (google.cloud.automl.v1.ITextSegment|null);

                        /** Layout pageNumber */
                        pageNumber?: (number|null);

                        /** Layout boundingPoly */
                        boundingPoly?: (google.cloud.automl.v1.IBoundingPoly|null);

                        /** Layout textSegmentType */
                        textSegmentType?: (google.cloud.automl.v1.Document.Layout.TextSegmentType|keyof typeof google.cloud.automl.v1.Document.Layout.TextSegmentType|null);
                    }

                    /** Represents a Layout. */
                    class Layout implements ILayout {

                        /**
                         * Constructs a new Layout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.Document.ILayout);

                        /** Layout textSegment. */
                        public textSegment?: (google.cloud.automl.v1.ITextSegment|null);

                        /** Layout pageNumber. */
                        public pageNumber: number;

                        /** Layout boundingPoly. */
                        public boundingPoly?: (google.cloud.automl.v1.IBoundingPoly|null);

                        /** Layout textSegmentType. */
                        public textSegmentType: (google.cloud.automl.v1.Document.Layout.TextSegmentType|keyof typeof google.cloud.automl.v1.Document.Layout.TextSegmentType);

                        /**
                         * Creates a new Layout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Layout instance
                         */
                        public static create(properties?: google.cloud.automl.v1.Document.ILayout): google.cloud.automl.v1.Document.Layout;

                        /**
                         * Encodes the specified Layout message. Does not implicitly {@link google.cloud.automl.v1.Document.Layout.verify|verify} messages.
                         * @param message Layout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.Document.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Layout message, length delimited. Does not implicitly {@link google.cloud.automl.v1.Document.Layout.verify|verify} messages.
                         * @param message Layout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.Document.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Layout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Layout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.Document.Layout;

                        /**
                         * Decodes a Layout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Layout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.Document.Layout;

                        /**
                         * Verifies a Layout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Layout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Layout
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.Document.Layout;

                        /**
                         * Creates a plain object from a Layout message. Also converts values to other types if specified.
                         * @param message Layout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.Document.Layout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Layout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Layout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Layout {

                        /** TextSegmentType enum. */
                        enum TextSegmentType {
                            TEXT_SEGMENT_TYPE_UNSPECIFIED = 0,
                            TOKEN = 1,
                            PARAGRAPH = 2,
                            FORM_FIELD = 3,
                            FORM_FIELD_NAME = 4,
                            FORM_FIELD_CONTENTS = 5,
                            TABLE = 6,
                            TABLE_HEADER = 7,
                            TABLE_ROW = 8,
                            TABLE_CELL = 9
                        }
                    }
                }

                /** Properties of an ExamplePayload. */
                interface IExamplePayload {

                    /** ExamplePayload image */
                    image?: (google.cloud.automl.v1.IImage|null);

                    /** ExamplePayload textSnippet */
                    textSnippet?: (google.cloud.automl.v1.ITextSnippet|null);

                    /** ExamplePayload document */
                    document?: (google.cloud.automl.v1.IDocument|null);
                }

                /** Represents an ExamplePayload. */
                class ExamplePayload implements IExamplePayload {

                    /**
                     * Constructs a new ExamplePayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IExamplePayload);

                    /** ExamplePayload image. */
                    public image?: (google.cloud.automl.v1.IImage|null);

                    /** ExamplePayload textSnippet. */
                    public textSnippet?: (google.cloud.automl.v1.ITextSnippet|null);

                    /** ExamplePayload document. */
                    public document?: (google.cloud.automl.v1.IDocument|null);

                    /** ExamplePayload payload. */
                    public payload?: ("image"|"textSnippet"|"document");

                    /**
                     * Creates a new ExamplePayload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExamplePayload instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IExamplePayload): google.cloud.automl.v1.ExamplePayload;

                    /**
                     * Encodes the specified ExamplePayload message. Does not implicitly {@link google.cloud.automl.v1.ExamplePayload.verify|verify} messages.
                     * @param message ExamplePayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IExamplePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExamplePayload message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExamplePayload.verify|verify} messages.
                     * @param message ExamplePayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IExamplePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExamplePayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExamplePayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExamplePayload;

                    /**
                     * Decodes an ExamplePayload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExamplePayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExamplePayload;

                    /**
                     * Verifies an ExamplePayload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExamplePayload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExamplePayload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExamplePayload;

                    /**
                     * Creates a plain object from an ExamplePayload message. Also converts values to other types if specified.
                     * @param message ExamplePayload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ExamplePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExamplePayload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExamplePayload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.automl.v1.IGcsSource|null);

                    /** InputConfig params */
                    params?: ({ [k: string]: string }|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IInputConfig);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.automl.v1.IGcsSource|null);

                    /** InputConfig params. */
                    public params: { [k: string]: string };

                    /** InputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IInputConfig): google.cloud.automl.v1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.automl.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchPredictInputConfig. */
                interface IBatchPredictInputConfig {

                    /** BatchPredictInputConfig gcsSource */
                    gcsSource?: (google.cloud.automl.v1.IGcsSource|null);
                }

                /** Represents a BatchPredictInputConfig. */
                class BatchPredictInputConfig implements IBatchPredictInputConfig {

                    /**
                     * Constructs a new BatchPredictInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBatchPredictInputConfig);

                    /** BatchPredictInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.automl.v1.IGcsSource|null);

                    /** BatchPredictInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new BatchPredictInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchPredictInputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBatchPredictInputConfig): google.cloud.automl.v1.BatchPredictInputConfig;

                    /**
                     * Encodes the specified BatchPredictInputConfig message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictInputConfig.verify|verify} messages.
                     * @param message BatchPredictInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBatchPredictInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchPredictInputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictInputConfig.verify|verify} messages.
                     * @param message BatchPredictInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBatchPredictInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchPredictInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchPredictInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictInputConfig;

                    /**
                     * Decodes a BatchPredictInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchPredictInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictInputConfig;

                    /**
                     * Verifies a BatchPredictInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchPredictInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchPredictInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictInputConfig;

                    /**
                     * Creates a plain object from a BatchPredictInputConfig message. Also converts values to other types if specified.
                     * @param message BatchPredictInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BatchPredictInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchPredictInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchPredictInputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DocumentInputConfig. */
                interface IDocumentInputConfig {

                    /** DocumentInputConfig gcsSource */
                    gcsSource?: (google.cloud.automl.v1.IGcsSource|null);
                }

                /** Represents a DocumentInputConfig. */
                class DocumentInputConfig implements IDocumentInputConfig {

                    /**
                     * Constructs a new DocumentInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDocumentInputConfig);

                    /** DocumentInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.automl.v1.IGcsSource|null);

                    /**
                     * Creates a new DocumentInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentInputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDocumentInputConfig): google.cloud.automl.v1.DocumentInputConfig;

                    /**
                     * Encodes the specified DocumentInputConfig message. Does not implicitly {@link google.cloud.automl.v1.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentInputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DocumentInputConfig;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DocumentInputConfig;

                    /**
                     * Verifies a DocumentInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DocumentInputConfig;

                    /**
                     * Creates a plain object from a DocumentInputConfig message. Also converts values to other types if specified.
                     * @param message DocumentInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DocumentInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DocumentInputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IOutputConfig): google.cloud.automl.v1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.automl.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchPredictOutputConfig. */
                interface IBatchPredictOutputConfig {

                    /** BatchPredictOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);
                }

                /** Represents a BatchPredictOutputConfig. */
                class BatchPredictOutputConfig implements IBatchPredictOutputConfig {

                    /**
                     * Constructs a new BatchPredictOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBatchPredictOutputConfig);

                    /** BatchPredictOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);

                    /** BatchPredictOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new BatchPredictOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchPredictOutputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBatchPredictOutputConfig): google.cloud.automl.v1.BatchPredictOutputConfig;

                    /**
                     * Encodes the specified BatchPredictOutputConfig message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOutputConfig.verify|verify} messages.
                     * @param message BatchPredictOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBatchPredictOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchPredictOutputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOutputConfig.verify|verify} messages.
                     * @param message BatchPredictOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBatchPredictOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchPredictOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchPredictOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictOutputConfig;

                    /**
                     * Decodes a BatchPredictOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchPredictOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictOutputConfig;

                    /**
                     * Verifies a BatchPredictOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchPredictOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchPredictOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictOutputConfig;

                    /**
                     * Creates a plain object from a BatchPredictOutputConfig message. Also converts values to other types if specified.
                     * @param message BatchPredictOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BatchPredictOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchPredictOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchPredictOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelExportOutputConfig. */
                interface IModelExportOutputConfig {

                    /** ModelExportOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);

                    /** ModelExportOutputConfig modelFormat */
                    modelFormat?: (string|null);

                    /** ModelExportOutputConfig params */
                    params?: ({ [k: string]: string }|null);
                }

                /** Represents a ModelExportOutputConfig. */
                class ModelExportOutputConfig implements IModelExportOutputConfig {

                    /**
                     * Constructs a new ModelExportOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IModelExportOutputConfig);

                    /** ModelExportOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.automl.v1.IGcsDestination|null);

                    /** ModelExportOutputConfig modelFormat. */
                    public modelFormat: string;

                    /** ModelExportOutputConfig params. */
                    public params: { [k: string]: string };

                    /** ModelExportOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new ModelExportOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelExportOutputConfig instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IModelExportOutputConfig): google.cloud.automl.v1.ModelExportOutputConfig;

                    /**
                     * Encodes the specified ModelExportOutputConfig message. Does not implicitly {@link google.cloud.automl.v1.ModelExportOutputConfig.verify|verify} messages.
                     * @param message ModelExportOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IModelExportOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelExportOutputConfig message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ModelExportOutputConfig.verify|verify} messages.
                     * @param message ModelExportOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IModelExportOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelExportOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelExportOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ModelExportOutputConfig;

                    /**
                     * Decodes a ModelExportOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelExportOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ModelExportOutputConfig;

                    /**
                     * Verifies a ModelExportOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelExportOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelExportOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ModelExportOutputConfig;

                    /**
                     * Creates a plain object from a ModelExportOutputConfig message. Also converts values to other types if specified.
                     * @param message ModelExportOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ModelExportOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelExportOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelExportOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource inputUris */
                    inputUris?: (string[]|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGcsSource);

                    /** GcsSource inputUris. */
                    public inputUris: string[];

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGcsSource): google.cloud.automl.v1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.automl.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination outputUriPrefix */
                    outputUriPrefix?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGcsDestination);

                    /** GcsDestination outputUriPrefix. */
                    public outputUriPrefix: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGcsDestination): google.cloud.automl.v1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.automl.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnnotationSpec. */
                interface IAnnotationSpec {

                    /** AnnotationSpec name */
                    name?: (string|null);

                    /** AnnotationSpec displayName */
                    displayName?: (string|null);

                    /** AnnotationSpec exampleCount */
                    exampleCount?: (number|null);
                }

                /** Represents an AnnotationSpec. */
                class AnnotationSpec implements IAnnotationSpec {

                    /**
                     * Constructs a new AnnotationSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IAnnotationSpec);

                    /** AnnotationSpec name. */
                    public name: string;

                    /** AnnotationSpec displayName. */
                    public displayName: string;

                    /** AnnotationSpec exampleCount. */
                    public exampleCount: number;

                    /**
                     * Creates a new AnnotationSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationSpec instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IAnnotationSpec): google.cloud.automl.v1.AnnotationSpec;

                    /**
                     * Encodes the specified AnnotationSpec message. Does not implicitly {@link google.cloud.automl.v1.AnnotationSpec.verify|verify} messages.
                     * @param message AnnotationSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IAnnotationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationSpec message, length delimited. Does not implicitly {@link google.cloud.automl.v1.AnnotationSpec.verify|verify} messages.
                     * @param message AnnotationSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IAnnotationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.AnnotationSpec;

                    /**
                     * Decodes an AnnotationSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.AnnotationSpec;

                    /**
                     * Verifies an AnnotationSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.AnnotationSpec;

                    /**
                     * Creates a plain object from an AnnotationSpec message. Also converts values to other types if specified.
                     * @param message AnnotationSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.AnnotationSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotationSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Dataset. */
                interface IDataset {

                    /** Dataset translationDatasetMetadata */
                    translationDatasetMetadata?: (google.cloud.automl.v1.ITranslationDatasetMetadata|null);

                    /** Dataset imageClassificationDatasetMetadata */
                    imageClassificationDatasetMetadata?: (google.cloud.automl.v1.IImageClassificationDatasetMetadata|null);

                    /** Dataset textClassificationDatasetMetadata */
                    textClassificationDatasetMetadata?: (google.cloud.automl.v1.ITextClassificationDatasetMetadata|null);

                    /** Dataset imageObjectDetectionDatasetMetadata */
                    imageObjectDetectionDatasetMetadata?: (google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata|null);

                    /** Dataset textExtractionDatasetMetadata */
                    textExtractionDatasetMetadata?: (google.cloud.automl.v1.ITextExtractionDatasetMetadata|null);

                    /** Dataset textSentimentDatasetMetadata */
                    textSentimentDatasetMetadata?: (google.cloud.automl.v1.ITextSentimentDatasetMetadata|null);

                    /** Dataset name */
                    name?: (string|null);

                    /** Dataset displayName */
                    displayName?: (string|null);

                    /** Dataset description */
                    description?: (string|null);

                    /** Dataset exampleCount */
                    exampleCount?: (number|null);

                    /** Dataset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset etag */
                    etag?: (string|null);

                    /** Dataset labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Dataset. */
                class Dataset implements IDataset {

                    /**
                     * Constructs a new Dataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDataset);

                    /** Dataset translationDatasetMetadata. */
                    public translationDatasetMetadata?: (google.cloud.automl.v1.ITranslationDatasetMetadata|null);

                    /** Dataset imageClassificationDatasetMetadata. */
                    public imageClassificationDatasetMetadata?: (google.cloud.automl.v1.IImageClassificationDatasetMetadata|null);

                    /** Dataset textClassificationDatasetMetadata. */
                    public textClassificationDatasetMetadata?: (google.cloud.automl.v1.ITextClassificationDatasetMetadata|null);

                    /** Dataset imageObjectDetectionDatasetMetadata. */
                    public imageObjectDetectionDatasetMetadata?: (google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata|null);

                    /** Dataset textExtractionDatasetMetadata. */
                    public textExtractionDatasetMetadata?: (google.cloud.automl.v1.ITextExtractionDatasetMetadata|null);

                    /** Dataset textSentimentDatasetMetadata. */
                    public textSentimentDatasetMetadata?: (google.cloud.automl.v1.ITextSentimentDatasetMetadata|null);

                    /** Dataset name. */
                    public name: string;

                    /** Dataset displayName. */
                    public displayName: string;

                    /** Dataset description. */
                    public description: string;

                    /** Dataset exampleCount. */
                    public exampleCount: number;

                    /** Dataset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset etag. */
                    public etag: string;

                    /** Dataset labels. */
                    public labels: { [k: string]: string };

                    /** Dataset datasetMetadata. */
                    public datasetMetadata?: ("translationDatasetMetadata"|"imageClassificationDatasetMetadata"|"textClassificationDatasetMetadata"|"imageObjectDetectionDatasetMetadata"|"textExtractionDatasetMetadata"|"textSentimentDatasetMetadata");

                    /**
                     * Creates a new Dataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dataset instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDataset): google.cloud.automl.v1.Dataset;

                    /**
                     * Encodes the specified Dataset message. Does not implicitly {@link google.cloud.automl.v1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dataset message, length delimited. Does not implicitly {@link google.cloud.automl.v1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.Dataset;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.Dataset;

                    /**
                     * Verifies a Dataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dataset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.Dataset;

                    /**
                     * Creates a plain object from a Dataset message. Also converts values to other types if specified.
                     * @param message Dataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.Dataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Dataset
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageClassificationDatasetMetadata. */
                interface IImageClassificationDatasetMetadata {

                    /** ImageClassificationDatasetMetadata classificationType */
                    classificationType?: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType|null);
                }

                /** Represents an ImageClassificationDatasetMetadata. */
                class ImageClassificationDatasetMetadata implements IImageClassificationDatasetMetadata {

                    /**
                     * Constructs a new ImageClassificationDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageClassificationDatasetMetadata);

                    /** ImageClassificationDatasetMetadata classificationType. */
                    public classificationType: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType);

                    /**
                     * Creates a new ImageClassificationDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageClassificationDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageClassificationDatasetMetadata): google.cloud.automl.v1.ImageClassificationDatasetMetadata;

                    /**
                     * Encodes the specified ImageClassificationDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationDatasetMetadata.verify|verify} messages.
                     * @param message ImageClassificationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageClassificationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageClassificationDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationDatasetMetadata.verify|verify} messages.
                     * @param message ImageClassificationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageClassificationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageClassificationDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageClassificationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageClassificationDatasetMetadata;

                    /**
                     * Decodes an ImageClassificationDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageClassificationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageClassificationDatasetMetadata;

                    /**
                     * Verifies an ImageClassificationDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageClassificationDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageClassificationDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageClassificationDatasetMetadata;

                    /**
                     * Creates a plain object from an ImageClassificationDatasetMetadata message. Also converts values to other types if specified.
                     * @param message ImageClassificationDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageClassificationDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageClassificationDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageClassificationDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageObjectDetectionDatasetMetadata. */
                interface IImageObjectDetectionDatasetMetadata {
                }

                /** Represents an ImageObjectDetectionDatasetMetadata. */
                class ImageObjectDetectionDatasetMetadata implements IImageObjectDetectionDatasetMetadata {

                    /**
                     * Constructs a new ImageObjectDetectionDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata);

                    /**
                     * Creates a new ImageObjectDetectionDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageObjectDetectionDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata): google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata;

                    /**
                     * Encodes the specified ImageObjectDetectionDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageObjectDetectionDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageObjectDetectionDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageObjectDetectionDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageObjectDetectionDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata;

                    /**
                     * Decodes an ImageObjectDetectionDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageObjectDetectionDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata;

                    /**
                     * Verifies an ImageObjectDetectionDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageObjectDetectionDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageObjectDetectionDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata;

                    /**
                     * Creates a plain object from an ImageObjectDetectionDatasetMetadata message. Also converts values to other types if specified.
                     * @param message ImageObjectDetectionDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageObjectDetectionDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageObjectDetectionDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageObjectDetectionDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageClassificationModelMetadata. */
                interface IImageClassificationModelMetadata {

                    /** ImageClassificationModelMetadata baseModelId */
                    baseModelId?: (string|null);

                    /** ImageClassificationModelMetadata trainBudgetMilliNodeHours */
                    trainBudgetMilliNodeHours?: (number|Long|string|null);

                    /** ImageClassificationModelMetadata trainCostMilliNodeHours */
                    trainCostMilliNodeHours?: (number|Long|string|null);

                    /** ImageClassificationModelMetadata stopReason */
                    stopReason?: (string|null);

                    /** ImageClassificationModelMetadata modelType */
                    modelType?: (string|null);

                    /** ImageClassificationModelMetadata nodeQps */
                    nodeQps?: (number|null);

                    /** ImageClassificationModelMetadata nodeCount */
                    nodeCount?: (number|Long|string|null);
                }

                /** Represents an ImageClassificationModelMetadata. */
                class ImageClassificationModelMetadata implements IImageClassificationModelMetadata {

                    /**
                     * Constructs a new ImageClassificationModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageClassificationModelMetadata);

                    /** ImageClassificationModelMetadata baseModelId. */
                    public baseModelId: string;

                    /** ImageClassificationModelMetadata trainBudgetMilliNodeHours. */
                    public trainBudgetMilliNodeHours: (number|Long|string);

                    /** ImageClassificationModelMetadata trainCostMilliNodeHours. */
                    public trainCostMilliNodeHours: (number|Long|string);

                    /** ImageClassificationModelMetadata stopReason. */
                    public stopReason: string;

                    /** ImageClassificationModelMetadata modelType. */
                    public modelType: string;

                    /** ImageClassificationModelMetadata nodeQps. */
                    public nodeQps: number;

                    /** ImageClassificationModelMetadata nodeCount. */
                    public nodeCount: (number|Long|string);

                    /**
                     * Creates a new ImageClassificationModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageClassificationModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageClassificationModelMetadata): google.cloud.automl.v1.ImageClassificationModelMetadata;

                    /**
                     * Encodes the specified ImageClassificationModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationModelMetadata.verify|verify} messages.
                     * @param message ImageClassificationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageClassificationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageClassificationModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationModelMetadata.verify|verify} messages.
                     * @param message ImageClassificationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageClassificationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageClassificationModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageClassificationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageClassificationModelMetadata;

                    /**
                     * Decodes an ImageClassificationModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageClassificationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageClassificationModelMetadata;

                    /**
                     * Verifies an ImageClassificationModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageClassificationModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageClassificationModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageClassificationModelMetadata;

                    /**
                     * Creates a plain object from an ImageClassificationModelMetadata message. Also converts values to other types if specified.
                     * @param message ImageClassificationModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageClassificationModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageClassificationModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageClassificationModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageObjectDetectionModelMetadata. */
                interface IImageObjectDetectionModelMetadata {

                    /** ImageObjectDetectionModelMetadata modelType */
                    modelType?: (string|null);

                    /** ImageObjectDetectionModelMetadata nodeCount */
                    nodeCount?: (number|Long|string|null);

                    /** ImageObjectDetectionModelMetadata nodeQps */
                    nodeQps?: (number|null);

                    /** ImageObjectDetectionModelMetadata stopReason */
                    stopReason?: (string|null);

                    /** ImageObjectDetectionModelMetadata trainBudgetMilliNodeHours */
                    trainBudgetMilliNodeHours?: (number|Long|string|null);

                    /** ImageObjectDetectionModelMetadata trainCostMilliNodeHours */
                    trainCostMilliNodeHours?: (number|Long|string|null);
                }

                /** Represents an ImageObjectDetectionModelMetadata. */
                class ImageObjectDetectionModelMetadata implements IImageObjectDetectionModelMetadata {

                    /**
                     * Constructs a new ImageObjectDetectionModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageObjectDetectionModelMetadata);

                    /** ImageObjectDetectionModelMetadata modelType. */
                    public modelType: string;

                    /** ImageObjectDetectionModelMetadata nodeCount. */
                    public nodeCount: (number|Long|string);

                    /** ImageObjectDetectionModelMetadata nodeQps. */
                    public nodeQps: number;

                    /** ImageObjectDetectionModelMetadata stopReason. */
                    public stopReason: string;

                    /** ImageObjectDetectionModelMetadata trainBudgetMilliNodeHours. */
                    public trainBudgetMilliNodeHours: (number|Long|string);

                    /** ImageObjectDetectionModelMetadata trainCostMilliNodeHours. */
                    public trainCostMilliNodeHours: (number|Long|string);

                    /**
                     * Creates a new ImageObjectDetectionModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageObjectDetectionModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageObjectDetectionModelMetadata): google.cloud.automl.v1.ImageObjectDetectionModelMetadata;

                    /**
                     * Encodes the specified ImageObjectDetectionModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionModelMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageObjectDetectionModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageObjectDetectionModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionModelMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageObjectDetectionModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageObjectDetectionModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageObjectDetectionModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageObjectDetectionModelMetadata;

                    /**
                     * Decodes an ImageObjectDetectionModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageObjectDetectionModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageObjectDetectionModelMetadata;

                    /**
                     * Verifies an ImageObjectDetectionModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageObjectDetectionModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageObjectDetectionModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageObjectDetectionModelMetadata;

                    /**
                     * Creates a plain object from an ImageObjectDetectionModelMetadata message. Also converts values to other types if specified.
                     * @param message ImageObjectDetectionModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageObjectDetectionModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageObjectDetectionModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageObjectDetectionModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageClassificationModelDeploymentMetadata. */
                interface IImageClassificationModelDeploymentMetadata {

                    /** ImageClassificationModelDeploymentMetadata nodeCount */
                    nodeCount?: (number|Long|string|null);
                }

                /** Represents an ImageClassificationModelDeploymentMetadata. */
                class ImageClassificationModelDeploymentMetadata implements IImageClassificationModelDeploymentMetadata {

                    /**
                     * Constructs a new ImageClassificationModelDeploymentMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata);

                    /** ImageClassificationModelDeploymentMetadata nodeCount. */
                    public nodeCount: (number|Long|string);

                    /**
                     * Creates a new ImageClassificationModelDeploymentMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageClassificationModelDeploymentMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata): google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata;

                    /**
                     * Encodes the specified ImageClassificationModelDeploymentMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata.verify|verify} messages.
                     * @param message ImageClassificationModelDeploymentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageClassificationModelDeploymentMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata.verify|verify} messages.
                     * @param message ImageClassificationModelDeploymentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageClassificationModelDeploymentMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageClassificationModelDeploymentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata;

                    /**
                     * Decodes an ImageClassificationModelDeploymentMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageClassificationModelDeploymentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata;

                    /**
                     * Verifies an ImageClassificationModelDeploymentMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageClassificationModelDeploymentMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageClassificationModelDeploymentMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata;

                    /**
                     * Creates a plain object from an ImageClassificationModelDeploymentMetadata message. Also converts values to other types if specified.
                     * @param message ImageClassificationModelDeploymentMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageClassificationModelDeploymentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageClassificationModelDeploymentMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageClassificationModelDeploymentMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageObjectDetectionModelDeploymentMetadata. */
                interface IImageObjectDetectionModelDeploymentMetadata {

                    /** ImageObjectDetectionModelDeploymentMetadata nodeCount */
                    nodeCount?: (number|Long|string|null);
                }

                /** Represents an ImageObjectDetectionModelDeploymentMetadata. */
                class ImageObjectDetectionModelDeploymentMetadata implements IImageObjectDetectionModelDeploymentMetadata {

                    /**
                     * Constructs a new ImageObjectDetectionModelDeploymentMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata);

                    /** ImageObjectDetectionModelDeploymentMetadata nodeCount. */
                    public nodeCount: (number|Long|string);

                    /**
                     * Creates a new ImageObjectDetectionModelDeploymentMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageObjectDetectionModelDeploymentMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata): google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata;

                    /**
                     * Encodes the specified ImageObjectDetectionModelDeploymentMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionModelDeploymentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageObjectDetectionModelDeploymentMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata.verify|verify} messages.
                     * @param message ImageObjectDetectionModelDeploymentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageObjectDetectionModelDeploymentMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageObjectDetectionModelDeploymentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata;

                    /**
                     * Decodes an ImageObjectDetectionModelDeploymentMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageObjectDetectionModelDeploymentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata;

                    /**
                     * Verifies an ImageObjectDetectionModelDeploymentMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageObjectDetectionModelDeploymentMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageObjectDetectionModelDeploymentMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata;

                    /**
                     * Creates a plain object from an ImageObjectDetectionModelDeploymentMetadata message. Also converts values to other types if specified.
                     * @param message ImageObjectDetectionModelDeploymentMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImageObjectDetectionModelDeploymentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageObjectDetectionModelDeploymentMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageObjectDetectionModelDeploymentMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextClassificationDatasetMetadata. */
                interface ITextClassificationDatasetMetadata {

                    /** TextClassificationDatasetMetadata classificationType */
                    classificationType?: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType|null);
                }

                /** Represents a TextClassificationDatasetMetadata. */
                class TextClassificationDatasetMetadata implements ITextClassificationDatasetMetadata {

                    /**
                     * Constructs a new TextClassificationDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextClassificationDatasetMetadata);

                    /** TextClassificationDatasetMetadata classificationType. */
                    public classificationType: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType);

                    /**
                     * Creates a new TextClassificationDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextClassificationDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextClassificationDatasetMetadata): google.cloud.automl.v1.TextClassificationDatasetMetadata;

                    /**
                     * Encodes the specified TextClassificationDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextClassificationDatasetMetadata.verify|verify} messages.
                     * @param message TextClassificationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextClassificationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextClassificationDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextClassificationDatasetMetadata.verify|verify} messages.
                     * @param message TextClassificationDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextClassificationDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextClassificationDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextClassificationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextClassificationDatasetMetadata;

                    /**
                     * Decodes a TextClassificationDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextClassificationDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextClassificationDatasetMetadata;

                    /**
                     * Verifies a TextClassificationDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextClassificationDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextClassificationDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextClassificationDatasetMetadata;

                    /**
                     * Creates a plain object from a TextClassificationDatasetMetadata message. Also converts values to other types if specified.
                     * @param message TextClassificationDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextClassificationDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextClassificationDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextClassificationDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextClassificationModelMetadata. */
                interface ITextClassificationModelMetadata {

                    /** TextClassificationModelMetadata classificationType */
                    classificationType?: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType|null);
                }

                /** Represents a TextClassificationModelMetadata. */
                class TextClassificationModelMetadata implements ITextClassificationModelMetadata {

                    /**
                     * Constructs a new TextClassificationModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextClassificationModelMetadata);

                    /** TextClassificationModelMetadata classificationType. */
                    public classificationType: (google.cloud.automl.v1.ClassificationType|keyof typeof google.cloud.automl.v1.ClassificationType);

                    /**
                     * Creates a new TextClassificationModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextClassificationModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextClassificationModelMetadata): google.cloud.automl.v1.TextClassificationModelMetadata;

                    /**
                     * Encodes the specified TextClassificationModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextClassificationModelMetadata.verify|verify} messages.
                     * @param message TextClassificationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextClassificationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextClassificationModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextClassificationModelMetadata.verify|verify} messages.
                     * @param message TextClassificationModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextClassificationModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextClassificationModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextClassificationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextClassificationModelMetadata;

                    /**
                     * Decodes a TextClassificationModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextClassificationModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextClassificationModelMetadata;

                    /**
                     * Verifies a TextClassificationModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextClassificationModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextClassificationModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextClassificationModelMetadata;

                    /**
                     * Creates a plain object from a TextClassificationModelMetadata message. Also converts values to other types if specified.
                     * @param message TextClassificationModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextClassificationModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextClassificationModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextClassificationModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextExtractionDatasetMetadata. */
                interface ITextExtractionDatasetMetadata {
                }

                /** Represents a TextExtractionDatasetMetadata. */
                class TextExtractionDatasetMetadata implements ITextExtractionDatasetMetadata {

                    /**
                     * Constructs a new TextExtractionDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextExtractionDatasetMetadata);

                    /**
                     * Creates a new TextExtractionDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextExtractionDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextExtractionDatasetMetadata): google.cloud.automl.v1.TextExtractionDatasetMetadata;

                    /**
                     * Encodes the specified TextExtractionDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextExtractionDatasetMetadata.verify|verify} messages.
                     * @param message TextExtractionDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextExtractionDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextExtractionDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextExtractionDatasetMetadata.verify|verify} messages.
                     * @param message TextExtractionDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextExtractionDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextExtractionDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextExtractionDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextExtractionDatasetMetadata;

                    /**
                     * Decodes a TextExtractionDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextExtractionDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextExtractionDatasetMetadata;

                    /**
                     * Verifies a TextExtractionDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextExtractionDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextExtractionDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextExtractionDatasetMetadata;

                    /**
                     * Creates a plain object from a TextExtractionDatasetMetadata message. Also converts values to other types if specified.
                     * @param message TextExtractionDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextExtractionDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextExtractionDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextExtractionDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextExtractionModelMetadata. */
                interface ITextExtractionModelMetadata {
                }

                /** Represents a TextExtractionModelMetadata. */
                class TextExtractionModelMetadata implements ITextExtractionModelMetadata {

                    /**
                     * Constructs a new TextExtractionModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextExtractionModelMetadata);

                    /**
                     * Creates a new TextExtractionModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextExtractionModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextExtractionModelMetadata): google.cloud.automl.v1.TextExtractionModelMetadata;

                    /**
                     * Encodes the specified TextExtractionModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextExtractionModelMetadata.verify|verify} messages.
                     * @param message TextExtractionModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextExtractionModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextExtractionModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextExtractionModelMetadata.verify|verify} messages.
                     * @param message TextExtractionModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextExtractionModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextExtractionModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextExtractionModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextExtractionModelMetadata;

                    /**
                     * Decodes a TextExtractionModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextExtractionModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextExtractionModelMetadata;

                    /**
                     * Verifies a TextExtractionModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextExtractionModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextExtractionModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextExtractionModelMetadata;

                    /**
                     * Creates a plain object from a TextExtractionModelMetadata message. Also converts values to other types if specified.
                     * @param message TextExtractionModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextExtractionModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextExtractionModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextExtractionModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSentimentDatasetMetadata. */
                interface ITextSentimentDatasetMetadata {

                    /** TextSentimentDatasetMetadata sentimentMax */
                    sentimentMax?: (number|null);
                }

                /** Represents a TextSentimentDatasetMetadata. */
                class TextSentimentDatasetMetadata implements ITextSentimentDatasetMetadata {

                    /**
                     * Constructs a new TextSentimentDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSentimentDatasetMetadata);

                    /** TextSentimentDatasetMetadata sentimentMax. */
                    public sentimentMax: number;

                    /**
                     * Creates a new TextSentimentDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSentimentDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSentimentDatasetMetadata): google.cloud.automl.v1.TextSentimentDatasetMetadata;

                    /**
                     * Encodes the specified TextSentimentDatasetMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextSentimentDatasetMetadata.verify|verify} messages.
                     * @param message TextSentimentDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSentimentDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSentimentDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSentimentDatasetMetadata.verify|verify} messages.
                     * @param message TextSentimentDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSentimentDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSentimentDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSentimentDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSentimentDatasetMetadata;

                    /**
                     * Decodes a TextSentimentDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSentimentDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSentimentDatasetMetadata;

                    /**
                     * Verifies a TextSentimentDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSentimentDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSentimentDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSentimentDatasetMetadata;

                    /**
                     * Creates a plain object from a TextSentimentDatasetMetadata message. Also converts values to other types if specified.
                     * @param message TextSentimentDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSentimentDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSentimentDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSentimentDatasetMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextSentimentModelMetadata. */
                interface ITextSentimentModelMetadata {
                }

                /** Represents a TextSentimentModelMetadata. */
                class TextSentimentModelMetadata implements ITextSentimentModelMetadata {

                    /**
                     * Constructs a new TextSentimentModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ITextSentimentModelMetadata);

                    /**
                     * Creates a new TextSentimentModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSentimentModelMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ITextSentimentModelMetadata): google.cloud.automl.v1.TextSentimentModelMetadata;

                    /**
                     * Encodes the specified TextSentimentModelMetadata message. Does not implicitly {@link google.cloud.automl.v1.TextSentimentModelMetadata.verify|verify} messages.
                     * @param message TextSentimentModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ITextSentimentModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSentimentModelMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.TextSentimentModelMetadata.verify|verify} messages.
                     * @param message TextSentimentModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ITextSentimentModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSentimentModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSentimentModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.TextSentimentModelMetadata;

                    /**
                     * Decodes a TextSentimentModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSentimentModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.TextSentimentModelMetadata;

                    /**
                     * Verifies a TextSentimentModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSentimentModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSentimentModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.TextSentimentModelMetadata;

                    /**
                     * Creates a plain object from a TextSentimentModelMetadata message. Also converts values to other types if specified.
                     * @param message TextSentimentModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.TextSentimentModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSentimentModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextSentimentModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Model. */
                interface IModel {

                    /** Model translationModelMetadata */
                    translationModelMetadata?: (google.cloud.automl.v1.ITranslationModelMetadata|null);

                    /** Model imageClassificationModelMetadata */
                    imageClassificationModelMetadata?: (google.cloud.automl.v1.IImageClassificationModelMetadata|null);

                    /** Model textClassificationModelMetadata */
                    textClassificationModelMetadata?: (google.cloud.automl.v1.ITextClassificationModelMetadata|null);

                    /** Model imageObjectDetectionModelMetadata */
                    imageObjectDetectionModelMetadata?: (google.cloud.automl.v1.IImageObjectDetectionModelMetadata|null);

                    /** Model textExtractionModelMetadata */
                    textExtractionModelMetadata?: (google.cloud.automl.v1.ITextExtractionModelMetadata|null);

                    /** Model textSentimentModelMetadata */
                    textSentimentModelMetadata?: (google.cloud.automl.v1.ITextSentimentModelMetadata|null);

                    /** Model name */
                    name?: (string|null);

                    /** Model displayName */
                    displayName?: (string|null);

                    /** Model datasetId */
                    datasetId?: (string|null);

                    /** Model createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Model updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Model deploymentState */
                    deploymentState?: (google.cloud.automl.v1.Model.DeploymentState|keyof typeof google.cloud.automl.v1.Model.DeploymentState|null);

                    /** Model etag */
                    etag?: (string|null);

                    /** Model labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Model. */
                class Model implements IModel {

                    /**
                     * Constructs a new Model.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IModel);

                    /** Model translationModelMetadata. */
                    public translationModelMetadata?: (google.cloud.automl.v1.ITranslationModelMetadata|null);

                    /** Model imageClassificationModelMetadata. */
                    public imageClassificationModelMetadata?: (google.cloud.automl.v1.IImageClassificationModelMetadata|null);

                    /** Model textClassificationModelMetadata. */
                    public textClassificationModelMetadata?: (google.cloud.automl.v1.ITextClassificationModelMetadata|null);

                    /** Model imageObjectDetectionModelMetadata. */
                    public imageObjectDetectionModelMetadata?: (google.cloud.automl.v1.IImageObjectDetectionModelMetadata|null);

                    /** Model textExtractionModelMetadata. */
                    public textExtractionModelMetadata?: (google.cloud.automl.v1.ITextExtractionModelMetadata|null);

                    /** Model textSentimentModelMetadata. */
                    public textSentimentModelMetadata?: (google.cloud.automl.v1.ITextSentimentModelMetadata|null);

                    /** Model name. */
                    public name: string;

                    /** Model displayName. */
                    public displayName: string;

                    /** Model datasetId. */
                    public datasetId: string;

                    /** Model createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Model updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Model deploymentState. */
                    public deploymentState: (google.cloud.automl.v1.Model.DeploymentState|keyof typeof google.cloud.automl.v1.Model.DeploymentState);

                    /** Model etag. */
                    public etag: string;

                    /** Model labels. */
                    public labels: { [k: string]: string };

                    /** Model modelMetadata. */
                    public modelMetadata?: ("translationModelMetadata"|"imageClassificationModelMetadata"|"textClassificationModelMetadata"|"imageObjectDetectionModelMetadata"|"textExtractionModelMetadata"|"textSentimentModelMetadata");

                    /**
                     * Creates a new Model instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Model instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IModel): google.cloud.automl.v1.Model;

                    /**
                     * Encodes the specified Model message. Does not implicitly {@link google.cloud.automl.v1.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Model message, length delimited. Does not implicitly {@link google.cloud.automl.v1.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Model message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.Model;

                    /**
                     * Decodes a Model message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.Model;

                    /**
                     * Verifies a Model message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Model message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Model
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.Model;

                    /**
                     * Creates a plain object from a Model message. Also converts values to other types if specified.
                     * @param message Model
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Model to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Model
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Model {

                    /** DeploymentState enum. */
                    enum DeploymentState {
                        DEPLOYMENT_STATE_UNSPECIFIED = 0,
                        DEPLOYED = 1,
                        UNDEPLOYED = 2
                    }
                }

                /** Properties of a ModelEvaluation. */
                interface IModelEvaluation {

                    /** ModelEvaluation classificationEvaluationMetrics */
                    classificationEvaluationMetrics?: (google.cloud.automl.v1.IClassificationEvaluationMetrics|null);

                    /** ModelEvaluation translationEvaluationMetrics */
                    translationEvaluationMetrics?: (google.cloud.automl.v1.ITranslationEvaluationMetrics|null);

                    /** ModelEvaluation imageObjectDetectionEvaluationMetrics */
                    imageObjectDetectionEvaluationMetrics?: (google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics|null);

                    /** ModelEvaluation textSentimentEvaluationMetrics */
                    textSentimentEvaluationMetrics?: (google.cloud.automl.v1.ITextSentimentEvaluationMetrics|null);

                    /** ModelEvaluation textExtractionEvaluationMetrics */
                    textExtractionEvaluationMetrics?: (google.cloud.automl.v1.ITextExtractionEvaluationMetrics|null);

                    /** ModelEvaluation name */
                    name?: (string|null);

                    /** ModelEvaluation annotationSpecId */
                    annotationSpecId?: (string|null);

                    /** ModelEvaluation displayName */
                    displayName?: (string|null);

                    /** ModelEvaluation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ModelEvaluation evaluatedExampleCount */
                    evaluatedExampleCount?: (number|null);
                }

                /** Represents a ModelEvaluation. */
                class ModelEvaluation implements IModelEvaluation {

                    /**
                     * Constructs a new ModelEvaluation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IModelEvaluation);

                    /** ModelEvaluation classificationEvaluationMetrics. */
                    public classificationEvaluationMetrics?: (google.cloud.automl.v1.IClassificationEvaluationMetrics|null);

                    /** ModelEvaluation translationEvaluationMetrics. */
                    public translationEvaluationMetrics?: (google.cloud.automl.v1.ITranslationEvaluationMetrics|null);

                    /** ModelEvaluation imageObjectDetectionEvaluationMetrics. */
                    public imageObjectDetectionEvaluationMetrics?: (google.cloud.automl.v1.IImageObjectDetectionEvaluationMetrics|null);

                    /** ModelEvaluation textSentimentEvaluationMetrics. */
                    public textSentimentEvaluationMetrics?: (google.cloud.automl.v1.ITextSentimentEvaluationMetrics|null);

                    /** ModelEvaluation textExtractionEvaluationMetrics. */
                    public textExtractionEvaluationMetrics?: (google.cloud.automl.v1.ITextExtractionEvaluationMetrics|null);

                    /** ModelEvaluation name. */
                    public name: string;

                    /** ModelEvaluation annotationSpecId. */
                    public annotationSpecId: string;

                    /** ModelEvaluation displayName. */
                    public displayName: string;

                    /** ModelEvaluation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ModelEvaluation evaluatedExampleCount. */
                    public evaluatedExampleCount: number;

                    /** ModelEvaluation metrics. */
                    public metrics?: ("classificationEvaluationMetrics"|"translationEvaluationMetrics"|"imageObjectDetectionEvaluationMetrics"|"textSentimentEvaluationMetrics"|"textExtractionEvaluationMetrics");

                    /**
                     * Creates a new ModelEvaluation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelEvaluation instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IModelEvaluation): google.cloud.automl.v1.ModelEvaluation;

                    /**
                     * Encodes the specified ModelEvaluation message. Does not implicitly {@link google.cloud.automl.v1.ModelEvaluation.verify|verify} messages.
                     * @param message ModelEvaluation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IModelEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelEvaluation message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ModelEvaluation.verify|verify} messages.
                     * @param message ModelEvaluation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IModelEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelEvaluation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelEvaluation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ModelEvaluation;

                    /**
                     * Decodes a ModelEvaluation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelEvaluation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ModelEvaluation;

                    /**
                     * Verifies a ModelEvaluation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelEvaluation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelEvaluation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ModelEvaluation;

                    /**
                     * Creates a plain object from a ModelEvaluation message. Also converts values to other types if specified.
                     * @param message ModelEvaluation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ModelEvaluation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelEvaluation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelEvaluation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata deleteDetails */
                    deleteDetails?: (google.cloud.automl.v1.IDeleteOperationMetadata|null);

                    /** OperationMetadata deployModelDetails */
                    deployModelDetails?: (google.cloud.automl.v1.IDeployModelOperationMetadata|null);

                    /** OperationMetadata undeployModelDetails */
                    undeployModelDetails?: (google.cloud.automl.v1.IUndeployModelOperationMetadata|null);

                    /** OperationMetadata createModelDetails */
                    createModelDetails?: (google.cloud.automl.v1.ICreateModelOperationMetadata|null);

                    /** OperationMetadata createDatasetDetails */
                    createDatasetDetails?: (google.cloud.automl.v1.ICreateDatasetOperationMetadata|null);

                    /** OperationMetadata importDataDetails */
                    importDataDetails?: (google.cloud.automl.v1.IImportDataOperationMetadata|null);

                    /** OperationMetadata batchPredictDetails */
                    batchPredictDetails?: (google.cloud.automl.v1.IBatchPredictOperationMetadata|null);

                    /** OperationMetadata exportDataDetails */
                    exportDataDetails?: (google.cloud.automl.v1.IExportDataOperationMetadata|null);

                    /** OperationMetadata exportModelDetails */
                    exportModelDetails?: (google.cloud.automl.v1.IExportModelOperationMetadata|null);

                    /** OperationMetadata progressPercent */
                    progressPercent?: (number|null);

                    /** OperationMetadata partialFailures */
                    partialFailures?: (google.rpc.IStatus[]|null);

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IOperationMetadata);

                    /** OperationMetadata deleteDetails. */
                    public deleteDetails?: (google.cloud.automl.v1.IDeleteOperationMetadata|null);

                    /** OperationMetadata deployModelDetails. */
                    public deployModelDetails?: (google.cloud.automl.v1.IDeployModelOperationMetadata|null);

                    /** OperationMetadata undeployModelDetails. */
                    public undeployModelDetails?: (google.cloud.automl.v1.IUndeployModelOperationMetadata|null);

                    /** OperationMetadata createModelDetails. */
                    public createModelDetails?: (google.cloud.automl.v1.ICreateModelOperationMetadata|null);

                    /** OperationMetadata createDatasetDetails. */
                    public createDatasetDetails?: (google.cloud.automl.v1.ICreateDatasetOperationMetadata|null);

                    /** OperationMetadata importDataDetails. */
                    public importDataDetails?: (google.cloud.automl.v1.IImportDataOperationMetadata|null);

                    /** OperationMetadata batchPredictDetails. */
                    public batchPredictDetails?: (google.cloud.automl.v1.IBatchPredictOperationMetadata|null);

                    /** OperationMetadata exportDataDetails. */
                    public exportDataDetails?: (google.cloud.automl.v1.IExportDataOperationMetadata|null);

                    /** OperationMetadata exportModelDetails. */
                    public exportModelDetails?: (google.cloud.automl.v1.IExportModelOperationMetadata|null);

                    /** OperationMetadata progressPercent. */
                    public progressPercent: number;

                    /** OperationMetadata partialFailures. */
                    public partialFailures: google.rpc.IStatus[];

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata details. */
                    public details?: ("deleteDetails"|"deployModelDetails"|"undeployModelDetails"|"createModelDetails"|"createDatasetDetails"|"importDataDetails"|"batchPredictDetails"|"exportDataDetails"|"exportModelDetails");

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IOperationMetadata): google.cloud.automl.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a DeleteOperationMetadata. */
                interface IDeleteOperationMetadata {
                }

                /** Represents a DeleteOperationMetadata. */
                class DeleteOperationMetadata implements IDeleteOperationMetadata {

                    /**
                     * Constructs a new DeleteOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDeleteOperationMetadata);

                    /**
                     * Creates a new DeleteOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDeleteOperationMetadata): google.cloud.automl.v1.DeleteOperationMetadata;

                    /**
                     * Encodes the specified DeleteOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.DeleteOperationMetadata.verify|verify} messages.
                     * @param message DeleteOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDeleteOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DeleteOperationMetadata.verify|verify} messages.
                     * @param message DeleteOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDeleteOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DeleteOperationMetadata;

                    /**
                     * Decodes a DeleteOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DeleteOperationMetadata;

                    /**
                     * Verifies a DeleteOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DeleteOperationMetadata;

                    /**
                     * Creates a plain object from a DeleteOperationMetadata message. Also converts values to other types if specified.
                     * @param message DeleteOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DeleteOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeployModelOperationMetadata. */
                interface IDeployModelOperationMetadata {
                }

                /** Represents a DeployModelOperationMetadata. */
                class DeployModelOperationMetadata implements IDeployModelOperationMetadata {

                    /**
                     * Constructs a new DeployModelOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDeployModelOperationMetadata);

                    /**
                     * Creates a new DeployModelOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployModelOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDeployModelOperationMetadata): google.cloud.automl.v1.DeployModelOperationMetadata;

                    /**
                     * Encodes the specified DeployModelOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.DeployModelOperationMetadata.verify|verify} messages.
                     * @param message DeployModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDeployModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployModelOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DeployModelOperationMetadata.verify|verify} messages.
                     * @param message DeployModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDeployModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployModelOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DeployModelOperationMetadata;

                    /**
                     * Decodes a DeployModelOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DeployModelOperationMetadata;

                    /**
                     * Verifies a DeployModelOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployModelOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployModelOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DeployModelOperationMetadata;

                    /**
                     * Creates a plain object from a DeployModelOperationMetadata message. Also converts values to other types if specified.
                     * @param message DeployModelOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DeployModelOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployModelOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeployModelOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeployModelOperationMetadata. */
                interface IUndeployModelOperationMetadata {
                }

                /** Represents an UndeployModelOperationMetadata. */
                class UndeployModelOperationMetadata implements IUndeployModelOperationMetadata {

                    /**
                     * Constructs a new UndeployModelOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IUndeployModelOperationMetadata);

                    /**
                     * Creates a new UndeployModelOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeployModelOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IUndeployModelOperationMetadata): google.cloud.automl.v1.UndeployModelOperationMetadata;

                    /**
                     * Encodes the specified UndeployModelOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.UndeployModelOperationMetadata.verify|verify} messages.
                     * @param message UndeployModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IUndeployModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeployModelOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.UndeployModelOperationMetadata.verify|verify} messages.
                     * @param message UndeployModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IUndeployModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeployModelOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeployModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.UndeployModelOperationMetadata;

                    /**
                     * Decodes an UndeployModelOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeployModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.UndeployModelOperationMetadata;

                    /**
                     * Verifies an UndeployModelOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeployModelOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeployModelOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.UndeployModelOperationMetadata;

                    /**
                     * Creates a plain object from an UndeployModelOperationMetadata message. Also converts values to other types if specified.
                     * @param message UndeployModelOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.UndeployModelOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeployModelOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeployModelOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDatasetOperationMetadata. */
                interface ICreateDatasetOperationMetadata {
                }

                /** Represents a CreateDatasetOperationMetadata. */
                class CreateDatasetOperationMetadata implements ICreateDatasetOperationMetadata {

                    /**
                     * Constructs a new CreateDatasetOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ICreateDatasetOperationMetadata);

                    /**
                     * Creates a new CreateDatasetOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatasetOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ICreateDatasetOperationMetadata): google.cloud.automl.v1.CreateDatasetOperationMetadata;

                    /**
                     * Encodes the specified CreateDatasetOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.CreateDatasetOperationMetadata.verify|verify} messages.
                     * @param message CreateDatasetOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ICreateDatasetOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatasetOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.CreateDatasetOperationMetadata.verify|verify} messages.
                     * @param message CreateDatasetOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ICreateDatasetOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatasetOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatasetOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.CreateDatasetOperationMetadata;

                    /**
                     * Decodes a CreateDatasetOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatasetOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.CreateDatasetOperationMetadata;

                    /**
                     * Verifies a CreateDatasetOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatasetOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatasetOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.CreateDatasetOperationMetadata;

                    /**
                     * Creates a plain object from a CreateDatasetOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateDatasetOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.CreateDatasetOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatasetOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDatasetOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateModelOperationMetadata. */
                interface ICreateModelOperationMetadata {
                }

                /** Represents a CreateModelOperationMetadata. */
                class CreateModelOperationMetadata implements ICreateModelOperationMetadata {

                    /**
                     * Constructs a new CreateModelOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ICreateModelOperationMetadata);

                    /**
                     * Creates a new CreateModelOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateModelOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ICreateModelOperationMetadata): google.cloud.automl.v1.CreateModelOperationMetadata;

                    /**
                     * Encodes the specified CreateModelOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.CreateModelOperationMetadata.verify|verify} messages.
                     * @param message CreateModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ICreateModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateModelOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.CreateModelOperationMetadata.verify|verify} messages.
                     * @param message CreateModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ICreateModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateModelOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.CreateModelOperationMetadata;

                    /**
                     * Decodes a CreateModelOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.CreateModelOperationMetadata;

                    /**
                     * Verifies a CreateModelOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateModelOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateModelOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.CreateModelOperationMetadata;

                    /**
                     * Creates a plain object from a CreateModelOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateModelOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.CreateModelOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateModelOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateModelOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportDataOperationMetadata. */
                interface IImportDataOperationMetadata {
                }

                /** Represents an ImportDataOperationMetadata. */
                class ImportDataOperationMetadata implements IImportDataOperationMetadata {

                    /**
                     * Constructs a new ImportDataOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImportDataOperationMetadata);

                    /**
                     * Creates a new ImportDataOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportDataOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImportDataOperationMetadata): google.cloud.automl.v1.ImportDataOperationMetadata;

                    /**
                     * Encodes the specified ImportDataOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.ImportDataOperationMetadata.verify|verify} messages.
                     * @param message ImportDataOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImportDataOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportDataOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImportDataOperationMetadata.verify|verify} messages.
                     * @param message ImportDataOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImportDataOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportDataOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportDataOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImportDataOperationMetadata;

                    /**
                     * Decodes an ImportDataOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportDataOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImportDataOperationMetadata;

                    /**
                     * Verifies an ImportDataOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportDataOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportDataOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImportDataOperationMetadata;

                    /**
                     * Creates a plain object from an ImportDataOperationMetadata message. Also converts values to other types if specified.
                     * @param message ImportDataOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImportDataOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportDataOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportDataOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportDataOperationMetadata. */
                interface IExportDataOperationMetadata {

                    /** ExportDataOperationMetadata outputInfo */
                    outputInfo?: (google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo|null);
                }

                /** Represents an ExportDataOperationMetadata. */
                class ExportDataOperationMetadata implements IExportDataOperationMetadata {

                    /**
                     * Constructs a new ExportDataOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IExportDataOperationMetadata);

                    /** ExportDataOperationMetadata outputInfo. */
                    public outputInfo?: (google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo|null);

                    /**
                     * Creates a new ExportDataOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDataOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IExportDataOperationMetadata): google.cloud.automl.v1.ExportDataOperationMetadata;

                    /**
                     * Encodes the specified ExportDataOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.ExportDataOperationMetadata.verify|verify} messages.
                     * @param message ExportDataOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IExportDataOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDataOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportDataOperationMetadata.verify|verify} messages.
                     * @param message ExportDataOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IExportDataOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDataOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDataOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportDataOperationMetadata;

                    /**
                     * Decodes an ExportDataOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDataOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportDataOperationMetadata;

                    /**
                     * Verifies an ExportDataOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDataOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDataOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportDataOperationMetadata;

                    /**
                     * Creates a plain object from an ExportDataOperationMetadata message. Also converts values to other types if specified.
                     * @param message ExportDataOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ExportDataOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDataOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDataOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExportDataOperationMetadata {

                    /** Properties of an ExportDataOutputInfo. */
                    interface IExportDataOutputInfo {

                        /** ExportDataOutputInfo gcsOutputDirectory */
                        gcsOutputDirectory?: (string|null);
                    }

                    /** Represents an ExportDataOutputInfo. */
                    class ExportDataOutputInfo implements IExportDataOutputInfo {

                        /**
                         * Constructs a new ExportDataOutputInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo);

                        /** ExportDataOutputInfo gcsOutputDirectory. */
                        public gcsOutputDirectory?: (string|null);

                        /** ExportDataOutputInfo outputLocation. */
                        public outputLocation?: "gcsOutputDirectory";

                        /**
                         * Creates a new ExportDataOutputInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportDataOutputInfo instance
                         */
                        public static create(properties?: google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo): google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo;

                        /**
                         * Encodes the specified ExportDataOutputInfo message. Does not implicitly {@link google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo.verify|verify} messages.
                         * @param message ExportDataOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportDataOutputInfo message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo.verify|verify} messages.
                         * @param message ExportDataOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.ExportDataOperationMetadata.IExportDataOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportDataOutputInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportDataOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo;

                        /**
                         * Decodes an ExportDataOutputInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportDataOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo;

                        /**
                         * Verifies an ExportDataOutputInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportDataOutputInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportDataOutputInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo;

                        /**
                         * Creates a plain object from an ExportDataOutputInfo message. Also converts values to other types if specified.
                         * @param message ExportDataOutputInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.ExportDataOperationMetadata.ExportDataOutputInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportDataOutputInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportDataOutputInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a BatchPredictOperationMetadata. */
                interface IBatchPredictOperationMetadata {

                    /** BatchPredictOperationMetadata inputConfig */
                    inputConfig?: (google.cloud.automl.v1.IBatchPredictInputConfig|null);

                    /** BatchPredictOperationMetadata outputInfo */
                    outputInfo?: (google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo|null);
                }

                /** Represents a BatchPredictOperationMetadata. */
                class BatchPredictOperationMetadata implements IBatchPredictOperationMetadata {

                    /**
                     * Constructs a new BatchPredictOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBatchPredictOperationMetadata);

                    /** BatchPredictOperationMetadata inputConfig. */
                    public inputConfig?: (google.cloud.automl.v1.IBatchPredictInputConfig|null);

                    /** BatchPredictOperationMetadata outputInfo. */
                    public outputInfo?: (google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo|null);

                    /**
                     * Creates a new BatchPredictOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchPredictOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBatchPredictOperationMetadata): google.cloud.automl.v1.BatchPredictOperationMetadata;

                    /**
                     * Encodes the specified BatchPredictOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOperationMetadata.verify|verify} messages.
                     * @param message BatchPredictOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBatchPredictOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchPredictOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOperationMetadata.verify|verify} messages.
                     * @param message BatchPredictOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBatchPredictOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchPredictOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchPredictOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictOperationMetadata;

                    /**
                     * Decodes a BatchPredictOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchPredictOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictOperationMetadata;

                    /**
                     * Verifies a BatchPredictOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchPredictOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchPredictOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictOperationMetadata;

                    /**
                     * Creates a plain object from a BatchPredictOperationMetadata message. Also converts values to other types if specified.
                     * @param message BatchPredictOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BatchPredictOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchPredictOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchPredictOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BatchPredictOperationMetadata {

                    /** Properties of a BatchPredictOutputInfo. */
                    interface IBatchPredictOutputInfo {

                        /** BatchPredictOutputInfo gcsOutputDirectory */
                        gcsOutputDirectory?: (string|null);
                    }

                    /** Represents a BatchPredictOutputInfo. */
                    class BatchPredictOutputInfo implements IBatchPredictOutputInfo {

                        /**
                         * Constructs a new BatchPredictOutputInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo);

                        /** BatchPredictOutputInfo gcsOutputDirectory. */
                        public gcsOutputDirectory?: (string|null);

                        /** BatchPredictOutputInfo outputLocation. */
                        public outputLocation?: "gcsOutputDirectory";

                        /**
                         * Creates a new BatchPredictOutputInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchPredictOutputInfo instance
                         */
                        public static create(properties?: google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo): google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo;

                        /**
                         * Encodes the specified BatchPredictOutputInfo message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo.verify|verify} messages.
                         * @param message BatchPredictOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchPredictOutputInfo message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo.verify|verify} messages.
                         * @param message BatchPredictOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.BatchPredictOperationMetadata.IBatchPredictOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchPredictOutputInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchPredictOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo;

                        /**
                         * Decodes a BatchPredictOutputInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchPredictOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo;

                        /**
                         * Verifies a BatchPredictOutputInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchPredictOutputInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchPredictOutputInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo;

                        /**
                         * Creates a plain object from a BatchPredictOutputInfo message. Also converts values to other types if specified.
                         * @param message BatchPredictOutputInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.BatchPredictOperationMetadata.BatchPredictOutputInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchPredictOutputInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchPredictOutputInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an ExportModelOperationMetadata. */
                interface IExportModelOperationMetadata {

                    /** ExportModelOperationMetadata outputInfo */
                    outputInfo?: (google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo|null);
                }

                /** Represents an ExportModelOperationMetadata. */
                class ExportModelOperationMetadata implements IExportModelOperationMetadata {

                    /**
                     * Constructs a new ExportModelOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IExportModelOperationMetadata);

                    /** ExportModelOperationMetadata outputInfo. */
                    public outputInfo?: (google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo|null);

                    /**
                     * Creates a new ExportModelOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportModelOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IExportModelOperationMetadata): google.cloud.automl.v1.ExportModelOperationMetadata;

                    /**
                     * Encodes the specified ExportModelOperationMetadata message. Does not implicitly {@link google.cloud.automl.v1.ExportModelOperationMetadata.verify|verify} messages.
                     * @param message ExportModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IExportModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportModelOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportModelOperationMetadata.verify|verify} messages.
                     * @param message ExportModelOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IExportModelOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportModelOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportModelOperationMetadata;

                    /**
                     * Decodes an ExportModelOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportModelOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportModelOperationMetadata;

                    /**
                     * Verifies an ExportModelOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportModelOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportModelOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportModelOperationMetadata;

                    /**
                     * Creates a plain object from an ExportModelOperationMetadata message. Also converts values to other types if specified.
                     * @param message ExportModelOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ExportModelOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportModelOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportModelOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExportModelOperationMetadata {

                    /** Properties of an ExportModelOutputInfo. */
                    interface IExportModelOutputInfo {

                        /** ExportModelOutputInfo gcsOutputDirectory */
                        gcsOutputDirectory?: (string|null);
                    }

                    /** Represents an ExportModelOutputInfo. */
                    class ExportModelOutputInfo implements IExportModelOutputInfo {

                        /**
                         * Constructs a new ExportModelOutputInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo);

                        /** ExportModelOutputInfo gcsOutputDirectory. */
                        public gcsOutputDirectory: string;

                        /**
                         * Creates a new ExportModelOutputInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportModelOutputInfo instance
                         */
                        public static create(properties?: google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo): google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo;

                        /**
                         * Encodes the specified ExportModelOutputInfo message. Does not implicitly {@link google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo.verify|verify} messages.
                         * @param message ExportModelOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportModelOutputInfo message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo.verify|verify} messages.
                         * @param message ExportModelOutputInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.automl.v1.ExportModelOperationMetadata.IExportModelOutputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportModelOutputInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportModelOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo;

                        /**
                         * Decodes an ExportModelOutputInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportModelOutputInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo;

                        /**
                         * Verifies an ExportModelOutputInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportModelOutputInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportModelOutputInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo;

                        /**
                         * Creates a plain object from an ExportModelOutputInfo message. Also converts values to other types if specified.
                         * @param message ExportModelOutputInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.automl.v1.ExportModelOperationMetadata.ExportModelOutputInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportModelOutputInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportModelOutputInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Represents a PredictionService */
                class PredictionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PredictionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PredictionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PredictionService;

                    /**
                     * Calls Predict.
                     * @param request PredictRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PredictResponse
                     */
                    public predict(request: google.cloud.automl.v1.IPredictRequest, callback: google.cloud.automl.v1.PredictionService.PredictCallback): void;

                    /**
                     * Calls Predict.
                     * @param request PredictRequest message or plain object
                     * @returns Promise
                     */
                    public predict(request: google.cloud.automl.v1.IPredictRequest): Promise<google.cloud.automl.v1.PredictResponse>;

                    /**
                     * Calls BatchPredict.
                     * @param request BatchPredictRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchPredict(request: google.cloud.automl.v1.IBatchPredictRequest, callback: google.cloud.automl.v1.PredictionService.BatchPredictCallback): void;

                    /**
                     * Calls BatchPredict.
                     * @param request BatchPredictRequest message or plain object
                     * @returns Promise
                     */
                    public batchPredict(request: google.cloud.automl.v1.IBatchPredictRequest): Promise<google.longrunning.Operation>;
                }

                namespace PredictionService {

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.PredictionService|predict}.
                     * @param error Error, if any
                     * @param [response] PredictResponse
                     */
                    type PredictCallback = (error: (Error|null), response?: google.cloud.automl.v1.PredictResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.PredictionService|batchPredict}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchPredictCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a PredictRequest. */
                interface IPredictRequest {

                    /** PredictRequest name */
                    name?: (string|null);

                    /** PredictRequest payload */
                    payload?: (google.cloud.automl.v1.IExamplePayload|null);

                    /** PredictRequest params */
                    params?: ({ [k: string]: string }|null);
                }

                /** Represents a PredictRequest. */
                class PredictRequest implements IPredictRequest {

                    /**
                     * Constructs a new PredictRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IPredictRequest);

                    /** PredictRequest name. */
                    public name: string;

                    /** PredictRequest payload. */
                    public payload?: (google.cloud.automl.v1.IExamplePayload|null);

                    /** PredictRequest params. */
                    public params: { [k: string]: string };

                    /**
                     * Creates a new PredictRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IPredictRequest): google.cloud.automl.v1.PredictRequest;

                    /**
                     * Encodes the specified PredictRequest message. Does not implicitly {@link google.cloud.automl.v1.PredictRequest.verify|verify} messages.
                     * @param message PredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.PredictRequest.verify|verify} messages.
                     * @param message PredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.PredictRequest;

                    /**
                     * Decodes a PredictRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.PredictRequest;

                    /**
                     * Verifies a PredictRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.PredictRequest;

                    /**
                     * Creates a plain object from a PredictRequest message. Also converts values to other types if specified.
                     * @param message PredictRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.PredictRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PredictRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PredictResponse. */
                interface IPredictResponse {

                    /** PredictResponse payload */
                    payload?: (google.cloud.automl.v1.IAnnotationPayload[]|null);

                    /** PredictResponse preprocessedInput */
                    preprocessedInput?: (google.cloud.automl.v1.IExamplePayload|null);

                    /** PredictResponse metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a PredictResponse. */
                class PredictResponse implements IPredictResponse {

                    /**
                     * Constructs a new PredictResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IPredictResponse);

                    /** PredictResponse payload. */
                    public payload: google.cloud.automl.v1.IAnnotationPayload[];

                    /** PredictResponse preprocessedInput. */
                    public preprocessedInput?: (google.cloud.automl.v1.IExamplePayload|null);

                    /** PredictResponse metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new PredictResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictResponse instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IPredictResponse): google.cloud.automl.v1.PredictResponse;

                    /**
                     * Encodes the specified PredictResponse message. Does not implicitly {@link google.cloud.automl.v1.PredictResponse.verify|verify} messages.
                     * @param message PredictResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IPredictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictResponse message, length delimited. Does not implicitly {@link google.cloud.automl.v1.PredictResponse.verify|verify} messages.
                     * @param message PredictResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IPredictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.PredictResponse;

                    /**
                     * Decodes a PredictResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.PredictResponse;

                    /**
                     * Verifies a PredictResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.PredictResponse;

                    /**
                     * Creates a plain object from a PredictResponse message. Also converts values to other types if specified.
                     * @param message PredictResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.PredictResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PredictResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchPredictRequest. */
                interface IBatchPredictRequest {

                    /** BatchPredictRequest name */
                    name?: (string|null);

                    /** BatchPredictRequest inputConfig */
                    inputConfig?: (google.cloud.automl.v1.IBatchPredictInputConfig|null);

                    /** BatchPredictRequest outputConfig */
                    outputConfig?: (google.cloud.automl.v1.IBatchPredictOutputConfig|null);

                    /** BatchPredictRequest params */
                    params?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchPredictRequest. */
                class BatchPredictRequest implements IBatchPredictRequest {

                    /**
                     * Constructs a new BatchPredictRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBatchPredictRequest);

                    /** BatchPredictRequest name. */
                    public name: string;

                    /** BatchPredictRequest inputConfig. */
                    public inputConfig?: (google.cloud.automl.v1.IBatchPredictInputConfig|null);

                    /** BatchPredictRequest outputConfig. */
                    public outputConfig?: (google.cloud.automl.v1.IBatchPredictOutputConfig|null);

                    /** BatchPredictRequest params. */
                    public params: { [k: string]: string };

                    /**
                     * Creates a new BatchPredictRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchPredictRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBatchPredictRequest): google.cloud.automl.v1.BatchPredictRequest;

                    /**
                     * Encodes the specified BatchPredictRequest message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictRequest.verify|verify} messages.
                     * @param message BatchPredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBatchPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchPredictRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictRequest.verify|verify} messages.
                     * @param message BatchPredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBatchPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchPredictRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchPredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictRequest;

                    /**
                     * Decodes a BatchPredictRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchPredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictRequest;

                    /**
                     * Verifies a BatchPredictRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchPredictRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchPredictRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictRequest;

                    /**
                     * Creates a plain object from a BatchPredictRequest message. Also converts values to other types if specified.
                     * @param message BatchPredictRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BatchPredictRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchPredictRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchPredictRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchPredictResult. */
                interface IBatchPredictResult {

                    /** BatchPredictResult metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchPredictResult. */
                class BatchPredictResult implements IBatchPredictResult {

                    /**
                     * Constructs a new BatchPredictResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IBatchPredictResult);

                    /** BatchPredictResult metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new BatchPredictResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchPredictResult instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IBatchPredictResult): google.cloud.automl.v1.BatchPredictResult;

                    /**
                     * Encodes the specified BatchPredictResult message. Does not implicitly {@link google.cloud.automl.v1.BatchPredictResult.verify|verify} messages.
                     * @param message BatchPredictResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IBatchPredictResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchPredictResult message, length delimited. Does not implicitly {@link google.cloud.automl.v1.BatchPredictResult.verify|verify} messages.
                     * @param message BatchPredictResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IBatchPredictResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchPredictResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchPredictResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.BatchPredictResult;

                    /**
                     * Decodes a BatchPredictResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchPredictResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.BatchPredictResult;

                    /**
                     * Verifies a BatchPredictResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchPredictResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchPredictResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.BatchPredictResult;

                    /**
                     * Creates a plain object from a BatchPredictResult message. Also converts values to other types if specified.
                     * @param message BatchPredictResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.BatchPredictResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchPredictResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchPredictResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an AutoMl */
                class AutoMl extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AutoMl service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AutoMl service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AutoMl;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDataset(request: google.cloud.automl.v1.ICreateDatasetRequest, callback: google.cloud.automl.v1.AutoMl.CreateDatasetCallback): void;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public createDataset(request: google.cloud.automl.v1.ICreateDatasetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dataset
                     */
                    public getDataset(request: google.cloud.automl.v1.IGetDatasetRequest, callback: google.cloud.automl.v1.AutoMl.GetDatasetCallback): void;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public getDataset(request: google.cloud.automl.v1.IGetDatasetRequest): Promise<google.cloud.automl.v1.Dataset>;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDatasetsResponse
                     */
                    public listDatasets(request: google.cloud.automl.v1.IListDatasetsRequest, callback: google.cloud.automl.v1.AutoMl.ListDatasetsCallback): void;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @returns Promise
                     */
                    public listDatasets(request: google.cloud.automl.v1.IListDatasetsRequest): Promise<google.cloud.automl.v1.ListDatasetsResponse>;

                    /**
                     * Calls UpdateDataset.
                     * @param request UpdateDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dataset
                     */
                    public updateDataset(request: google.cloud.automl.v1.IUpdateDatasetRequest, callback: google.cloud.automl.v1.AutoMl.UpdateDatasetCallback): void;

                    /**
                     * Calls UpdateDataset.
                     * @param request UpdateDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public updateDataset(request: google.cloud.automl.v1.IUpdateDatasetRequest): Promise<google.cloud.automl.v1.Dataset>;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDataset(request: google.cloud.automl.v1.IDeleteDatasetRequest, callback: google.cloud.automl.v1.AutoMl.DeleteDatasetCallback): void;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDataset(request: google.cloud.automl.v1.IDeleteDatasetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ImportData.
                     * @param request ImportDataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importData(request: google.cloud.automl.v1.IImportDataRequest, callback: google.cloud.automl.v1.AutoMl.ImportDataCallback): void;

                    /**
                     * Calls ImportData.
                     * @param request ImportDataRequest message or plain object
                     * @returns Promise
                     */
                    public importData(request: google.cloud.automl.v1.IImportDataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportData.
                     * @param request ExportDataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportData(request: google.cloud.automl.v1.IExportDataRequest, callback: google.cloud.automl.v1.AutoMl.ExportDataCallback): void;

                    /**
                     * Calls ExportData.
                     * @param request ExportDataRequest message or plain object
                     * @returns Promise
                     */
                    public exportData(request: google.cloud.automl.v1.IExportDataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAnnotationSpec.
                     * @param request GetAnnotationSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotationSpec
                     */
                    public getAnnotationSpec(request: google.cloud.automl.v1.IGetAnnotationSpecRequest, callback: google.cloud.automl.v1.AutoMl.GetAnnotationSpecCallback): void;

                    /**
                     * Calls GetAnnotationSpec.
                     * @param request GetAnnotationSpecRequest message or plain object
                     * @returns Promise
                     */
                    public getAnnotationSpec(request: google.cloud.automl.v1.IGetAnnotationSpecRequest): Promise<google.cloud.automl.v1.AnnotationSpec>;

                    /**
                     * Calls CreateModel.
                     * @param request CreateModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createModel(request: google.cloud.automl.v1.ICreateModelRequest, callback: google.cloud.automl.v1.AutoMl.CreateModelCallback): void;

                    /**
                     * Calls CreateModel.
                     * @param request CreateModelRequest message or plain object
                     * @returns Promise
                     */
                    public createModel(request: google.cloud.automl.v1.ICreateModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Model
                     */
                    public getModel(request: google.cloud.automl.v1.IGetModelRequest, callback: google.cloud.automl.v1.AutoMl.GetModelCallback): void;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @returns Promise
                     */
                    public getModel(request: google.cloud.automl.v1.IGetModelRequest): Promise<google.cloud.automl.v1.Model>;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListModelsResponse
                     */
                    public listModels(request: google.cloud.automl.v1.IListModelsRequest, callback: google.cloud.automl.v1.AutoMl.ListModelsCallback): void;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listModels(request: google.cloud.automl.v1.IListModelsRequest): Promise<google.cloud.automl.v1.ListModelsResponse>;

                    /**
                     * Calls DeleteModel.
                     * @param request DeleteModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteModel(request: google.cloud.automl.v1.IDeleteModelRequest, callback: google.cloud.automl.v1.AutoMl.DeleteModelCallback): void;

                    /**
                     * Calls DeleteModel.
                     * @param request DeleteModelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteModel(request: google.cloud.automl.v1.IDeleteModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateModel.
                     * @param request UpdateModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Model
                     */
                    public updateModel(request: google.cloud.automl.v1.IUpdateModelRequest, callback: google.cloud.automl.v1.AutoMl.UpdateModelCallback): void;

                    /**
                     * Calls UpdateModel.
                     * @param request UpdateModelRequest message or plain object
                     * @returns Promise
                     */
                    public updateModel(request: google.cloud.automl.v1.IUpdateModelRequest): Promise<google.cloud.automl.v1.Model>;

                    /**
                     * Calls DeployModel.
                     * @param request DeployModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deployModel(request: google.cloud.automl.v1.IDeployModelRequest, callback: google.cloud.automl.v1.AutoMl.DeployModelCallback): void;

                    /**
                     * Calls DeployModel.
                     * @param request DeployModelRequest message or plain object
                     * @returns Promise
                     */
                    public deployModel(request: google.cloud.automl.v1.IDeployModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeployModel.
                     * @param request UndeployModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeployModel(request: google.cloud.automl.v1.IUndeployModelRequest, callback: google.cloud.automl.v1.AutoMl.UndeployModelCallback): void;

                    /**
                     * Calls UndeployModel.
                     * @param request UndeployModelRequest message or plain object
                     * @returns Promise
                     */
                    public undeployModel(request: google.cloud.automl.v1.IUndeployModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportModel.
                     * @param request ExportModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportModel(request: google.cloud.automl.v1.IExportModelRequest, callback: google.cloud.automl.v1.AutoMl.ExportModelCallback): void;

                    /**
                     * Calls ExportModel.
                     * @param request ExportModelRequest message or plain object
                     * @returns Promise
                     */
                    public exportModel(request: google.cloud.automl.v1.IExportModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetModelEvaluation.
                     * @param request GetModelEvaluationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ModelEvaluation
                     */
                    public getModelEvaluation(request: google.cloud.automl.v1.IGetModelEvaluationRequest, callback: google.cloud.automl.v1.AutoMl.GetModelEvaluationCallback): void;

                    /**
                     * Calls GetModelEvaluation.
                     * @param request GetModelEvaluationRequest message or plain object
                     * @returns Promise
                     */
                    public getModelEvaluation(request: google.cloud.automl.v1.IGetModelEvaluationRequest): Promise<google.cloud.automl.v1.ModelEvaluation>;

                    /**
                     * Calls ListModelEvaluations.
                     * @param request ListModelEvaluationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListModelEvaluationsResponse
                     */
                    public listModelEvaluations(request: google.cloud.automl.v1.IListModelEvaluationsRequest, callback: google.cloud.automl.v1.AutoMl.ListModelEvaluationsCallback): void;

                    /**
                     * Calls ListModelEvaluations.
                     * @param request ListModelEvaluationsRequest message or plain object
                     * @returns Promise
                     */
                    public listModelEvaluations(request: google.cloud.automl.v1.IListModelEvaluationsRequest): Promise<google.cloud.automl.v1.ListModelEvaluationsResponse>;
                }

                namespace AutoMl {

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|createDataset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDatasetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|getDataset}.
                     * @param error Error, if any
                     * @param [response] Dataset
                     */
                    type GetDatasetCallback = (error: (Error|null), response?: google.cloud.automl.v1.Dataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|listDatasets}.
                     * @param error Error, if any
                     * @param [response] ListDatasetsResponse
                     */
                    type ListDatasetsCallback = (error: (Error|null), response?: google.cloud.automl.v1.ListDatasetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|updateDataset}.
                     * @param error Error, if any
                     * @param [response] Dataset
                     */
                    type UpdateDatasetCallback = (error: (Error|null), response?: google.cloud.automl.v1.Dataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|deleteDataset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDatasetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|importData}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportDataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|exportData}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportDataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|getAnnotationSpec}.
                     * @param error Error, if any
                     * @param [response] AnnotationSpec
                     */
                    type GetAnnotationSpecCallback = (error: (Error|null), response?: google.cloud.automl.v1.AnnotationSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|createModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|getModel}.
                     * @param error Error, if any
                     * @param [response] Model
                     */
                    type GetModelCallback = (error: (Error|null), response?: google.cloud.automl.v1.Model) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|listModels}.
                     * @param error Error, if any
                     * @param [response] ListModelsResponse
                     */
                    type ListModelsCallback = (error: (Error|null), response?: google.cloud.automl.v1.ListModelsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|deleteModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|updateModel}.
                     * @param error Error, if any
                     * @param [response] Model
                     */
                    type UpdateModelCallback = (error: (Error|null), response?: google.cloud.automl.v1.Model) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|deployModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeployModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|undeployModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeployModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|exportModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|getModelEvaluation}.
                     * @param error Error, if any
                     * @param [response] ModelEvaluation
                     */
                    type GetModelEvaluationCallback = (error: (Error|null), response?: google.cloud.automl.v1.ModelEvaluation) => void;

                    /**
                     * Callback as used by {@link google.cloud.automl.v1.AutoMl|listModelEvaluations}.
                     * @param error Error, if any
                     * @param [response] ListModelEvaluationsResponse
                     */
                    type ListModelEvaluationsCallback = (error: (Error|null), response?: google.cloud.automl.v1.ListModelEvaluationsResponse) => void;
                }

                /** Properties of a CreateDatasetRequest. */
                interface ICreateDatasetRequest {

                    /** CreateDatasetRequest parent */
                    parent?: (string|null);

                    /** CreateDatasetRequest dataset */
                    dataset?: (google.cloud.automl.v1.IDataset|null);
                }

                /** Represents a CreateDatasetRequest. */
                class CreateDatasetRequest implements ICreateDatasetRequest {

                    /**
                     * Constructs a new CreateDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ICreateDatasetRequest);

                    /** CreateDatasetRequest parent. */
                    public parent: string;

                    /** CreateDatasetRequest dataset. */
                    public dataset?: (google.cloud.automl.v1.IDataset|null);

                    /**
                     * Creates a new CreateDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ICreateDatasetRequest): google.cloud.automl.v1.CreateDatasetRequest;

                    /**
                     * Encodes the specified CreateDatasetRequest message. Does not implicitly {@link google.cloud.automl.v1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.CreateDatasetRequest;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.CreateDatasetRequest;

                    /**
                     * Verifies a CreateDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.CreateDatasetRequest;

                    /**
                     * Creates a plain object from a CreateDatasetRequest message. Also converts values to other types if specified.
                     * @param message CreateDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.CreateDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDatasetRequest. */
                interface IGetDatasetRequest {

                    /** GetDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDatasetRequest. */
                class GetDatasetRequest implements IGetDatasetRequest {

                    /**
                     * Constructs a new GetDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGetDatasetRequest);

                    /** GetDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGetDatasetRequest): google.cloud.automl.v1.GetDatasetRequest;

                    /**
                     * Encodes the specified GetDatasetRequest message. Does not implicitly {@link google.cloud.automl.v1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GetDatasetRequest;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GetDatasetRequest;

                    /**
                     * Verifies a GetDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GetDatasetRequest;

                    /**
                     * Creates a plain object from a GetDatasetRequest message. Also converts values to other types if specified.
                     * @param message GetDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GetDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDatasetsRequest. */
                interface IListDatasetsRequest {

                    /** ListDatasetsRequest parent */
                    parent?: (string|null);

                    /** ListDatasetsRequest filter */
                    filter?: (string|null);

                    /** ListDatasetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDatasetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDatasetsRequest. */
                class ListDatasetsRequest implements IListDatasetsRequest {

                    /**
                     * Constructs a new ListDatasetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListDatasetsRequest);

                    /** ListDatasetsRequest parent. */
                    public parent: string;

                    /** ListDatasetsRequest filter. */
                    public filter: string;

                    /** ListDatasetsRequest pageSize. */
                    public pageSize: number;

                    /** ListDatasetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDatasetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListDatasetsRequest): google.cloud.automl.v1.ListDatasetsRequest;

                    /**
                     * Encodes the specified ListDatasetsRequest message. Does not implicitly {@link google.cloud.automl.v1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListDatasetsRequest;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListDatasetsRequest;

                    /**
                     * Verifies a ListDatasetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListDatasetsRequest;

                    /**
                     * Creates a plain object from a ListDatasetsRequest message. Also converts values to other types if specified.
                     * @param message ListDatasetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListDatasetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatasetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDatasetsResponse. */
                interface IListDatasetsResponse {

                    /** ListDatasetsResponse datasets */
                    datasets?: (google.cloud.automl.v1.IDataset[]|null);

                    /** ListDatasetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDatasetsResponse. */
                class ListDatasetsResponse implements IListDatasetsResponse {

                    /**
                     * Constructs a new ListDatasetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListDatasetsResponse);

                    /** ListDatasetsResponse datasets. */
                    public datasets: google.cloud.automl.v1.IDataset[];

                    /** ListDatasetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDatasetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsResponse instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListDatasetsResponse): google.cloud.automl.v1.ListDatasetsResponse;

                    /**
                     * Encodes the specified ListDatasetsResponse message. Does not implicitly {@link google.cloud.automl.v1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsResponse message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListDatasetsResponse;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListDatasetsResponse;

                    /**
                     * Verifies a ListDatasetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListDatasetsResponse;

                    /**
                     * Creates a plain object from a ListDatasetsResponse message. Also converts values to other types if specified.
                     * @param message ListDatasetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListDatasetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatasetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDatasetRequest. */
                interface IUpdateDatasetRequest {

                    /** UpdateDatasetRequest dataset */
                    dataset?: (google.cloud.automl.v1.IDataset|null);

                    /** UpdateDatasetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDatasetRequest. */
                class UpdateDatasetRequest implements IUpdateDatasetRequest {

                    /**
                     * Constructs a new UpdateDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IUpdateDatasetRequest);

                    /** UpdateDatasetRequest dataset. */
                    public dataset?: (google.cloud.automl.v1.IDataset|null);

                    /** UpdateDatasetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IUpdateDatasetRequest): google.cloud.automl.v1.UpdateDatasetRequest;

                    /**
                     * Encodes the specified UpdateDatasetRequest message. Does not implicitly {@link google.cloud.automl.v1.UpdateDatasetRequest.verify|verify} messages.
                     * @param message UpdateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IUpdateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.UpdateDatasetRequest.verify|verify} messages.
                     * @param message UpdateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IUpdateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.UpdateDatasetRequest;

                    /**
                     * Decodes an UpdateDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.UpdateDatasetRequest;

                    /**
                     * Verifies an UpdateDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.UpdateDatasetRequest;

                    /**
                     * Creates a plain object from an UpdateDatasetRequest message. Also converts values to other types if specified.
                     * @param message UpdateDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.UpdateDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDatasetRequest. */
                interface IDeleteDatasetRequest {

                    /** DeleteDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDatasetRequest. */
                class DeleteDatasetRequest implements IDeleteDatasetRequest {

                    /**
                     * Constructs a new DeleteDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDeleteDatasetRequest);

                    /** DeleteDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDeleteDatasetRequest): google.cloud.automl.v1.DeleteDatasetRequest;

                    /**
                     * Encodes the specified DeleteDatasetRequest message. Does not implicitly {@link google.cloud.automl.v1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DeleteDatasetRequest;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DeleteDatasetRequest;

                    /**
                     * Verifies a DeleteDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DeleteDatasetRequest;

                    /**
                     * Creates a plain object from a DeleteDatasetRequest message. Also converts values to other types if specified.
                     * @param message DeleteDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DeleteDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportDataRequest. */
                interface IImportDataRequest {

                    /** ImportDataRequest name */
                    name?: (string|null);

                    /** ImportDataRequest inputConfig */
                    inputConfig?: (google.cloud.automl.v1.IInputConfig|null);
                }

                /** Represents an ImportDataRequest. */
                class ImportDataRequest implements IImportDataRequest {

                    /**
                     * Constructs a new ImportDataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IImportDataRequest);

                    /** ImportDataRequest name. */
                    public name: string;

                    /** ImportDataRequest inputConfig. */
                    public inputConfig?: (google.cloud.automl.v1.IInputConfig|null);

                    /**
                     * Creates a new ImportDataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportDataRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IImportDataRequest): google.cloud.automl.v1.ImportDataRequest;

                    /**
                     * Encodes the specified ImportDataRequest message. Does not implicitly {@link google.cloud.automl.v1.ImportDataRequest.verify|verify} messages.
                     * @param message ImportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IImportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportDataRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ImportDataRequest.verify|verify} messages.
                     * @param message ImportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IImportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportDataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ImportDataRequest;

                    /**
                     * Decodes an ImportDataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ImportDataRequest;

                    /**
                     * Verifies an ImportDataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportDataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportDataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ImportDataRequest;

                    /**
                     * Creates a plain object from an ImportDataRequest message. Also converts values to other types if specified.
                     * @param message ImportDataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ImportDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportDataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportDataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportDataRequest. */
                interface IExportDataRequest {

                    /** ExportDataRequest name */
                    name?: (string|null);

                    /** ExportDataRequest outputConfig */
                    outputConfig?: (google.cloud.automl.v1.IOutputConfig|null);
                }

                /** Represents an ExportDataRequest. */
                class ExportDataRequest implements IExportDataRequest {

                    /**
                     * Constructs a new ExportDataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IExportDataRequest);

                    /** ExportDataRequest name. */
                    public name: string;

                    /** ExportDataRequest outputConfig. */
                    public outputConfig?: (google.cloud.automl.v1.IOutputConfig|null);

                    /**
                     * Creates a new ExportDataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDataRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IExportDataRequest): google.cloud.automl.v1.ExportDataRequest;

                    /**
                     * Encodes the specified ExportDataRequest message. Does not implicitly {@link google.cloud.automl.v1.ExportDataRequest.verify|verify} messages.
                     * @param message ExportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IExportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDataRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportDataRequest.verify|verify} messages.
                     * @param message ExportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IExportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportDataRequest;

                    /**
                     * Decodes an ExportDataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportDataRequest;

                    /**
                     * Verifies an ExportDataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportDataRequest;

                    /**
                     * Creates a plain object from an ExportDataRequest message. Also converts values to other types if specified.
                     * @param message ExportDataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ExportDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAnnotationSpecRequest. */
                interface IGetAnnotationSpecRequest {

                    /** GetAnnotationSpecRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAnnotationSpecRequest. */
                class GetAnnotationSpecRequest implements IGetAnnotationSpecRequest {

                    /**
                     * Constructs a new GetAnnotationSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGetAnnotationSpecRequest);

                    /** GetAnnotationSpecRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAnnotationSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAnnotationSpecRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGetAnnotationSpecRequest): google.cloud.automl.v1.GetAnnotationSpecRequest;

                    /**
                     * Encodes the specified GetAnnotationSpecRequest message. Does not implicitly {@link google.cloud.automl.v1.GetAnnotationSpecRequest.verify|verify} messages.
                     * @param message GetAnnotationSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGetAnnotationSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAnnotationSpecRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GetAnnotationSpecRequest.verify|verify} messages.
                     * @param message GetAnnotationSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGetAnnotationSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAnnotationSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAnnotationSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GetAnnotationSpecRequest;

                    /**
                     * Decodes a GetAnnotationSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAnnotationSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GetAnnotationSpecRequest;

                    /**
                     * Verifies a GetAnnotationSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAnnotationSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAnnotationSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GetAnnotationSpecRequest;

                    /**
                     * Creates a plain object from a GetAnnotationSpecRequest message. Also converts values to other types if specified.
                     * @param message GetAnnotationSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GetAnnotationSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAnnotationSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAnnotationSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateModelRequest. */
                interface ICreateModelRequest {

                    /** CreateModelRequest parent */
                    parent?: (string|null);

                    /** CreateModelRequest model */
                    model?: (google.cloud.automl.v1.IModel|null);
                }

                /** Represents a CreateModelRequest. */
                class CreateModelRequest implements ICreateModelRequest {

                    /**
                     * Constructs a new CreateModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.ICreateModelRequest);

                    /** CreateModelRequest parent. */
                    public parent: string;

                    /** CreateModelRequest model. */
                    public model?: (google.cloud.automl.v1.IModel|null);

                    /**
                     * Creates a new CreateModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.ICreateModelRequest): google.cloud.automl.v1.CreateModelRequest;

                    /**
                     * Encodes the specified CreateModelRequest message. Does not implicitly {@link google.cloud.automl.v1.CreateModelRequest.verify|verify} messages.
                     * @param message CreateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.CreateModelRequest.verify|verify} messages.
                     * @param message CreateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.CreateModelRequest;

                    /**
                     * Decodes a CreateModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.CreateModelRequest;

                    /**
                     * Verifies a CreateModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.CreateModelRequest;

                    /**
                     * Creates a plain object from a CreateModelRequest message. Also converts values to other types if specified.
                     * @param message CreateModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.CreateModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetModelRequest. */
                interface IGetModelRequest {

                    /** GetModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetModelRequest. */
                class GetModelRequest implements IGetModelRequest {

                    /**
                     * Constructs a new GetModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGetModelRequest);

                    /** GetModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGetModelRequest): google.cloud.automl.v1.GetModelRequest;

                    /**
                     * Encodes the specified GetModelRequest message. Does not implicitly {@link google.cloud.automl.v1.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GetModelRequest;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GetModelRequest;

                    /**
                     * Verifies a GetModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GetModelRequest;

                    /**
                     * Creates a plain object from a GetModelRequest message. Also converts values to other types if specified.
                     * @param message GetModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GetModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsRequest. */
                interface IListModelsRequest {

                    /** ListModelsRequest parent */
                    parent?: (string|null);

                    /** ListModelsRequest filter */
                    filter?: (string|null);

                    /** ListModelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListModelsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListModelsRequest. */
                class ListModelsRequest implements IListModelsRequest {

                    /**
                     * Constructs a new ListModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListModelsRequest);

                    /** ListModelsRequest parent. */
                    public parent: string;

                    /** ListModelsRequest filter. */
                    public filter: string;

                    /** ListModelsRequest pageSize. */
                    public pageSize: number;

                    /** ListModelsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListModelsRequest): google.cloud.automl.v1.ListModelsRequest;

                    /**
                     * Encodes the specified ListModelsRequest message. Does not implicitly {@link google.cloud.automl.v1.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListModelsRequest;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListModelsRequest;

                    /**
                     * Verifies a ListModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListModelsRequest;

                    /**
                     * Creates a plain object from a ListModelsRequest message. Also converts values to other types if specified.
                     * @param message ListModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsResponse. */
                interface IListModelsResponse {

                    /** ListModelsResponse model */
                    model?: (google.cloud.automl.v1.IModel[]|null);

                    /** ListModelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListModelsResponse. */
                class ListModelsResponse implements IListModelsResponse {

                    /**
                     * Constructs a new ListModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListModelsResponse);

                    /** ListModelsResponse model. */
                    public model: google.cloud.automl.v1.IModel[];

                    /** ListModelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsResponse instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListModelsResponse): google.cloud.automl.v1.ListModelsResponse;

                    /**
                     * Encodes the specified ListModelsResponse message. Does not implicitly {@link google.cloud.automl.v1.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsResponse message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListModelsResponse;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListModelsResponse;

                    /**
                     * Verifies a ListModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListModelsResponse;

                    /**
                     * Creates a plain object from a ListModelsResponse message. Also converts values to other types if specified.
                     * @param message ListModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteModelRequest. */
                interface IDeleteModelRequest {

                    /** DeleteModelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteModelRequest. */
                class DeleteModelRequest implements IDeleteModelRequest {

                    /**
                     * Constructs a new DeleteModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDeleteModelRequest);

                    /** DeleteModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDeleteModelRequest): google.cloud.automl.v1.DeleteModelRequest;

                    /**
                     * Encodes the specified DeleteModelRequest message. Does not implicitly {@link google.cloud.automl.v1.DeleteModelRequest.verify|verify} messages.
                     * @param message DeleteModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DeleteModelRequest.verify|verify} messages.
                     * @param message DeleteModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DeleteModelRequest;

                    /**
                     * Decodes a DeleteModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DeleteModelRequest;

                    /**
                     * Verifies a DeleteModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DeleteModelRequest;

                    /**
                     * Creates a plain object from a DeleteModelRequest message. Also converts values to other types if specified.
                     * @param message DeleteModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DeleteModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateModelRequest. */
                interface IUpdateModelRequest {

                    /** UpdateModelRequest model */
                    model?: (google.cloud.automl.v1.IModel|null);

                    /** UpdateModelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateModelRequest. */
                class UpdateModelRequest implements IUpdateModelRequest {

                    /**
                     * Constructs a new UpdateModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IUpdateModelRequest);

                    /** UpdateModelRequest model. */
                    public model?: (google.cloud.automl.v1.IModel|null);

                    /** UpdateModelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IUpdateModelRequest): google.cloud.automl.v1.UpdateModelRequest;

                    /**
                     * Encodes the specified UpdateModelRequest message. Does not implicitly {@link google.cloud.automl.v1.UpdateModelRequest.verify|verify} messages.
                     * @param message UpdateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IUpdateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.UpdateModelRequest.verify|verify} messages.
                     * @param message UpdateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IUpdateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.UpdateModelRequest;

                    /**
                     * Decodes an UpdateModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.UpdateModelRequest;

                    /**
                     * Verifies an UpdateModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.UpdateModelRequest;

                    /**
                     * Creates a plain object from an UpdateModelRequest message. Also converts values to other types if specified.
                     * @param message UpdateModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.UpdateModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeployModelRequest. */
                interface IDeployModelRequest {

                    /** DeployModelRequest imageObjectDetectionModelDeploymentMetadata */
                    imageObjectDetectionModelDeploymentMetadata?: (google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata|null);

                    /** DeployModelRequest imageClassificationModelDeploymentMetadata */
                    imageClassificationModelDeploymentMetadata?: (google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata|null);

                    /** DeployModelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeployModelRequest. */
                class DeployModelRequest implements IDeployModelRequest {

                    /**
                     * Constructs a new DeployModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IDeployModelRequest);

                    /** DeployModelRequest imageObjectDetectionModelDeploymentMetadata. */
                    public imageObjectDetectionModelDeploymentMetadata?: (google.cloud.automl.v1.IImageObjectDetectionModelDeploymentMetadata|null);

                    /** DeployModelRequest imageClassificationModelDeploymentMetadata. */
                    public imageClassificationModelDeploymentMetadata?: (google.cloud.automl.v1.IImageClassificationModelDeploymentMetadata|null);

                    /** DeployModelRequest name. */
                    public name: string;

                    /** DeployModelRequest modelDeploymentMetadata. */
                    public modelDeploymentMetadata?: ("imageObjectDetectionModelDeploymentMetadata"|"imageClassificationModelDeploymentMetadata");

                    /**
                     * Creates a new DeployModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IDeployModelRequest): google.cloud.automl.v1.DeployModelRequest;

                    /**
                     * Encodes the specified DeployModelRequest message. Does not implicitly {@link google.cloud.automl.v1.DeployModelRequest.verify|verify} messages.
                     * @param message DeployModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IDeployModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.DeployModelRequest.verify|verify} messages.
                     * @param message DeployModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IDeployModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.DeployModelRequest;

                    /**
                     * Decodes a DeployModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.DeployModelRequest;

                    /**
                     * Verifies a DeployModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.DeployModelRequest;

                    /**
                     * Creates a plain object from a DeployModelRequest message. Also converts values to other types if specified.
                     * @param message DeployModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.DeployModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeployModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeployModelRequest. */
                interface IUndeployModelRequest {

                    /** UndeployModelRequest name */
                    name?: (string|null);
                }

                /** Represents an UndeployModelRequest. */
                class UndeployModelRequest implements IUndeployModelRequest {

                    /**
                     * Constructs a new UndeployModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IUndeployModelRequest);

                    /** UndeployModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new UndeployModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeployModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IUndeployModelRequest): google.cloud.automl.v1.UndeployModelRequest;

                    /**
                     * Encodes the specified UndeployModelRequest message. Does not implicitly {@link google.cloud.automl.v1.UndeployModelRequest.verify|verify} messages.
                     * @param message UndeployModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IUndeployModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeployModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.UndeployModelRequest.verify|verify} messages.
                     * @param message UndeployModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IUndeployModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeployModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeployModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.UndeployModelRequest;

                    /**
                     * Decodes an UndeployModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeployModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.UndeployModelRequest;

                    /**
                     * Verifies an UndeployModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeployModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeployModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.UndeployModelRequest;

                    /**
                     * Creates a plain object from an UndeployModelRequest message. Also converts values to other types if specified.
                     * @param message UndeployModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.UndeployModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeployModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeployModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportModelRequest. */
                interface IExportModelRequest {

                    /** ExportModelRequest name */
                    name?: (string|null);

                    /** ExportModelRequest outputConfig */
                    outputConfig?: (google.cloud.automl.v1.IModelExportOutputConfig|null);
                }

                /** Represents an ExportModelRequest. */
                class ExportModelRequest implements IExportModelRequest {

                    /**
                     * Constructs a new ExportModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IExportModelRequest);

                    /** ExportModelRequest name. */
                    public name: string;

                    /** ExportModelRequest outputConfig. */
                    public outputConfig?: (google.cloud.automl.v1.IModelExportOutputConfig|null);

                    /**
                     * Creates a new ExportModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportModelRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IExportModelRequest): google.cloud.automl.v1.ExportModelRequest;

                    /**
                     * Encodes the specified ExportModelRequest message. Does not implicitly {@link google.cloud.automl.v1.ExportModelRequest.verify|verify} messages.
                     * @param message ExportModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IExportModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportModelRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ExportModelRequest.verify|verify} messages.
                     * @param message ExportModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IExportModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ExportModelRequest;

                    /**
                     * Decodes an ExportModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ExportModelRequest;

                    /**
                     * Verifies an ExportModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ExportModelRequest;

                    /**
                     * Creates a plain object from an ExportModelRequest message. Also converts values to other types if specified.
                     * @param message ExportModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ExportModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetModelEvaluationRequest. */
                interface IGetModelEvaluationRequest {

                    /** GetModelEvaluationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetModelEvaluationRequest. */
                class GetModelEvaluationRequest implements IGetModelEvaluationRequest {

                    /**
                     * Constructs a new GetModelEvaluationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IGetModelEvaluationRequest);

                    /** GetModelEvaluationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetModelEvaluationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetModelEvaluationRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IGetModelEvaluationRequest): google.cloud.automl.v1.GetModelEvaluationRequest;

                    /**
                     * Encodes the specified GetModelEvaluationRequest message. Does not implicitly {@link google.cloud.automl.v1.GetModelEvaluationRequest.verify|verify} messages.
                     * @param message GetModelEvaluationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IGetModelEvaluationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetModelEvaluationRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.GetModelEvaluationRequest.verify|verify} messages.
                     * @param message GetModelEvaluationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IGetModelEvaluationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetModelEvaluationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetModelEvaluationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.GetModelEvaluationRequest;

                    /**
                     * Decodes a GetModelEvaluationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetModelEvaluationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.GetModelEvaluationRequest;

                    /**
                     * Verifies a GetModelEvaluationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetModelEvaluationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetModelEvaluationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.GetModelEvaluationRequest;

                    /**
                     * Creates a plain object from a GetModelEvaluationRequest message. Also converts values to other types if specified.
                     * @param message GetModelEvaluationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.GetModelEvaluationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetModelEvaluationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetModelEvaluationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelEvaluationsRequest. */
                interface IListModelEvaluationsRequest {

                    /** ListModelEvaluationsRequest parent */
                    parent?: (string|null);

                    /** ListModelEvaluationsRequest filter */
                    filter?: (string|null);

                    /** ListModelEvaluationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListModelEvaluationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListModelEvaluationsRequest. */
                class ListModelEvaluationsRequest implements IListModelEvaluationsRequest {

                    /**
                     * Constructs a new ListModelEvaluationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListModelEvaluationsRequest);

                    /** ListModelEvaluationsRequest parent. */
                    public parent: string;

                    /** ListModelEvaluationsRequest filter. */
                    public filter: string;

                    /** ListModelEvaluationsRequest pageSize. */
                    public pageSize: number;

                    /** ListModelEvaluationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListModelEvaluationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelEvaluationsRequest instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListModelEvaluationsRequest): google.cloud.automl.v1.ListModelEvaluationsRequest;

                    /**
                     * Encodes the specified ListModelEvaluationsRequest message. Does not implicitly {@link google.cloud.automl.v1.ListModelEvaluationsRequest.verify|verify} messages.
                     * @param message ListModelEvaluationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListModelEvaluationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelEvaluationsRequest message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListModelEvaluationsRequest.verify|verify} messages.
                     * @param message ListModelEvaluationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListModelEvaluationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelEvaluationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelEvaluationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListModelEvaluationsRequest;

                    /**
                     * Decodes a ListModelEvaluationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelEvaluationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListModelEvaluationsRequest;

                    /**
                     * Verifies a ListModelEvaluationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelEvaluationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelEvaluationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListModelEvaluationsRequest;

                    /**
                     * Creates a plain object from a ListModelEvaluationsRequest message. Also converts values to other types if specified.
                     * @param message ListModelEvaluationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListModelEvaluationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelEvaluationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelEvaluationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelEvaluationsResponse. */
                interface IListModelEvaluationsResponse {

                    /** ListModelEvaluationsResponse modelEvaluation */
                    modelEvaluation?: (google.cloud.automl.v1.IModelEvaluation[]|null);

                    /** ListModelEvaluationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListModelEvaluationsResponse. */
                class ListModelEvaluationsResponse implements IListModelEvaluationsResponse {

                    /**
                     * Constructs a new ListModelEvaluationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.automl.v1.IListModelEvaluationsResponse);

                    /** ListModelEvaluationsResponse modelEvaluation. */
                    public modelEvaluation: google.cloud.automl.v1.IModelEvaluation[];

                    /** ListModelEvaluationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListModelEvaluationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelEvaluationsResponse instance
                     */
                    public static create(properties?: google.cloud.automl.v1.IListModelEvaluationsResponse): google.cloud.automl.v1.ListModelEvaluationsResponse;

                    /**
                     * Encodes the specified ListModelEvaluationsResponse message. Does not implicitly {@link google.cloud.automl.v1.ListModelEvaluationsResponse.verify|verify} messages.
                     * @param message ListModelEvaluationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.automl.v1.IListModelEvaluationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelEvaluationsResponse message, length delimited. Does not implicitly {@link google.cloud.automl.v1.ListModelEvaluationsResponse.verify|verify} messages.
                     * @param message ListModelEvaluationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.automl.v1.IListModelEvaluationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelEvaluationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelEvaluationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.automl.v1.ListModelEvaluationsResponse;

                    /**
                     * Decodes a ListModelEvaluationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelEvaluationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.automl.v1.ListModelEvaluationsResponse;

                    /**
                     * Verifies a ListModelEvaluationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelEvaluationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelEvaluationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.automl.v1.ListModelEvaluationsResponse;

                    /**
                     * Creates a plain object from a ListModelEvaluationsResponse message. Also converts values to other types if specified.
                     * @param message ListModelEvaluationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.automl.v1.ListModelEvaluationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelEvaluationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelEvaluationsResponse
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
}
