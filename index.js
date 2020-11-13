(function() {
    // Quora-fixer
    // Licenced under the MIT licence.
    // https://github.com/bbhc-ffx-exts/quora-fixer

    // Abuses Quora's "share=1" parameter to bypass
    // the login screen.

    // If there is not a query parameter...
    if (!document.location.href.includes('?')) {
        // ...add one with "share=1"
        document.location.href += "?share=1";
        return;
    }

    // Or if there is a query string but it's
    // not share=1...
    if (document.location.href.includes('?') && !document.location.href.includes('share=1')) {
        // Add &share=1...
        document.location.href += '&share=1';
    }
})();