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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as sqliampoliciesserviceModule from '../src';

import {protobuf, LocationProtos} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
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
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1.SqlIamPoliciesServiceClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlIamPoliciesServiceStub, undefined);
            await client.initialize();
            assert(client.sqlIamPoliciesServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.sqlIamPoliciesServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlIamPoliciesServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
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
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
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
    describe('getLocation', () => {
        it('invokes getLocation without error', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(
              new LocationProtos.google.cloud.location.Location()
            );
            client.locationsClient.getLocation = stubSimpleCall(expectedResponse);
            const response = await client.getLocation(request, expectedOptions);
            assert.deepStrictEqual(response, [expectedResponse]);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
        it('invokes getLocation without error using callback', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(
              new LocationProtos.google.cloud.location.Location()
            );
            client.locationsClient.getLocation = sinon.stub().callsArgWith(2, null, expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getLocation(
                    request,
                    expectedOptions,
                    (
                        err?: Error | null,
                        result?: LocationProtos.google.cloud.location.ILocation | null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0));
        });
        it('invokes getLocation with error', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.GetLocationRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.locationsClient.getLocation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getLocation(request, expectedOptions), expectedError);
            assert((client.locationsClient.getLocation as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });
    describe('listLocationsAsync', () => {
        it('uses async iteration with listLocations without error', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
                new LocationProtos.google.cloud.location.ListLocationsRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedResponse = [
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
                generateSampleMessage(
                    new LocationProtos.google.cloud.location.Location()
                ),
            ];
            client.locationsClient.descriptors.page.listLocations.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: LocationProtos.google.cloud.location.ILocation[] = [];
            const iterable = client.listLocationsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'].includes(
                        expectedHeaderRequestParams
                    )
            );
        });
        it('uses async iteration with listLocations with error', async () => {
            const client = new sqliampoliciesserviceModule.v1.SqlIamPoliciesServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new LocationProtos.google.cloud.location.ListLocationsRequest()
            );
            request.name = '';
            const expectedHeaderRequestParams = 'name=';
            const expectedError = new Error('expected');
            client.locationsClient.descriptors.page.listLocations.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listLocationsAsync(request);
            await assert.rejects(async () => {
                const responses: LocationProtos.google.cloud.location.ILocation[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert(
                (client.locationsClient.descriptors.page.listLocations.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'].includes(
                        expectedHeaderRequestParams
                    )
            );
        });
    });
});
