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
import * as speechtranslationserviceModule from '../src';

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

function stubBidiStreamingCall<ResponseType>(
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
  return sinon.stub().returns(mockStream);
}

describe('v1beta1.SpeechTranslationServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
          .servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
          .apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port =
        speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
          .port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            fallback: true,
          }
        );
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.speechTranslationServiceStub, undefined);
      await client.initialize();
      assert(client.speechTranslationServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      assert(client.speechTranslationServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.speechTranslationServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
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

  describe('streamingTranslateSpeech', () => {
    it('invokes streamingTranslateSpeech without error', async () => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechRequest()
      );

      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechResponse()
      );
      client.innerApiCalls.streamingTranslateSpeech =
        stubBidiStreamingCall(expectedResponse);
      const stream = client.streamingTranslateSpeech();
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
        stream.write(request);
        stream.end();
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.streamingTranslateSpeech as SinonStub)
          .getCall(0)
          .calledWith(null)
      );
      assert.deepStrictEqual(
        ((stream as unknown as PassThrough)._transform as SinonStub).getCall(0)
          .args[0],
        request
      );
    });

    it('invokes streamingTranslateSpeech with error', async () => {
      const client =
        new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.streamingTranslateSpeech = stubBidiStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.streamingTranslateSpeech();
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
        stream.write(request);
        stream.end();
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.innerApiCalls.streamingTranslateSpeech as SinonStub)
          .getCall(0)
          .calledWith(null)
      );
      assert.deepStrictEqual(
        ((stream as unknown as PassThrough)._transform as SinonStub).getCall(0)
          .args[0],
        request
      );
    });
  });
});
