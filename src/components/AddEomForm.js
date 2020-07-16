import React from 'react'

// Stateless Functional Component
const AddEomForm = ({onNewEom=f=>f}) => {
    let _grantSpend, _grantPercentage, _adImpressions, _impressionPercentage, _adClicks, _adClickPercentage, _clickThroughRate, _conversions, _conversionPercentage, _topKeyword, _topKeywordClicks, _secondKeyword, _secondKeywordClicks, _thirdKeyword, _thirdKeywordClicks, _fourthKeyword, _topHeadline, _topDescription, _topAdClicks
    const submit = e => {
        e.preventDefault()
        onNewEom(_grantSpend.value, _grantPercentage.value, _adImpressions.value, _impressionPercentage.value, _adClicks.value, _adClickPercentage.value, _clickThroughRate.value, _conversions.value, _conversionPercentage.value, _topKeyword.value, _topKeywordClicks.value, _secondKeyword.value, _secondKeywordClicks.value, _thirdKeyword.value, _thirdKeywordClicks.value, _fourthKeyword.value, _topHeadline.value, _topDescription.value, _topAdClicks.value)
        _grantSpend.value = ''
        _grantPercentage.value = ''
        _adImpressions.value = ''
        _impressionPercentage.value = ''
        _adClicks.value = ''
        _adClickPercentage.value = ''
        _clickThroughRate.value = ''
        _conversions.value = ''
        _conversionPercentage.value = ''
        _topKeyword.value = ''
        _topKeywordClicks.value = ''
        _secondKeyword.value = ''
        _secondKeywordClicks.value = ''
        _thirdKeyword.value = ''
        _thirdKeywordClicks.value = ''
        _fourthKeyword.value = ''
        _topHeadline.value = ''
        _topDescription.value = ''
        _topAdClicks.value = ''
        _grantSpend.focus()
    }
    return (
        <form className='flex flexColumn' onSubmit={submit}>
            <input ref={input => _grantSpend = input } 
                    type="text"
                    placeholder='Grant Spend'/>
            <input ref={input => _grantPercentage = input } 
                    type="text"
                    placeholder='Grant Percentage'/>
            <input ref={input => _adImpressions = input } 
                    type="text"
                    placeholder='Ad Impressions'/>
            <input ref={input => _impressionPercentage = input } 
                    type="text"
                    placeholder='Impression Up/Dn %'/>
            <input ref={input => _adClicks = input } 
                    type="text"
                    placeholder='Ad Clicks'/>
            <input ref={input => _adClickPercentage = input } 
                    type="text"
                    placeholder='Ad Click Up/Dn %'/>
            <input ref={input => _clickThroughRate = input } 
                    type="text"
                    placeholder='CTR'/>
            <input ref={input => _conversions = input } 
                    type="text"
                    placeholder='Conversions'/>
            <input ref={input => _conversionPercentage = input } 
                    type="text"
                    placeholder='Conversion Up/Dn %'/>
            <input ref={input => _topKeyword = input } 
                    type="text"
                    placeholder='Top Keword'/>
            <input ref={input => _topKeywordClicks = input } 
                    type="text"
                    placeholder='Top Keword Clicks'/>
            <input ref={input => _secondKeyword = input } 
                    type="text"
                    placeholder='2nd Keyword'/>
            <input ref={input => _secondKeywordClicks = input } 
                    type="text"
                    placeholder='2nd Keyword Clicks'/>
            <input ref={input => _thirdKeyword = input } 
                    type="text"
                    placeholder='3rd Keyword'/>
            <input ref={input => _thirdKeywordClicks = input } 
                    type="text"
                    placeholder='3rd Keyword Clicks'/>
            <input ref={input => _fourthKeyword = input } 
                    type="text"
                    placeholder='4th Keyword'/>
            <input ref={input => _topHeadline = input } 
                    type="text"
                    placeholder='Top Ad Headline'/>
            <input ref={input => _topDescription = input } 
                    type="text"
                    placeholder='Top Ad Description'/>
            <input ref={input => _topAdClicks = input } 
                    type="text"
                    placeholder='Top Ad Clicks'/>
            <button>ADD</button>
        </form>
    )
}

export default AddEomForm