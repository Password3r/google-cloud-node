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

import protos from '../protos/protos-hack.js';
import assert from 'assert';
import sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import translationserviceModule from '../src/index.js';
import fs from 'fs';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

import path from 'path';
import {fileURLToPath} from 'url';
let dirToUse = '';
try {
  dirToUse = __dirname;
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  dirToUse = import.meta.url;
}
const filename = fileURLToPath(dirToUse);
const dirname = path.dirname(filename);

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(JSON.parse(fs.readFileSync(path.join(dirname, '..', 'protos/protos.json'), 'utf8'))).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().rejects(callError)
    : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().callsArgWith(2, callError)
    : sinon.stub().callsArgWith(2, null, mockOperation);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v3.TranslationServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        translationserviceModule.v3.TranslationServiceClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        translationserviceModule.v3.TranslationServiceClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = translationserviceModule.v3.TranslationServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new translationserviceModule.v3.TranslationServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.translationServiceStub, undefined);
      await client.initialize();
      assert(client.translationServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.translationServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.translationServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('translateText', () => {
    it('invokes translateText without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextRequest
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextResponse()
      );
      client.innerApiCalls.translateText = stubSimpleCall(expectedResponse);
      const [response] = await client.translateText(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateText without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextResponse()
      );
      client.innerApiCalls.translateText =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.translateText(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.ITranslateTextResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateText with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.translateText = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.translateText(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateText with closed client', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.translateText(request), expectedError);
    });
  });

  describe('detectLanguage', () => {
    it('invokes detectLanguage without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DetectLanguageRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageResponse()
      );
      client.innerApiCalls.detectLanguage = stubSimpleCall(expectedResponse);
      const [response] = await client.detectLanguage(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes detectLanguage without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DetectLanguageRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageResponse()
      );
      client.innerApiCalls.detectLanguage =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.detectLanguage(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.IDetectLanguageResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes detectLanguage with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DetectLanguageRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.detectLanguage = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.detectLanguage(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.detectLanguage as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes detectLanguage with closed client', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DetectLanguageRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DetectLanguageRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.detectLanguage(request), expectedError);
    });
  });

  describe('getSupportedLanguages', () => {
    it('invokes getSupportedLanguages without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetSupportedLanguagesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetSupportedLanguagesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.SupportedLanguages()
      );
      client.innerApiCalls.getSupportedLanguages =
        stubSimpleCall(expectedResponse);
      const [response] = await client.getSupportedLanguages(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSupportedLanguages without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetSupportedLanguagesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetSupportedLanguagesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.SupportedLanguages()
      );
      client.innerApiCalls.getSupportedLanguages =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getSupportedLanguages(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.ISupportedLanguages | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSupportedLanguages with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetSupportedLanguagesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetSupportedLanguagesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getSupportedLanguages = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.getSupportedLanguages(request),
        expectedError
      );
      const actualRequest = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSupportedLanguages as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSupportedLanguages with closed client', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetSupportedLanguagesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetSupportedLanguagesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(
        client.getSupportedLanguages(request),
        expectedError
      );
    });
  });

  describe('translateDocument', () => {
    it('invokes translateDocument without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentResponse()
      );
      client.innerApiCalls.translateDocument = stubSimpleCall(expectedResponse);
      const [response] = await client.translateDocument(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateDocument without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentResponse()
      );
      client.innerApiCalls.translateDocument =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.translateDocument(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.ITranslateDocumentResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateDocument with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.translateDocument = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.translateDocument(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateDocument with closed client', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.TranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.TranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.translateDocument(request), expectedError);
    });
  });

  describe('getGlossary', () => {
    it('invokes getGlossary without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.Glossary()
      );
      client.innerApiCalls.getGlossary = stubSimpleCall(expectedResponse);
      const [response] = await client.getGlossary(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getGlossary without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.translation.v3.Glossary()
      );
      client.innerApiCalls.getGlossary =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getGlossary(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.IGlossary | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getGlossary with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getGlossary = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getGlossary(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getGlossary with closed client', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.GetGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.GetGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getGlossary(request), expectedError);
    });
  });

  describe('batchTranslateText', () => {
    it('invokes batchTranslateText without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchTranslateText =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.batchTranslateText(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateText without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchTranslateText =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.batchTranslateText(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.translation.v3.IBatchTranslateResponse,
              protos.google.cloud.translation.v3.IBatchTranslateMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.translation.v3.IBatchTranslateResponse,
        protos.google.cloud.translation.v3.IBatchTranslateMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateText with call error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.batchTranslateText = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.batchTranslateText(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateText with LRO error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateTextRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateTextRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.batchTranslateText = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.batchTranslateText(request);
      await assert.rejects(operation.promise(), expectedError);
      const actualRequest = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateText as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes checkBatchTranslateTextProgress without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkBatchTranslateTextProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkBatchTranslateTextProgress with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkBatchTranslateTextProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('batchTranslateDocument', () => {
    it('invokes batchTranslateDocument without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchTranslateDocument =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.batchTranslateDocument(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateDocument without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchTranslateDocument =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.batchTranslateDocument(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.translation.v3.IBatchTranslateDocumentResponse,
              protos.google.cloud.translation.v3.IBatchTranslateDocumentMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.translation.v3.IBatchTranslateDocumentResponse,
        protos.google.cloud.translation.v3.IBatchTranslateDocumentMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateDocument with call error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.batchTranslateDocument = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.batchTranslateDocument(request),
        expectedError
      );
      const actualRequest = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchTranslateDocument with LRO error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.BatchTranslateDocumentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.BatchTranslateDocumentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.batchTranslateDocument = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.batchTranslateDocument(request);
      await assert.rejects(operation.promise(), expectedError);
      const actualRequest = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchTranslateDocument as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes checkBatchTranslateDocumentProgress without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkBatchTranslateDocumentProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkBatchTranslateDocumentProgress with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkBatchTranslateDocumentProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('createGlossary', () => {
    it('invokes createGlossary without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.CreateGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.CreateGlossaryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createGlossary =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.createGlossary(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createGlossary without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.CreateGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.CreateGlossaryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createGlossary =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createGlossary(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.translation.v3.IGlossary,
              protos.google.cloud.translation.v3.ICreateGlossaryMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.translation.v3.IGlossary,
        protos.google.cloud.translation.v3.ICreateGlossaryMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createGlossary with call error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.CreateGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.CreateGlossaryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.createGlossary = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createGlossary(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createGlossary with LRO error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.CreateGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.CreateGlossaryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.createGlossary = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.createGlossary(request);
      await assert.rejects(operation.promise(), expectedError);
      const actualRequest = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes checkCreateGlossaryProgress without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkCreateGlossaryProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkCreateGlossaryProgress with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkCreateGlossaryProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('deleteGlossary', () => {
    it('invokes deleteGlossary without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DeleteGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DeleteGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteGlossary =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.deleteGlossary(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteGlossary without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DeleteGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DeleteGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteGlossary =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteGlossary(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.translation.v3.IDeleteGlossaryResponse,
              protos.google.cloud.translation.v3.IDeleteGlossaryMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.translation.v3.IDeleteGlossaryResponse,
        protos.google.cloud.translation.v3.IDeleteGlossaryMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteGlossary with call error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DeleteGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DeleteGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteGlossary = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteGlossary(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteGlossary with LRO error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.DeleteGlossaryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.DeleteGlossaryRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteGlossary = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.deleteGlossary(request);
      await assert.rejects(operation.promise(), expectedError);
      const actualRequest = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteGlossary as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes checkDeleteGlossaryProgress without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkDeleteGlossaryProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkDeleteGlossaryProgress with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkDeleteGlossaryProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('listGlossaries', () => {
    it('invokes listGlossaries without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
      ];
      client.innerApiCalls.listGlossaries = stubSimpleCall(expectedResponse);
      const [response] = await client.listGlossaries(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listGlossaries without error using callback', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
      ];
      client.innerApiCalls.listGlossaries =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listGlossaries(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.translation.v3.IGlossary[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listGlossaries with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listGlossaries = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listGlossaries(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listGlossaries as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listGlossariesStream without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
      ];
      client.descriptors.page.listGlossaries.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listGlossariesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.translation.v3.Glossary[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.translation.v3.Glossary) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listGlossaries.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listGlossaries, request)
      );
      assert(
        (client.descriptors.page.listGlossaries.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes listGlossariesStream with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listGlossaries.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listGlossariesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.translation.v3.Glossary[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.translation.v3.Glossary) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listGlossaries.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listGlossaries, request)
      );
      assert(
        (client.descriptors.page.listGlossaries.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listGlossaries without error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
        generateSampleMessage(
          new protos.google.cloud.translation.v3.Glossary()
        ),
      ];
      client.descriptors.page.listGlossaries.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.translation.v3.IGlossary[] = [];
      const iterable = client.listGlossariesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listGlossaries.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listGlossaries.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listGlossaries with error', async () => {
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.translation.v3.ListGlossariesRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.translation.v3.ListGlossariesRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listGlossaries.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listGlossariesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.translation.v3.IGlossary[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listGlossaries.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listGlossaries.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });

  describe('Path templates', () => {
    describe('glossary', () => {
      const fakePath = '/rendered/path/glossary';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        glossary: 'glossaryValue',
      };
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.glossaryPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.glossaryPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('glossaryPath', () => {
        const result = client.glossaryPath(
          'projectValue',
          'locationValue',
          'glossaryValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.glossaryPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromGlossaryName', () => {
        const result = client.matchProjectFromGlossaryName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.glossaryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromGlossaryName', () => {
        const result = client.matchLocationFromGlossaryName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.glossaryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchGlossaryFromGlossaryName', () => {
        const result = client.matchGlossaryFromGlossaryName(fakePath);
        assert.strictEqual(result, 'glossaryValue');
        assert(
          (client.pathTemplates.glossaryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client = new translationserviceModule.v3.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
