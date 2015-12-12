# Louis
![enter image description here](https://raw.githubusercontent.com/AvraamMavridis/louis/master/logo.jpg)

**Louis** is a cli tool that is used to analyze the performance of a website against a performance budget.

[![Build Status](https://travis-ci.org/AvraamMavridis/louis.svg?branch=master)](https://travis-ci.org/AvraamMavridis/louis)

## Introduction

There are many definitions of the **performance budget** on the web, my favourite is from Zachary Brady.

***A performance budget provides values against which design, development, content, or any aspect of a site that may affect performance, can be made.***

The aim of the plugin is to analyze the performance of the website against a performance bugdet. There are various metrics against which we can set a performance budget e.g. number of requests, imageSize etc.


## Getting started


#### Installation
#### 1. [Usage](#usage)
#### 2. [Example](#example)
#### 3. [Output](#output)
#### 4. [Options](#options)
#### 5. [Performance Budget Options](#performance-budget-options)
#### 6. [Change log](#change-log)

## Getting Started


### Usage
...

### Options

**All options are optional**

* `url` url of the website to be analyzed, if it is not specified **Louis** will launch a server and load the **index.html** if this exist on the same directory as the **gulpfile.js**
* ` timeout ` timeout for the run (defaults to 15 seconds)
* `viewport dimensions ('1280x1024' is the default)
* `engine` webkit or gecko (webkit is default)
* `userAgent` default is Chrome/37.0.2062.120
* `noExternals` true or false, default is false, block requests to 3rd party domains
* `performanceBudget` object with metrics, see below

### Performance Budget Options

The performance budget option can contain some or all of these values:

  ```requests, gzipRequests, postRequests, httpsRequests, notFound, bodySize, contentLength, httpTrafficCompleted, timeToFirstByte, timeToLastByte, ajaxRequests, htmlCount, htmlSize, cssCount, cssSize, jsCount, jsSize, jsonCount, jsonSize, imageCount, imageSize, videoCount, videoSize, webfontCount, webfontSize, base64Count, base64Size, otherCount, otherSize, cacheHits, cacheMisses, cachePasses, cachingNotSpecified, cachingTooShort, cachingDisabled, oldCachingHeaders, consoleMessages, cookiesSent, cookiesRecv, domainsWithCookies, documentCookiesLength, documentCookiesCount, documentHeight, commentsSize, whiteSpacesSize, DOMelementsCount, DOMelementMaxDepth, nodesWithInlineCSS, imagesScaledDown, imagesWithoutDimensions, DOMidDuplicated, hiddenContentSize, DOMmutationsInsertsv, DOMmutationsRemoves, DOMmutationsAttributes, DOMqueries, DOMqueriesWithoutResults, DOMqueriesById, DOMqueriesByClassName, DOMqueriesByTagName, DOMqueriesByQuerySelectorAll , DOMinserts, DOMqueriesDuplicated, DOMqueriesAvoidable, domains, maxRequestsPerDomain, medianRequestsPerDomain, eventsBound, eventsDispatched, globalVariables, globalVariablesFalsy, headersCount, headersSentCount, headersRecvCount, headersSize, headersSentSize, headersRecvSize, headersBiggerThanContent, jQueryVersion, jQueryVersionsLoaded, jQueryOnDOMReadyFunctions, jQueryWindowOnLoadFunctions, jQuerySizzleCalls, jQueryEventTriggers, jQueryDOMReads, jQueryDOMWrites, jQueryDOMWriteReadSwitches, documentWriteCalls, evalCalls, jsErrors, closedConnections, localStorageEntries, redirects, redirectsTime, repaints, firstPaint, requestsToDomContentLoaded, requestsToDomComplete, assetsNotGzipped, assetsWithQueryString, assetsWithCookies, smallImages, smallCssFiles, smallJsFiles, multipleRequests, timeToFirstCss, timeToFirstJs, timeToFirstImage, domInteractive, domContentLoaded, domContentLoadedEnd, domComplete, timeBackend, timeFrontend, statusCodesTrail, windowAlerts, windowConfirms, windowPrompts, bodyHTMLSize, iframesCount, smallestResponse, biggestResponse, fastestResponse, slowestResponse, smallestLatency, biggestLatency, medianResponse, medianLatency```

  Example:
  ```js
  performanceBudget = {
    cssSize: 200
    jsSize: 2000
    consoleMessages: 0
    imageSize: 5000
    domContentLoaded: 2000
    smallestLatency: 1000
  }
  ```           


### Change log
#### [1.0.0] - December 2015


## License

Released under the MIT license.
