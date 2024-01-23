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
import * as commentserviceModule from '../src';

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

describe('v2.CommentServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        commentserviceModule.v2.CommentServiceClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        commentserviceModule.v2.CommentServiceClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = commentserviceModule.v2.CommentServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new commentserviceModule.v2.CommentServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.commentServiceStub, undefined);
      await client.initialize();
      assert(client.commentServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.commentServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.commentServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new commentserviceModule.v2.CommentServiceClient({
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
      const client = new commentserviceModule.v2.CommentServiceClient({
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

  describe('createComment', () => {
    it('invokes createComment without error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.CreateCommentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.CreateCommentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.support.v2.Comment()
      );
      client.innerApiCalls.createComment = stubSimpleCall(expectedResponse);
      const [response] = await client.createComment(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createComment without error using callback', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.CreateCommentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.CreateCommentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.support.v2.Comment()
      );
      client.innerApiCalls.createComment =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createComment(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.support.v2.IComment | null
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
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createComment with error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.CreateCommentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.CreateCommentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.createComment = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createComment(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createComment as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createComment with closed client', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.CreateCommentRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.CreateCommentRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.createComment(request), expectedError);
    });
  });

  describe('listComments', () => {
    it('invokes listComments without error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
      ];
      client.innerApiCalls.listComments = stubSimpleCall(expectedResponse);
      const [response] = await client.listComments(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listComments without error using callback', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
      ];
      client.innerApiCalls.listComments =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listComments(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.support.v2.IComment[] | null
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
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listComments with error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listComments = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listComments(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listComments as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listCommentsStream without error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
      ];
      client.descriptors.page.listComments.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listCommentsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.support.v2.Comment[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.support.v2.Comment) => {
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
        (client.descriptors.page.listComments.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listComments, request)
      );
      assert(
        (client.descriptors.page.listComments.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes listCommentsStream with error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listComments.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listCommentsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.support.v2.Comment[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.support.v2.Comment) => {
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
        (client.descriptors.page.listComments.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listComments, request)
      );
      assert(
        (client.descriptors.page.listComments.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listComments without error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
        generateSampleMessage(new protos.google.cloud.support.v2.Comment()),
      ];
      client.descriptors.page.listComments.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.support.v2.IComment[] = [];
      const iterable = client.listCommentsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listComments.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listComments.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listComments with error', async () => {
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.support.v2.ListCommentsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.support.v2.ListCommentsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listComments.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listCommentsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.support.v2.IComment[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listComments.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listComments.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });

  describe('Path templates', () => {
    describe('organizationCase', () => {
      const fakePath = '/rendered/path/organizationCase';
      const expectedParameters = {
        organization: 'organizationValue',
        case: 'caseValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.organizationCasePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.organizationCasePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('organizationCasePath', () => {
        const result = client.organizationCasePath(
          'organizationValue',
          'caseValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.organizationCasePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchOrganizationFromOrganizationCaseName', () => {
        const result =
          client.matchOrganizationFromOrganizationCaseName(fakePath);
        assert.strictEqual(result, 'organizationValue');
        assert(
          (client.pathTemplates.organizationCasePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromOrganizationCaseName', () => {
        const result = client.matchCaseFromOrganizationCaseName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (client.pathTemplates.organizationCasePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('organizationCaseAttachmentId', () => {
      const fakePath = '/rendered/path/organizationCaseAttachmentId';
      const expectedParameters = {
        organization: 'organizationValue',
        case: 'caseValue',
        attachment_id: 'attachmentIdValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.organizationCaseAttachmentIdPathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.organizationCaseAttachmentIdPathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('organizationCaseAttachmentIdPath', () => {
        const result = client.organizationCaseAttachmentIdPath(
          'organizationValue',
          'caseValue',
          'attachmentIdValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.organizationCaseAttachmentIdPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchOrganizationFromOrganizationCaseAttachmentIdName', () => {
        const result =
          client.matchOrganizationFromOrganizationCaseAttachmentIdName(
            fakePath
          );
        assert.strictEqual(result, 'organizationValue');
        assert(
          (
            client.pathTemplates.organizationCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromOrganizationCaseAttachmentIdName', () => {
        const result =
          client.matchCaseFromOrganizationCaseAttachmentIdName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (
            client.pathTemplates.organizationCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAttachmentIdFromOrganizationCaseAttachmentIdName', () => {
        const result =
          client.matchAttachmentIdFromOrganizationCaseAttachmentIdName(
            fakePath
          );
        assert.strictEqual(result, 'attachmentIdValue');
        assert(
          (
            client.pathTemplates.organizationCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('organizationCaseComment', () => {
      const fakePath = '/rendered/path/organizationCaseComment';
      const expectedParameters = {
        organization: 'organizationValue',
        case: 'caseValue',
        comment: 'commentValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.organizationCaseCommentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.organizationCaseCommentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('organizationCaseCommentPath', () => {
        const result = client.organizationCaseCommentPath(
          'organizationValue',
          'caseValue',
          'commentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.organizationCaseCommentPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchOrganizationFromOrganizationCaseCommentName', () => {
        const result =
          client.matchOrganizationFromOrganizationCaseCommentName(fakePath);
        assert.strictEqual(result, 'organizationValue');
        assert(
          (
            client.pathTemplates.organizationCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromOrganizationCaseCommentName', () => {
        const result =
          client.matchCaseFromOrganizationCaseCommentName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (
            client.pathTemplates.organizationCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCommentFromOrganizationCaseCommentName', () => {
        const result =
          client.matchCommentFromOrganizationCaseCommentName(fakePath);
        assert.strictEqual(result, 'commentValue');
        assert(
          (
            client.pathTemplates.organizationCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectCase', () => {
      const fakePath = '/rendered/path/projectCase';
      const expectedParameters = {
        project: 'projectValue',
        case: 'caseValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectCasePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectCasePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectCasePath', () => {
        const result = client.projectCasePath('projectValue', 'caseValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectCasePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectCaseName', () => {
        const result = client.matchProjectFromProjectCaseName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectCasePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromProjectCaseName', () => {
        const result = client.matchCaseFromProjectCaseName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (client.pathTemplates.projectCasePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectCaseAttachmentId', () => {
      const fakePath = '/rendered/path/projectCaseAttachmentId';
      const expectedParameters = {
        project: 'projectValue',
        case: 'caseValue',
        attachment_id: 'attachmentIdValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectCaseAttachmentIdPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectCaseAttachmentIdPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectCaseAttachmentIdPath', () => {
        const result = client.projectCaseAttachmentIdPath(
          'projectValue',
          'caseValue',
          'attachmentIdValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectCaseAttachmentIdPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectCaseAttachmentIdName', () => {
        const result =
          client.matchProjectFromProjectCaseAttachmentIdName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.projectCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromProjectCaseAttachmentIdName', () => {
        const result =
          client.matchCaseFromProjectCaseAttachmentIdName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (
            client.pathTemplates.projectCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAttachmentIdFromProjectCaseAttachmentIdName', () => {
        const result =
          client.matchAttachmentIdFromProjectCaseAttachmentIdName(fakePath);
        assert.strictEqual(result, 'attachmentIdValue');
        assert(
          (
            client.pathTemplates.projectCaseAttachmentIdPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectCaseComment', () => {
      const fakePath = '/rendered/path/projectCaseComment';
      const expectedParameters = {
        project: 'projectValue',
        case: 'caseValue',
        comment: 'commentValue',
      };
      const client = new commentserviceModule.v2.CommentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectCaseCommentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectCaseCommentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectCaseCommentPath', () => {
        const result = client.projectCaseCommentPath(
          'projectValue',
          'caseValue',
          'commentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectCaseCommentPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectCaseCommentName', () => {
        const result = client.matchProjectFromProjectCaseCommentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.projectCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCaseFromProjectCaseCommentName', () => {
        const result = client.matchCaseFromProjectCaseCommentName(fakePath);
        assert.strictEqual(result, 'caseValue');
        assert(
          (
            client.pathTemplates.projectCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCommentFromProjectCaseCommentName', () => {
        const result = client.matchCommentFromProjectCaseCommentName(fakePath);
        assert.strictEqual(result, 'commentValue');
        assert(
          (
            client.pathTemplates.projectCaseCommentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
