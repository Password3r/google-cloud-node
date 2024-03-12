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



'use strict';

function main(servingConfig) {
  // [START discoveryengine_v1alpha_generated_SearchService_Search_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Search serving config, such as
   *  `projects/* /locations/global/collections/default_collection/engines/* /servingConfigs/default_serving_config`,
   *  or
   *  `projects/* /locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`.
   *  This field is used to identify the serving configuration name, set
   *  of models used to make the search.
   */
  // const servingConfig = 'abc123'
  /**
   *  The branch resource name, such as
   *  `projects/* /locations/global/collections/default_collection/dataStores/default_data_store/branches/0`.
   *  Use `default_branch` as the branch ID or leave this field empty, to search
   *  documents under the default branch.
   */
  // const branch = 'abc123'
  /**
   *  Raw search query.
   */
  // const query = 'abc123'
  /**
   *  Raw image query.
   */
  // const imageQuery = {}
  /**
   *  Maximum number of
   *  Document google.cloud.discoveryengine.v1alpha.Document s to return. If
   *  unspecified, defaults to a reasonable value. The maximum allowed value is
   *  100. Values above 100 are coerced to 100.
   *  If this field is negative, an  `INVALID_ARGUMENT`  is returned.
   */
  // const pageSize = 1234
  /**
   *  A page token received from a previous
   *  SearchService.Search google.cloud.discoveryengine.v1alpha.SearchService.Search 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  SearchService.Search google.cloud.discoveryengine.v1alpha.SearchService.Search 
   *  must match the call that provided the page token. Otherwise, an
   *   `INVALID_ARGUMENT`  error is returned.
   */
  // const pageToken = 'abc123'
  /**
   *  A 0-indexed integer that specifies the current offset (that is, starting
   *  result location, amongst the
   *  Document google.cloud.discoveryengine.v1alpha.Document s deemed by the
   *  API as relevant) in search results. This field is only considered if
   *  page_token google.cloud.discoveryengine.v1alpha.SearchRequest.page_token 
   *  is unset.
   *  If this field is negative, an  `INVALID_ARGUMENT`  is returned.
   */
  // const offset = 1234
  /**
   *  A list of data store specs to apply on a search call.
   */
  // const dataStoreSpecs = [1,2,3,4]
  /**
   *  The filter syntax consists of an expression language for constructing a
   *  predicate from one or more fields of the documents being filtered. Filter
   *  expression is case-sensitive.
   *  If this field is unrecognizable, an  `INVALID_ARGUMENT`  is returned.
   *  Filtering in Vertex AI Search is done by mapping the LHS filter key to a
   *  key property defined in the Vertex AI Search backend -- this mapping is
   *  defined by the customer in their schema. For example a media customer might
   *  have a field 'name' in their schema. In this case the filter would look
   *  like this: filter --> name:'ANY("king kong")'
   *  For more information about filtering including syntax and filter
   *  operators, see
   *  Filter (https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
   */
  // const filter = 'abc123'
  /**
   *  The default filter that is applied when a user performs a search without
   *  checking any filters on the search page.
   *  The filter applied to every search request when quality improvement such as
   *  query expansion is needed. In the case a query does not have a sufficient
   *  amount of results this filter will be used to determine whether or not to
   *  enable the query expansion flow. The original filter will still be used for
   *  the query expanded search.
   *  This field is strongly recommended to achieve high search quality.
   *  For more information about filter syntax, see
   *  SearchRequest.filter google.cloud.discoveryengine.v1alpha.SearchRequest.filter.
   */
  // const canonicalFilter = 'abc123'
  /**
   *  The order in which documents are returned. Documents can be ordered by
   *  a field in an Document google.cloud.discoveryengine.v1alpha.Document 
   *  object. Leave it unset if ordered by relevance. `order_by` expression is
   *  case-sensitive. For more information on ordering, see
   *  Ordering (https://cloud.google.com/retail/docs/filter-and-order#order)
   *  If this field is unrecognizable, an `INVALID_ARGUMENT` is returned.
   */
  // const orderBy = 'abc123'
  /**
   *  Information about the end user.
   *  Highly recommended for analytics.
   *  UserInfo.user_agent google.cloud.discoveryengine.v1alpha.UserInfo.user_agent 
   *  is used to deduce `device_type` for analytics.
   */
  // const userInfo = {}
  /**
   *  Facet specifications for faceted search. If empty, no facets are returned.
   *  A maximum of 100 values are allowed. Otherwise, an  `INVALID_ARGUMENT`
   *  error is returned.
   */
  // const facetSpecs = [1,2,3,4]
  /**
   *  Boost specification to boost certain documents.
   *  For more information on boosting, see
   *  Boosting (https://cloud.google.com/retail/docs/boosting#boost)
   */
  // const boostSpec = {}
  /**
   *  Additional search parameters.
   *  For public website search only, supported values are:
   *  * `user_country_code`: string. Default empty. If set to non-empty, results
   *     are restricted or boosted based on the location provided.
   *     Example:
   *     user_country_code: "au"
   *     For available codes see Country
   *     Codes (https://developers.google.com/custom-search/docs/json_api_reference#countryCodes)
   *  * `search_type`: double. Default empty. Enables non-webpage searching
   *     depending on the value. The only valid non-default value is 1,
   *     which enables image searching.
   *     Example:
   *     search_type: 1
   */
  // const params = [1,2,3,4]
  /**
   *  The query expansion specification that specifies the conditions under which
   *  query expansion occurs.
   */
  // const queryExpansionSpec = {}
  /**
   *  The spell correction specification that specifies the mode under
   *  which spell correction takes effect.
   */
  // const spellCorrectionSpec = {}
  /**
   *  A unique identifier for tracking visitors. For example, this could be
   *  implemented with an HTTP cookie, which should be able to uniquely identify
   *  a visitor on a single device. This unique identifier should not change if
   *  the visitor logs in or out of the website.
   *  This field should NOT have a fixed value such as `unknown_visitor`.
   *  This should be the same identifier as
   *  UserEvent.user_pseudo_id google.cloud.discoveryengine.v1alpha.UserEvent.user_pseudo_id 
   *  and
   *  CompleteQueryRequest.user_pseudo_id google.cloud.discoveryengine.v1alpha.CompleteQueryRequest.user_pseudo_id 
   *  The field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an  `INVALID_ARGUMENT`  error is returned.
   */
  // const userPseudoId = 'abc123'
  /**
   *  A specification for configuring the behavior of content search.
   */
  // const contentSearchSpec = {}
  /**
   *  Uses the provided embedding to do additional semantic document retrieval.
   *  The retrieval is based on the dot product of
   *  SearchRequest.EmbeddingSpec.EmbeddingVector.vector google.cloud.discoveryengine.v1alpha.SearchRequest.EmbeddingSpec.EmbeddingVector.vector 
   *  and the document embedding that is provided in
   *  SearchRequest.EmbeddingSpec.EmbeddingVector.field_path google.cloud.discoveryengine.v1alpha.SearchRequest.EmbeddingSpec.EmbeddingVector.field_path.
   *  If
   *  SearchRequest.EmbeddingSpec.EmbeddingVector.field_path google.cloud.discoveryengine.v1alpha.SearchRequest.EmbeddingSpec.EmbeddingVector.field_path 
   *  is not provided, it will use ServingConfig.EmbeddingConfig.field_path .
   */
  // const embeddingSpec = {}
  /**
   *  The ranking expression controls the customized ranking on retrieval
   *  documents. This overrides
   *  ServingConfig.ranking_expression google.cloud.discoveryengine.v1alpha.ServingConfig.ranking_expression.
   *  The ranking expression is a single function or multiple functions that are
   *  joint by "+".
   *    * ranking_expression = function, { " + ", function };
   *  Supported functions:
   *    * double * relevance_score
   *    * double * dotProduct(embedding_field_path)
   *  Function variables:
   *    `relevance_score`: pre-defined keywords, used for measure relevance
   *    between query and document.
   *    `embedding_field_path`: the document embedding field
   *    used with query embedding vector.
   *    `dotProduct`: embedding function between embedding_field_path and query
   *    embedding vector.
   *   Example ranking expression:
   *     If document has an embedding field doc_embedding, the ranking expression
   *     could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.
   */
  // const rankingExpression = 'abc123'
  /**
   *  Whether to turn on safe search. This is only supported for
   *  website search.
   */
  // const safeSearch = true
  /**
   *  The user labels applied to a resource must meet the following requirements:
   *  * Each resource can have multiple labels, up to a maximum of 64.
   *  * Each label must be a key-value pair.
   *  * Keys have a minimum length of 1 character and a maximum length of 63
   *    characters and cannot be empty. Values can be empty and have a maximum
   *    length of 63 characters.
   *  * Keys and values can contain only lowercase letters, numeric characters,
   *    underscores, and dashes. All characters must use UTF-8 encoding, and
   *    international characters are allowed.
   *  * The key portion of a label must be unique. However, you can use the same
   *    key with multiple resources.
   *  * Keys must start with a lowercase letter or international character.
   *  See Google Cloud
   *  Document (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  for more details.
   */
  // const userLabels = [1,2,3,4]
  /**
   *  Custom fine tuning configs.
   */
  // const customFineTuningSpec = {}

  // Imports the Discoveryengine library
  const {SearchServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new SearchServiceClient();

  async function callSearch() {
    // Construct request
    const request = {
      servingConfig,
    };

    // Run request
    const iterable = discoveryengineClient.searchAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearch();
  // [END discoveryengine_v1alpha_generated_SearchService_Search_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
