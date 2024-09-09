package knyazevs

import io.ktor.client.*
import io.ktor.client.engine.js.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.promise

private val scope = CoroutineScope(SupervisorJob())

@OptIn(ExperimentalJsExport::class)
@JsExport
fun get(url: String, headers: Map<String, String> = mapOf()) = scope.promise {
    val client = HttpClient(Js)
    val response: HttpResponse = client.get(url) {
        headers {
            for ((key, value) in headers) {
                set(key, value)
            }
        }
    }
    val result: String = response.bodyAsText()
    result
}