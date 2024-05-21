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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as generativeserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

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

function stubServerStreamingCall<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // write something to the stream to trigger transformStub and send the response back to the client
  setImmediate(() => {
    mockStream.write({});
  });
  setImmediate(() => {
    mockStream.end();
  });
  return sinon.stub().returns(mockStream);
}

describe('v1.GenerativeServiceClient', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'generativelanguage.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath =
          generativeserviceModule.v1.GenerativeServiceClient.servicePath;
        assert.strictEqual(servicePath, 'generativelanguage.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          generativeserviceModule.v1.GenerativeServiceClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'generativelanguage.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'generativelanguage.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        universe_domain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'generativelanguage.example.com');
    });

    if (typeof process === 'object' && 'env' in process) {
      describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
        it('sets apiEndpoint from environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client =
            new generativeserviceModule.v1.GenerativeServiceClient();
          const servicePath = client.apiEndpoint;
          assert.strictEqual(servicePath, 'generativelanguage.example.com');
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });

        it('value configured in code has priority over environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client = new generativeserviceModule.v1.GenerativeServiceClient(
            {universeDomain: 'configured.example.com'}
          );
          const servicePath = client.apiEndpoint;
          assert.strictEqual(
            servicePath,
            'generativelanguage.configured.example.com'
          );
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });
      });
    }
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new generativeserviceModule.v1.GenerativeServiceClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port = generativeserviceModule.v1.GenerativeServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.generativeServiceStub, undefined);
      await client.initialize();
      assert(client.generativeServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.generativeServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.generativeServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
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
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
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

  describe('generateContent', () => {
    it('invokes generateContent without error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentResponse()
      );
      client.innerApiCalls.generateContent = stubSimpleCall(expectedResponse);
      const [response] = await client.generateContent(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes generateContent without error using callback', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentResponse()
      );
      client.innerApiCalls.generateContent =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.generateContent(
          request,
          (
            err?: Error | null,
            result?: protos.google.ai.generativelanguage.v1.IGenerateContentResponse | null
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
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes generateContent with error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.generateContent = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.generateContent(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.generateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes generateContent with closed client', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.generateContent(request), expectedError);
    });
  });

  describe('embedContent', () => {
    it('invokes embedContent without error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.EmbedContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentResponse()
      );
      client.innerApiCalls.embedContent = stubSimpleCall(expectedResponse);
      const [response] = await client.embedContent(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes embedContent without error using callback', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.EmbedContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentResponse()
      );
      client.innerApiCalls.embedContent =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.embedContent(
          request,
          (
            err?: Error | null,
            result?: protos.google.ai.generativelanguage.v1.IEmbedContentResponse | null
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
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes embedContent with error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.EmbedContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.embedContent = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.embedContent(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.embedContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes embedContent with closed client', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.EmbedContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.EmbedContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.embedContent(request), expectedError);
    });
  });

  describe('batchEmbedContents', () => {
    it('invokes batchEmbedContents without error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.BatchEmbedContentsRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsResponse()
      );
      client.innerApiCalls.batchEmbedContents =
        stubSimpleCall(expectedResponse);
      const [response] = await client.batchEmbedContents(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchEmbedContents without error using callback', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.BatchEmbedContentsRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsResponse()
      );
      client.innerApiCalls.batchEmbedContents =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.batchEmbedContents(
          request,
          (
            err?: Error | null,
            result?: protos.google.ai.generativelanguage.v1.IBatchEmbedContentsResponse | null
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
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchEmbedContents with error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.BatchEmbedContentsRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.batchEmbedContents = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.batchEmbedContents(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.batchEmbedContents as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes batchEmbedContents with closed client', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.BatchEmbedContentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.BatchEmbedContentsRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.batchEmbedContents(request), expectedError);
    });
  });

  describe('countTokens', () => {
    it('invokes countTokens without error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.CountTokensRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensResponse()
      );
      client.innerApiCalls.countTokens = stubSimpleCall(expectedResponse);
      const [response] = await client.countTokens(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes countTokens without error using callback', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.CountTokensRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensResponse()
      );
      client.innerApiCalls.countTokens =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.countTokens(
          request,
          (
            err?: Error | null,
            result?: protos.google.ai.generativelanguage.v1.ICountTokensResponse | null
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
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes countTokens with error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.CountTokensRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.countTokens = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.countTokens(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.countTokens as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes countTokens with closed client', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.CountTokensRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.CountTokensRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.countTokens(request), expectedError);
    });
  });

  describe('streamGenerateContent', () => {
    it('invokes streamGenerateContent without error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentResponse()
      );
      client.innerApiCalls.streamGenerateContent =
        stubServerStreamingCall(expectedResponse);
      const stream = client.streamGenerateContent(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.ai.generativelanguage.v1.GenerateContentResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes streamGenerateContent without error and gaxServerStreamingRetries enabled', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        gaxServerStreamingRetries: true,
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentResponse()
      );
      client.innerApiCalls.streamGenerateContent =
        stubServerStreamingCall(expectedResponse);
      const stream = client.streamGenerateContent(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.ai.generativelanguage.v1.GenerateContentResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes streamGenerateContent with error', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedHeaderRequestParams = `model=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.streamGenerateContent = stubServerStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.streamGenerateContent(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.ai.generativelanguage.v1.GenerateContentResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      const actualRequest = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.streamGenerateContent as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes streamGenerateContent with closed client', async () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.ai.generativelanguage.v1.GenerateContentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.ai.generativelanguage.v1.GenerateContentRequest',
        ['model']
      );
      request.model = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      const stream = client.streamGenerateContent(request, {
        retryRequestOptions: {noResponseRetries: 0},
      });
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.ai.generativelanguage.v1.GenerateContentResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
    });
    it('should create a client with gaxServerStreamingRetries enabled', () => {
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        gaxServerStreamingRetries: true,
      });
      assert(client);
    });
  });

  describe('Path templates', () => {
    describe('model', () => {
      const fakePath = '/rendered/path/model';
      const expectedParameters = {
        model: 'modelValue',
      };
      const client = new generativeserviceModule.v1.GenerativeServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.modelPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.modelPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('modelPath', () => {
        const result = client.modelPath('modelValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.modelPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchModelFromModelName', () => {
        const result = client.matchModelFromModelName(fakePath);
        assert.strictEqual(result, 'modelValue');
        assert(
          (client.pathTemplates.modelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
