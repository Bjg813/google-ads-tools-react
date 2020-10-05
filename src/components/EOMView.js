import React from 'react'
import { calendar } from './Calendar'

// Stateless Functional Component
const EOMView = ({ grantSpend, grantPercentage, adImpressions, impressionPercentage, adClicks, adClickPercentage, clickThroughRate, conversions, conversionPercentage, topKeyword, topKeywordClicks, secondKeyword, secondKeywordClicks, thirdKeyword, thirdKeywordClicks, fourthKeyword, fourthKeywordClicks, topHeadline, topDescription, topAdClicks, onRemove=f=>f }) => 
    <section>
        <h2>Google Ads Performance</h2>
        <p>Your Ads were clicked on {adClicks} times, {adClickPercentage}%</p>
        <p>Your ads were shown {adImpressions} times, {impressionPercentage}%</p>
        <p>Your average click-through rate was {clickThroughRate}%</p>
        Your ads generated {conversions} conversions, {conversionPercentage}%

        <h2>Top Performing Keywords</h2>
        <p>{topKeyword} - {topKeywordClicks} clicks</p>
        <p>{secondKeyword} - {secondKeywordClicks} clicks</p>
        <p>{thirdKeyword} - {thirdKeywordClicks} clicks</p>
        <p>{fourthKeyword} - {fourthKeywordClicks} clicks</p>

        <h2>Your Top Ad Was:</h2>
        <p><strong>{topHeadline}</strong></p>
        <p>{topDescription}</p>
        <p>Your top ad had: {topAdClicks} clicks</p>

        <p>Your Google Ad Grants account spent ${grantSpend} in grant money, {grantPercentage}% from last month. In {calendar.todaysMonth(calendar.getTodaysOneMonthBefore())} your account had {adImpressions} impressions, {impressionPercentage}% and we recorded {adClicks} ad clicks, {adClickPercentage}%. We recorded {conversions} new conversions {conversionPercentage}%. Your top keyword was "{topKeyword}" with {topKeywordClicks} clicks. Your top search ad was "{topHeadline}" with {topAdClicks} clicks. We will keep monitoring your account. Let us know if you have any questions or concerns.</p>
        
        <button onClick={onRemove}>Remove</button>
    </section>

export default EOMView