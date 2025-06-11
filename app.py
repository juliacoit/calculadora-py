from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    resultado = ""
    expressao = ""
    if request.method == "POST":
        expressao = request.form["expressao"]
        try:
            resultado = eval(expressao)
        except:
            resultado = "Erro"
    return render_template("index.html", resultado=resultado, expressao=expressao)

if __name__ == "__main__":
    app.run(debug=True)