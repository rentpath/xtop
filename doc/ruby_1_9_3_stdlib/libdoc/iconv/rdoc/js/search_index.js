var search_data = {"index":{"searchIndex":["hash","ordered","iconv","brokenlibrary","failure","illegalsequence","invalidcharacter","invalidencoding","outofrange","object","charset_alias()","charset_map()","close()","conv()","conv()","ctlmethods()","discard_ilseq=()","discard_ilseq?()","failed()","iconv()","iconv()","inspect()","list()","new()","new()","open()","success()","transliterate=()","transliterate?()","trivial?()"],"longSearchIndex":["hash","hash::ordered","iconv","iconv::brokenlibrary","iconv::failure","iconv::illegalsequence","iconv::invalidcharacter","iconv::invalidencoding","iconv::outofrange","object","object#charset_alias()","iconv::charset_map()","iconv#close()","iconv::conv()","iconv#conv()","iconv::ctlmethods()","iconv#discard_ilseq=()","iconv#discard_ilseq?()","iconv::failure#failed()","iconv::iconv()","iconv#iconv()","iconv::failure#inspect()","iconv::list()","iconv::new()","iconv::failure::new()","iconv::open()","iconv::failure#success()","iconv#transliterate=()","iconv#transliterate?()","iconv#trivial?()"],"info":[["Hash","","Hash.html","",""],["Hash::Ordered","","Hash/Ordered.html","",""],["Iconv","","Iconv.html","","<p>Summary\n<p>Ruby extension for charset conversion.\n<p>Abstract\n"],["Iconv::BrokenLibrary","","Iconv/BrokenLibrary.html","","<p>Detected a bug of underlying iconv(3) libray.\n<p>returns an error without setting errno properly\n\n"],["Iconv::Failure","","Iconv/Failure.html","","<p>Base attributes for Iconv exceptions.\n"],["Iconv::IllegalSequence","","Iconv/IllegalSequence.html","","<p>Input conversion stopped due to an input byte that does not belong to the\ninput codeset, or the output ...\n"],["Iconv::InvalidCharacter","","Iconv/InvalidCharacter.html","","<p>Input conversion stopped due to an incomplete character or shift sequence\nat the end of the input buffer. ...\n"],["Iconv::InvalidEncoding","","Iconv/InvalidEncoding.html","","<p>Requested coding-system is not available on this system.\n"],["Iconv::OutOfRange","","Iconv/OutOfRange.html","","<p>Iconv library internal error.  Must not occur.\n"],["Object","","Object.html","",""],["charset_alias","Object","Object.html#method-i-charset_alias","(config_charset, mapfile = nil)",""],["charset_map","Iconv","Iconv.html#method-c-charset_map","()","<p>Returns the map from canonical name to system dependent name.\n"],["close","Iconv","Iconv.html#method-i-close","()","<p>Finishes conversion.\n<p>After calling this, calling Iconv#iconv will cause an exception, but\nmultiple calls ...\n"],["conv","Iconv","Iconv.html#method-c-conv","(p1, p2, p3)","<p>Shorthand for\n\n<pre>Iconv.iconv(to, from, str).join</pre>\n<p>See Iconv.iconv.\n"],["conv","Iconv","Iconv.html#method-i-conv","(*args)","<p>Equivalent to\n\n<pre>iconv(nil, str..., nil).join</pre>\n"],["ctlmethods","Iconv","Iconv.html#method-c-ctlmethods","()","<p>Returns available iconvctl() method list.\n"],["discard_ilseq=","Iconv","Iconv.html#method-i-discard_ilseq-3D","(p1)","<p>Sets discard_ilseq flag.\n"],["discard_ilseq?","Iconv","Iconv.html#method-i-discard_ilseq-3F","()","<p>Returns discard_ilseq flag.\n"],["failed","Iconv::Failure","Iconv/Failure.html#method-i-failed","()","<p>Returns substring of the original string passed to Iconv that starts at the\ncharacter caused the exception. ...\n"],["iconv","Iconv","Iconv.html#method-c-iconv","(*args)","<p>Shorthand for\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Iconv</span>.<span class=\"ruby-identifier\">open</span>(<span class=\"ruby-identifier\">to</span>, <span class=\"ruby-identifier\">from</span>) { <span class=\"ruby-operator\">|</span><span class=\"ruby-identifier\">cd</span><span class=\"ruby-operator\">|</span>\n  (<span class=\"ruby-identifier\">strs</span> <span class=\"ruby-operator\">+</span> [<span class=\"ruby-keyword\">nil</span>]).<span class=\"ruby-identifier\">collect</span> { <span class=\"ruby-operator\">|</span><span class=\"ruby-identifier\">s</span><span class=\"ruby-operator\">|</span> <span class=\"ruby-identifier\">cd</span>.<span class=\"ruby-identifier\">iconv</span>(<span class=\"ruby-identifier\">s</span>) }\n}\n</pre>\n<p>Parameters\n"],["iconv","Iconv","Iconv.html#method-i-iconv","(p1, p2 = v2, p3 = v3)","<p>Converts string and returns the result.\n<p>If <code>str</code> is a String, converts <code>str[start, length]</code>\nand returns the ...\n"],["inspect","Iconv::Failure","Iconv/Failure.html#method-i-inspect","()","<p>Returns inspected string like as: #&lt;<em>class</em>: <em>success</em>,\n<em>failed</em>&gt;\n"],["list","Iconv","Iconv.html#method-c-list","()","<p>Iterates each alias sets.\n"],["new","Iconv","Iconv.html#method-c-new","(p1, p2, p3 = v3)","<p>Creates new code converter from a coding-system designated with\n<code>from</code> to another one designated with  ...\n"],["new","Iconv::Failure","Iconv/Failure.html#method-c-new","(p1, p2, p3)","<p>Creates new code converter from a coding-system designated with\n<code>from</code> to another one designated with  ...\n"],["open","Iconv","Iconv.html#method-c-open","(p1, p2, p3 = v3)","<p>Equivalent to Iconv.new except that when it is called with a block, it\nyields with the new instance and ...\n"],["success","Iconv::Failure","Iconv/Failure.html#method-i-success","()","<p>Returns string(s) translated successfully until the exception occurred.\n<p>In the case of failure occurred ...\n\n"],["transliterate=","Iconv","Iconv.html#method-i-transliterate-3D","(p1)","<p>Sets transliterate flag.\n"],["transliterate?","Iconv","Iconv.html#method-i-transliterate-3F","()","<p>Returns transliterate flag.\n"],["trivial?","Iconv","Iconv.html#method-i-trivial-3F","()","<p>Returns trivial flag.\n"]]}}