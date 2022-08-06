function timeout(time)
{
	return new Promise(resolve => setTimeout(resolve, time));
}

async function typingFx(text, document, cursorChar, oneDigitTime)
{
	//document.innerHTML = cursorChar;
	for(i = 0; i <= text.length; i++)
	{
		await timeout(oneDigitTime);
		document.innerHTML = text.slice(0, i) + cursorChar;
	}
}

async function detypingFx(text, document, cursorChar, oneDigitTime)
{
	//document.innerHTML = text;
	for(i = text.length; i >= 0; i--)
	{
		await timeout(oneDigitTime);
		document.innerHTML = text.slice(0, i) + cursorChar;
	}
}

async function typingLoopFx(text, document, cursorChar, oneDigitTime, typingWaitTime, detypingWaitTime, condition)
{
	while(condition)
	{
		typingFx(text, document, cursorChar, oneDigitTime);
		await timeout(detypingWaitTime);
		detypingFx(text, document, cursorChar, oneDigitTime);
		await timeout(typingWaitTime);
	}
}