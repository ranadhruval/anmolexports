// PayU Payment Gateway Configuration
const payuConfig = {
    merchantKey: 'YOUR_MERCHANT_KEY', // Replace with your PayU merchant key
    salt: 'YOUR_SALT_KEY', // Replace with your PayU salt key
    testMode: true // Set to false for production
};

function initiatePayment(amount, productName) {
    // Generate transaction ID
    const txnId = 'TXN' + Math.floor(Math.random() * 1000000);
    
    // Customer details (you should get these from a form or user profile)
    const customerDetails = {
        firstName: '',
        email: '',
        phone: '',
        productInfo: productName,
        amount: amount
    };

    // Create PayU payment form
    const paymentForm = document.createElement('form');
    paymentForm.action = payuConfig.testMode 
        ? 'https://test.payu.in/_payment'
        : 'https://secure.payu.in/_payment';
    paymentForm.method = 'post';

    // Add required PayU parameters
    const formParams = {
        key: payuConfig.merchantKey,
        txnid: txnId,
        amount: amount,
        productinfo: customerDetails.productInfo,
        firstname: customerDetails.firstName,
        email: customerDetails.email,
        phone: customerDetails.phone,
        surl: window.location.origin + '/payment-success.html',
        furl: window.location.origin + '/payment-failure.html'
    };

    // Generate hash (Note: In production, hash should be generated on server-side)
    // This is a simplified version for demonstration
    const hashString = `${payuConfig.merchantKey}|${txnId}|${amount}|${customerDetails.productInfo}|${customerDetails.firstName}|${customerDetails.email}|||||||||||${payuConfig.salt}`;
    formParams.hash = generateHash(hashString);

    // Add form fields
    for (const key in formParams) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formParams[key];
        paymentForm.appendChild(input);
    }

    // Add form to document and submit
    document.body.appendChild(paymentForm);
    paymentForm.submit();
}

// Simple hash function for demonstration (Use proper hash function in production)
function generateHash(string) {
    // In production, implement proper SHA512 hashing
    return 'HASH_SHOULD_BE_GENERATED_ON_SERVER';
} 