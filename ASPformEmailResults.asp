<%
Dim mail, body

body = "Ad: " & Request.Form("name") & vbcrlf & vbcrlf & "Soyad: " & Request.Form("surname") & vbcrlf & vbcrlf & "E-mail: " & Request.Form("email") & vbcrlf & vbcrlf & "Telefon: " & Request.Form("phone") & vbcrlf & vbcrlf & "Mesaj: " & Request.Form("message")

Set mail = Server.CreateObject("CDO.Message")
mail.To = Request.Form("To")
mail.From = Request.Form("email")
mail.Subject = Request.Form("Subject")
mail.TextBody = body
mail.Send()

response.redirect "tskler.html"

Set mail = nothing
Set body = nothing
%>