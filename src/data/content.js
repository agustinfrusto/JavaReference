// Base de datos de referencia de Java.
// Organizada de lo básico a lo avanzado: cada categoría agrupa temas,
// y cada tema tiene una explicación, un ejemplo de código y notas opcionales.

export const content = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    icon: '☕',
    topics: [
      {
        id: 'estructura',
        title: 'Estructura de un programa',
        body: 'Todo programa Java vive dentro de una clase. La ejecución comienza por el método main, que es el punto de entrada. El nombre del archivo debe coincidir con el de la clase pública.',
        code: `// Archivo: Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola, mundo");
    }
}`,
        notes: [
          'public static void main(String[] args) es la firma exacta que la JVM busca.',
          'System.out.println imprime con salto de línea; System.out.print no lo agrega.',
          'Cada sentencia termina en punto y coma (;).',
        ],
      },
      {
        id: 'tipos-primitivos',
        title: 'Tipos de datos primitivos',
        body: 'Java tiene 8 tipos primitivos. Guardan el valor directamente (no son objetos) y tienen un tamaño fijo.',
        code: `byte    b = 100;          // 8 bits   (-128 a 127)
short   s = 30000;        // 16 bits
int     i = 2_000_000;    // 32 bits  (entero por defecto)
long    l = 9000000000L;  // 64 bits  (sufijo L)
float   f = 3.14f;        // 32 bits  (sufijo f)
double  d = 3.14159;      // 64 bits  (decimal por defecto)
char    c = 'A';          // 16 bits  (un carácter Unicode)
boolean flag = true;      // true / false`,
        notes: [
          'Se pueden usar guiones bajos para legibilidad: 1_000_000.',
          'char usa comillas simples; String usa comillas dobles.',
          'Los valores por defecto: numéricos = 0, boolean = false, char = \\u0000.',
        ],
      },
      {
        id: 'variables',
        title: 'Variables y constantes',
        body: 'Una variable se declara con su tipo y nombre. Con final se vuelve constante (no puede reasignarse). Desde Java 10 se puede usar var para inferir el tipo en variables locales.',
        code: `int edad = 25;            // declaración + asignación
edad = 26;                // reasignación

final double PI = 3.1416; // constante, no se puede cambiar
// PI = 3.0;              // ERROR de compilación

var nombre = "Ana";       // el tipo se infiere (String)
var lista = new java.util.ArrayList<String>();`,
        notes: [
          'Convención: variables y métodos en camelCase, constantes en MAYUSCULAS.',
          'var solo funciona en variables locales con valor inicial, no en campos ni parámetros.',
        ],
      },
      {
        id: 'operadores',
        title: 'Operadores',
        body: 'Operadores aritméticos, de comparación, lógicos y de asignación.',
        code: `// Aritméticos
int suma = 5 + 3;     // 8
int resto = 7 % 3;    // 1 (módulo)
int div = 7 / 2;      // 3 (división entera)
double divd = 7 / 2.0;// 3.5

// Comparación  ->  devuelven boolean
5 > 3        // true
5 == 5       // true
5 != 4       // true

// Lógicos
true && false  // AND -> false
true || false  // OR  -> true
!true          // NOT -> false

// Incremento / asignación compuesta
int x = 5;
x++;          // x = 6
x += 10;      // x = 16

// Ternario:  condición ? siVerdadero : siFalso
String par = (x % 2 == 0) ? "par" : "impar";`,
        notes: [
          '&& y || hacen "cortocircuito": no evalúan el segundo operando si no hace falta.',
          'Para comparar objetos (incluido String) usa .equals(), no ==.',
        ],
      },
      {
        id: 'casting',
        title: 'Conversión de tipos (casting)',
        body: 'La conversión entre tipos numéricos puede ser implícita (de menor a mayor capacidad) o explícita (de mayor a menor, con posible pérdida).',
        code: `// Widening (implícito, sin pérdida)
int i = 100;
double d = i;        // 100.0

// Narrowing (explícito, puede perder datos)
double pi = 3.99;
int truncado = (int) pi;   // 3 (se trunca, no redondea)

// Texto <-> número
int n = Integer.parseInt("42");
double x = Double.parseDouble("3.14");
String s = String.valueOf(42);   // "42"`,
        notes: [
          'El casting a int trunca, no redondea. Para redondear usa Math.round().',
        ],
      },
    ],
  },

  {
    id: 'control-flujo',
    title: 'Control de flujo',
    icon: '🔀',
    topics: [
      {
        id: 'if-else',
        title: 'if / else if / else',
        body: 'Ejecuta bloques según condiciones booleanas, evaluadas en orden.',
        code: `int nota = 75;

if (nota >= 90) {
    System.out.println("Excelente");
} else if (nota >= 60) {
    System.out.println("Aprobado");
} else {
    System.out.println("Reprobado");
}`,
        notes: ['Las llaves son opcionales para una sola sentencia, pero se recomienda usarlas siempre.'],
      },
      {
        id: 'switch',
        title: 'switch',
        body: 'Selecciona entre múltiples casos según el valor de una variable. La sintaxis moderna (switch expression, Java 14+) es más segura y concisa.',
        code: `int dia = 3;

// Clásico (necesita break)
switch (dia) {
    case 1:
        System.out.println("Lunes");
        break;
    case 2:
        System.out.println("Martes");
        break;
    default:
        System.out.println("Otro día");
}

// Moderno (switch expression, devuelve un valor)
String nombre = switch (dia) {
    case 1 -> "Lunes";
    case 2 -> "Martes";
    case 3 -> "Miércoles";
    default -> "Desconocido";
};`,
        notes: [
          'Sin break, la ejecución "cae" al siguiente caso (fall-through).',
          'La flecha -> no necesita break y evita el fall-through.',
          'switch funciona con int, char, String y enum.',
        ],
      },
      {
        id: 'while',
        title: 'while / do-while',
        body: 'while repite mientras la condición sea verdadera; do-while garantiza al menos una ejecución porque evalúa la condición al final.',
        code: `// while: evalúa antes
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// do-while: evalúa después (corre al menos 1 vez)
int n = 10;
do {
    System.out.println(n);
    n++;
} while (n < 5);   // imprime 10 una vez`,
      },
      {
        id: 'for',
        title: 'for y for-each',
        body: 'El for clásico controla un contador. El for-each (enhanced for) recorre colecciones y arrays sin índice.',
        code: `// for clásico
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// for-each: recorre cada elemento
int[] numeros = {10, 20, 30};
for (int num : numeros) {
    System.out.println(num);
}

String[] nombres = {"Ana", "Luis"};
for (String nombre : nombres) {
    System.out.println(nombre);
}`,
        notes: ['Usa for-each cuando no necesitas el índice ni modificar la colección.'],
      },
      {
        id: 'break-continue',
        title: 'break y continue',
        body: 'break sale del bucle por completo; continue salta a la siguiente iteración.',
        code: `for (int i = 0; i < 10; i++) {
    if (i == 5) break;       // detiene el bucle en 5
    if (i % 2 == 0) continue; // salta los pares
    System.out.println(i);    // imprime 1, 3
}`,
      },
    ],
  },

  {
    id: 'metodos',
    title: 'Métodos',
    icon: '⚙️',
    topics: [
      {
        id: 'declaracion',
        title: 'Declaración de métodos',
        body: 'Un método agrupa código reutilizable. Tiene modificador de acceso, tipo de retorno, nombre y parámetros. void indica que no devuelve nada.',
        code: `public class Calculadora {

    // Devuelve un valor
    public int sumar(int a, int b) {
        return a + b;
    }

    // No devuelve nada
    public void saludar(String nombre) {
        System.out.println("Hola, " + nombre);
    }

    // static: se llama sin crear un objeto
    public static double cuadrado(double x) {
        return x * x;
    }
}`,
        notes: ['Un método con retorno debe usar return en todos los caminos posibles.'],
      },
      {
        id: 'sobrecarga',
        title: 'Sobrecarga (overloading)',
        body: 'Varios métodos pueden compartir nombre si difieren en número o tipo de parámetros. Java elige cuál llamar según los argumentos.',
        code: `int sumar(int a, int b)          { return a + b; }
double sumar(double a, double b)  { return a + b; }
int sumar(int a, int b, int c)    { return a + b + c; }

sumar(2, 3);        // usa la primera
sumar(2.5, 1.5);    // usa la segunda
sumar(1, 2, 3);     // usa la tercera`,
        notes: ['El tipo de retorno por sí solo NO sirve para diferenciar sobrecargas.'],
      },
      {
        id: 'varargs',
        title: 'Argumentos variables (varargs)',
        body: 'Con ... un método acepta un número variable de argumentos, que se reciben como un array.',
        code: `public int sumarTodos(int... numeros) {
    int total = 0;
    for (int n : numeros) {
        total += n;
    }
    return total;
}

sumarTodos();           // 0
sumarTodos(1, 2);       // 3
sumarTodos(1, 2, 3, 4); // 10`,
        notes: ['Solo puede haber un parámetro varargs y debe ir al final.'],
      },
    ],
  },

  {
    id: 'poo',
    title: 'Programación Orientada a Objetos',
    icon: '🧩',
    topics: [
      {
        id: 'clases-objetos',
        title: 'Clases y objetos',
        body: 'Una clase es un molde; un objeto es una instancia creada con new. Los atributos guardan estado y los métodos definen comportamiento.',
        code: `public class Perro {
    String nombre;   // atributo
    int edad;

    void ladrar() {  // método
        System.out.println(nombre + " dice: ¡Guau!");
    }
}

// Uso
Perro p = new Perro();
p.nombre = "Rex";
p.edad = 3;
p.ladrar();          // Rex dice: ¡Guau!`,
      },
      {
        id: 'constructores',
        title: 'Constructores y this',
        body: 'El constructor inicializa el objeto al crearlo. this referencia al objeto actual y resuelve ambigüedad entre atributos y parámetros.',
        code: `public class Persona {
    String nombre;
    int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;   // this.nombre = atributo
        this.edad = edad;       // nombre = parámetro
    }

    // Constructor sin argumentos
    public Persona() {
        this("Anónimo", 0);     // llama al otro constructor
    }
}

Persona ana = new Persona("Ana", 30);`,
        notes: ['Si no defines ningún constructor, Java crea uno vacío por defecto.'],
      },
      {
        id: 'encapsulamiento',
        title: 'Encapsulamiento (getters / setters)',
        body: 'Se ocultan los atributos con private y se exponen mediante métodos públicos. Esto protege el estado interno y permite validar.',
        code: `public class Cuenta {
    private double saldo;   // oculto

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double monto) {
        if (monto > 0) {            // validación
            saldo += monto;
        }
    }
}

Cuenta c = new Cuenta();
c.depositar(100);
// c.saldo = -50;    // ERROR: es privado
System.out.println(c.getSaldo());  // 100.0`,
      },
      {
        id: 'herencia',
        title: 'Herencia (extends, super)',
        body: 'Una subclase hereda atributos y métodos de su superclase con extends. super accede al constructor o a miembros del padre.',
        code: `public class Animal {
    String nombre;
    public Animal(String nombre) { this.nombre = nombre; }
    public void comer() { System.out.println(nombre + " come"); }
}

public class Gato extends Animal {
    public Gato(String nombre) {
        super(nombre);          // llama al constructor del padre
    }
    public void maullar() {
        System.out.println(nombre + " dice: Miau");
    }
}

Gato g = new Gato("Michi");
g.comer();     // heredado de Animal
g.maullar();   // propio de Gato`,
        notes: ['Java no permite herencia múltiple de clases (solo de una).'],
      },
      {
        id: 'polimorfismo',
        title: 'Polimorfismo y @Override',
        body: 'Una subclase puede redefinir un método del padre (override). Una referencia del tipo padre puede apuntar a objetos de subclases y ejecutar la versión correcta en tiempo de ejecución.',
        code: `public class Animal {
    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

public class Perro extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("Guau");
    }
}

Animal a = new Perro();   // referencia padre, objeto hijo
a.hacerSonido();          // "Guau"  (polimorfismo)`,
        notes: ['@Override no es obligatorio pero ayuda: el compilador verifica que realmente sobrescribes.'],
      },
      {
        id: 'abstractas',
        title: 'Clases abstractas',
        body: 'Una clase abstract no se puede instanciar y puede declarar métodos abstractos (sin cuerpo) que las subclases deben implementar.',
        code: `public abstract class Figura {
    public abstract double area();   // sin cuerpo

    public void describir() {        // método concreto
        System.out.println("Área: " + area());
    }
}

public class Circulo extends Figura {
    double radio;
    public Circulo(double radio) { this.radio = radio; }

    @Override
    public double area() {
        return Math.PI * radio * radio;
    }
}

// Figura f = new Figura();    // ERROR: es abstracta
Figura f = new Circulo(2);
f.describir();`,
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        body: 'Una interfaz define un contrato de métodos que una clase implementa. Una clase puede implementar varias interfaces (resolviendo la falta de herencia múltiple).',
        code: `public interface Volador {
    void volar();                 // abstracto por defecto

    default void aterrizar() {    // método con cuerpo (Java 8+)
        System.out.println("Aterrizando...");
    }
}

public interface Nadador {
    void nadar();
}

public class Pato implements Volador, Nadador {
    public void volar() { System.out.println("Volando"); }
    public void nadar() { System.out.println("Nadando"); }
}`,
        notes: [
          'Desde Java 8 las interfaces admiten métodos default y static con implementación.',
          'Los campos de una interfaz son public static final (constantes).',
        ],
      },
      {
        id: 'modificadores',
        title: 'Modificadores de acceso',
        body: 'Controlan la visibilidad de clases, atributos y métodos.',
        code: `public class Ejemplo {
    public int publico;       // accesible desde cualquier lugar
    protected int protegido;  // misma clase, paquete y subclases
    int porDefecto;           // misma clase y paquete (package-private)
    private int privado;      // solo dentro de esta clase
}`,
        notes: [
          'public: todos. protected: paquete + subclases. (sin modificador): solo paquete. private: solo la clase.',
        ],
      },
      {
        id: 'static',
        title: 'static',
        body: 'Un miembro static pertenece a la clase, no a cada objeto. Se comparte entre todas las instancias y se accede por el nombre de la clase.',
        code: `public class Contador {
    static int total = 0;     // compartido por todos
    int id;

    public Contador() {
        total++;              // aumenta el contador global
        id = total;
    }

    static void mostrarTotal() {
        System.out.println("Objetos creados: " + total);
    }
}

new Contador();
new Contador();
Contador.mostrarTotal();      // Objetos creados: 2`,
        notes: ['Un método static no puede usar this ni acceder a atributos de instancia.'],
      },
      {
        id: 'enum',
        title: 'Enumeraciones (enum)',
        body: 'Un enum representa un conjunto fijo de constantes con nombre. Puede tener atributos y métodos.',
        code: `public enum Dia {
    LUNES, MARTES, MIERCOLES, JUEVES, VIERNES;
}

Dia hoy = Dia.MIERCOLES;

switch (hoy) {
    case LUNES -> System.out.println("Inicio de semana");
    case VIERNES -> System.out.println("¡Casi finde!");
    default -> System.out.println("Día normal");
}

// enum con datos
enum Planeta {
    TIERRA(9.8), MARTE(3.7);
    final double gravedad;
    Planeta(double g) { this.gravedad = g; }
}`,
      },
      {
        id: 'record',
        title: 'Records (Java 16+)',
        body: 'Un record es una clase inmutable para transportar datos. Genera automáticamente constructor, getters, equals, hashCode y toString.',
        code: `public record Punto(int x, int y) {}

Punto p = new Punto(3, 4);
System.out.println(p.x());      // 3  (getter automático)
System.out.println(p);          // Punto[x=3, y=4]

Punto otro = new Punto(3, 4);
System.out.println(p.equals(otro));  // true`,
        notes: ['Los campos de un record son finales: no se pueden modificar tras crearlo.'],
      },
    ],
  },

  {
    id: 'strings',
    title: 'Strings',
    icon: '🔤',
    topics: [
      {
        id: 'string-basico',
        title: 'Operaciones con String',
        body: 'Los String son inmutables: cada operación devuelve uno nuevo. Estos son los métodos más usados.',
        code: `String s = "Hola Mundo";

s.length();              // 10
s.charAt(0);             // 'H'
s.toUpperCase();         // "HOLA MUNDO"
s.toLowerCase();         // "hola mundo"
s.substring(0, 4);       // "Hola"
s.indexOf("Mundo");      // 5
s.replace("Mundo", "Java"); // "Hola Java"
s.contains("Hola");      // true
s.startsWith("Hola");    // true
s.trim();                // quita espacios de los extremos
s.split(" ");            // ["Hola", "Mundo"]
"  ".isBlank();          // true (Java 11+)`,
      },
      {
        id: 'comparar-strings',
        title: 'Comparar Strings',
        body: 'Usa .equals() para comparar contenido. == compara referencias (si son el mismo objeto), no el texto.',
        code: `String a = "hola";
String b = "hola";
String c = new String("hola");

a.equals(b);              // true  (mismo contenido)
a.equals(c);              // true
a == c;                   // false (objetos distintos)

a.equalsIgnoreCase("HOLA"); // true
a.compareTo("hola");        // 0 (orden alfabético)`,
        notes: ['Regla de oro: para texto, siempre .equals(); nunca ==.'],
      },
      {
        id: 'stringbuilder',
        title: 'StringBuilder',
        body: 'Para construir o modificar texto repetidamente, StringBuilder es mucho más eficiente que concatenar String con +.',
        code: `StringBuilder sb = new StringBuilder();
sb.append("Hola");
sb.append(" ");
sb.append("Mundo");
sb.insert(0, ">> ");
sb.reverse();

String resultado = sb.toString();`,
        notes: ['Concatenar miles de Strings con + en un bucle es lento; usa StringBuilder.'],
      },
      {
        id: 'formato',
        title: 'Formato de texto',
        body: 'String.format y printf permiten insertar valores con formato usando especificadores como %d, %s, %f.',
        code: `String nombre = "Ana";
int edad = 30;

String msg = String.format("%s tiene %d años", nombre, edad);
System.out.printf("Pi = %.2f%n", 3.14159);   // Pi = 3.14

// Especificadores comunes
// %s  cadena      %d  entero      %f  decimal
// %.2f  2 decimales   %n  salto de línea   %b  boolean

// Text blocks (Java 15+)
String json = """
    {
      "nombre": "Ana",
      "edad": 30
    }""";`,
      },
    ],
  },

  {
    id: 'colecciones',
    title: 'Arrays y Colecciones',
    icon: '📚',
    topics: [
      {
        id: 'arrays',
        title: 'Arrays',
        body: 'Un array es una estructura de tamaño fijo que guarda elementos del mismo tipo, accesibles por índice (desde 0).',
        code: `// Declaración
int[] numeros = new int[5];        // [0,0,0,0,0]
int[] valores = {10, 20, 30};      // literal

valores[0];           // 10
valores[1] = 99;      // modificar
valores.length;       // 3

// Recorrer
for (int v : valores) {
    System.out.println(v);
}

// Array 2D (matriz)
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6}
};
matriz[1][2];         // 6

// Utilidades
java.util.Arrays.sort(valores);
java.util.Arrays.toString(valores);  // "[10, 30, 99]"`,
        notes: ['El tamaño de un array no cambia. Si necesitas tamaño dinámico, usa ArrayList.'],
      },
      {
        id: 'arraylist',
        title: 'ArrayList',
        body: 'Lista dinámica que crece y se encoge. Es la colección más usada para secuencias ordenadas.',
        code: `import java.util.ArrayList;
import java.util.List;

List<String> lista = new ArrayList<>();
lista.add("Ana");
lista.add("Luis");
lista.add(0, "Eva");       // inserta al inicio

lista.get(0);              // "Eva"
lista.set(1, "Pedro");     // reemplaza
lista.remove("Luis");      // por valor
lista.remove(0);           // por índice
lista.size();              // tamaño
lista.contains("Pedro");   // true
lista.isEmpty();           // false

for (String nombre : lista) {
    System.out.println(nombre);
}`,
        notes: ['Usa el tipo de interfaz List a la izquierda; facilita cambiar la implementación.'],
      },
      {
        id: 'hashmap',
        title: 'HashMap',
        body: 'Almacena pares clave-valor. El acceso por clave es muy rápido. Las claves no se repiten.',
        code: `import java.util.HashMap;
import java.util.Map;

Map<String, Integer> edades = new HashMap<>();
edades.put("Ana", 30);
edades.put("Luis", 25);

edades.get("Ana");                 // 30
edades.getOrDefault("Eva", 0);     // 0 (no existe)
edades.containsKey("Luis");        // true
edades.remove("Luis");
edades.size();                     // 1

// Recorrer
for (Map.Entry<String, Integer> e : edades.entrySet()) {
    System.out.println(e.getKey() + " -> " + e.getValue());
}`,
      },
      {
        id: 'hashset',
        title: 'HashSet',
        body: 'Colección de elementos únicos, sin orden garantizado. Ideal para eliminar duplicados o comprobar pertenencia.',
        code: `import java.util.HashSet;
import java.util.Set;

Set<String> set = new HashSet<>();
set.add("rojo");
set.add("verde");
set.add("rojo");      // ignorado (duplicado)

set.size();           // 2
set.contains("verde"); // true
set.remove("rojo");`,
        notes: ['Si necesitas orden de inserción usa LinkedHashSet; si quieres orden natural, TreeSet.'],
      },
      {
        id: 'colecciones-resumen',
        title: '¿Cuál colección usar?',
        body: 'Guía rápida para elegir la estructura adecuada según la necesidad.',
        code: `// Lista ordenada, acceso por índice  -> ArrayList
// Muchas inserciones/borrados al inicio -> LinkedList
// Pares clave-valor                     -> HashMap
// Elementos únicos sin orden            -> HashSet
// Únicos manteniendo orden de inserción -> LinkedHashSet
// Únicos ordenados automáticamente      -> TreeSet
// Cola FIFO                             -> ArrayDeque / Queue
// Pila LIFO                             -> ArrayDeque / Stack`,
      },
    ],
  },

  {
    id: 'excepciones',
    title: 'Manejo de excepciones',
    icon: '⚠️',
    topics: [
      {
        id: 'try-catch',
        title: 'try / catch / finally',
        body: 'Captura errores en tiempo de ejecución para evitar que el programa se detenga. finally siempre se ejecuta.',
        code: `try {
    int[] a = new int[2];
    a[5] = 10;                 // lanza una excepción
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Índice fuera de rango");
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Esto siempre se ejecuta");
}`,
        notes: ['Captura primero las excepciones más específicas y al final las más generales.'],
      },
      {
        id: 'throw-throws',
        title: 'throw y throws',
        body: 'throw lanza una excepción manualmente; throws declara que un método puede lanzarla y delega su manejo.',
        code: `public void retirar(double monto) throws Exception {
    if (monto <= 0) {
        throw new IllegalArgumentException("Monto inválido");
    }
    // ...
}

// Quien lo llama debe manejarla
try {
    retirar(-5);
} catch (Exception e) {
    System.out.println(e.getMessage());
}`,
        notes: [
          'Checked (Exception, IOException): el compilador obliga a manejarlas o declararlas.',
          'Unchecked (RuntimeException, NullPointer...): no es obligatorio capturarlas.',
        ],
      },
      {
        id: 'try-resources',
        title: 'try-with-resources',
        body: 'Cierra automáticamente recursos (archivos, conexiones) que implementan AutoCloseable, incluso si ocurre un error.',
        code: `import java.io.BufferedReader;
import java.io.FileReader;

try (BufferedReader br = new BufferedReader(new FileReader("datos.txt"))) {
    String linea = br.readLine();
    System.out.println(linea);
} catch (Exception e) {
    System.out.println("Error al leer");
}
// br se cierra solo, sin necesidad de finally`,
      },
      {
        id: 'excepcion-custom',
        title: 'Excepciones personalizadas',
        body: 'Puedes crear tus propias excepciones extendiendo Exception (checked) o RuntimeException (unchecked).',
        code: `public class SaldoInsuficienteException extends Exception {
    public SaldoInsuficienteException(String mensaje) {
        super(mensaje);
    }
}

// Uso
if (saldo < monto) {
    throw new SaldoInsuficienteException("No hay fondos suficientes");
}`,
      },
    ],
  },

  {
    id: 'genericos',
    title: 'Genéricos',
    icon: '🔧',
    topics: [
      {
        id: 'clases-genericas',
        title: 'Clases genéricas',
        body: 'Los genéricos permiten escribir código que funciona con cualquier tipo manteniendo la seguridad de tipos en compilación.',
        code: `public class Caja<T> {
    private T contenido;

    public void guardar(T item) { contenido = item; }
    public T obtener() { return contenido; }
}

Caja<String> c1 = new Caja<>();
c1.guardar("Hola");
String s = c1.obtener();      // sin casting

Caja<Integer> c2 = new Caja<>();
c2.guardar(42);`,
        notes: ['Convención de nombres: T (tipo), E (elemento), K (clave), V (valor).'],
      },
      {
        id: 'metodos-genericos',
        title: 'Métodos genéricos',
        body: 'Un método puede declarar su propio parámetro de tipo, independiente de la clase.',
        code: `public static <T> T primero(T[] array) {
    return array[0];
}

String[] nombres = {"Ana", "Luis"};
Integer[] nums = {1, 2, 3};

primero(nombres);   // "Ana"
primero(nums);      // 1`,
      },
      {
        id: 'wildcards',
        title: 'Wildcards (?)',
        body: 'El comodín ? representa un tipo desconocido. Con extends se limita por arriba y con super por abajo.',
        code: `// Acepta lista de cualquier tipo
void imprimir(List<?> lista) { ... }

// Acepta Number o sus subtipos (Integer, Double...)
double sumar(List<? extends Number> nums) {
    double total = 0;
    for (Number n : nums) total += n.doubleValue();
    return total;
}

// Acepta Integer o sus supertipos
void agregar(List<? super Integer> lista) {
    lista.add(10);
}`,
      },
    ],
  },

  {
    id: 'funcional',
    title: 'Programación funcional',
    icon: 'λ',
    topics: [
      {
        id: 'lambdas',
        title: 'Expresiones lambda',
        body: 'Una lambda es una función anónima concisa. Implementa interfaces funcionales (con un solo método abstracto).',
        code: `// Sintaxis:  (parámetros) -> cuerpo
Runnable r = () -> System.out.println("Ejecutando");

// Con parámetros
Comparator<String> porLongitud = (a, b) -> a.length() - b.length();

// Cuerpo con varias líneas
Runnable tarea = () -> {
    int x = 5;
    System.out.println(x * 2);
};`,
      },
      {
        id: 'interfaces-funcionales',
        title: 'Interfaces funcionales',
        body: 'El paquete java.util.function ofrece interfaces listas para usar con lambdas.',
        code: `import java.util.function.*;

// Function<T,R>: recibe T, devuelve R
Function<Integer, Integer> doble = x -> x * 2;
doble.apply(5);            // 10

// Predicate<T>: devuelve boolean
Predicate<Integer> esPar = x -> x % 2 == 0;
esPar.test(4);             // true

// Consumer<T>: recibe T, no devuelve nada
Consumer<String> imprimir = s -> System.out.println(s);
imprimir.accept("Hola");

// Supplier<T>: no recibe, devuelve T
Supplier<Double> aleatorio = () -> Math.random();
aleatorio.get();`,
      },
      {
        id: 'streams',
        title: 'Streams',
        body: 'Los Streams procesan colecciones de forma declarativa: filtrar, transformar, reducir... encadenando operaciones.',
        code: `import java.util.List;
import java.util.stream.Collectors;

List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6);

// Filtrar pares, duplicar y recolectar
List<Integer> resultado = numeros.stream()
    .filter(n -> n % 2 == 0)     // [2, 4, 6]
    .map(n -> n * 2)             // [4, 8, 12]
    .collect(Collectors.toList());

// Operaciones terminales comunes
numeros.stream().count();                    // 6
numeros.stream().anyMatch(n -> n > 5);       // true
numeros.stream().mapToInt(n -> n).sum();     // 21
numeros.stream().max(Integer::compareTo);    // Optional[6]

// forEach
numeros.stream()
    .filter(n -> n > 3)
    .forEach(System.out::println);`,
        notes: [
          'Las operaciones intermedias (filter, map) son perezosas; solo corren al ejecutar una terminal (collect, forEach, count...).',
        ],
      },
      {
        id: 'method-references',
        title: 'Referencias a métodos',
        body: 'Atajo para lambdas que solo llaman a un método existente. Se escribe con ::',
        code: `// Estos pares son equivalentes:
x -> System.out.println(x)   ===  System.out::println
s -> s.toUpperCase()         ===  String::toUpperCase
() -> new ArrayList<>()      ===  ArrayList::new

List.of("a", "b").forEach(System.out::println);`,
      },
      {
        id: 'optional',
        title: 'Optional',
        body: 'Contenedor que puede o no tener un valor. Ayuda a evitar NullPointerException de forma explícita.',
        code: `import java.util.Optional;

Optional<String> nombre = Optional.of("Ana");
Optional<String> vacio = Optional.empty();

nombre.isPresent();                 // true
nombre.get();                       // "Ana"
vacio.orElse("Por defecto");        // "Por defecto"

nombre.ifPresent(n -> System.out.println(n));
String r = vacio.orElseGet(() -> "calculado");`,
      },
    ],
  },

  {
    id: 'io-utilidades',
    title: 'E/S y utilidades',
    icon: '🛠️',
    topics: [
      {
        id: 'scanner',
        title: 'Leer entrada (Scanner)',
        body: 'Scanner lee datos desde la consola u otras fuentes.',
        code: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

System.out.print("Nombre: ");
String nombre = sc.nextLine();

System.out.print("Edad: ");
int edad = sc.nextInt();

System.out.println("Hola " + nombre + ", " + edad + " años");
sc.close();`,
        notes: ['Cuidado al mezclar nextInt() y nextLine(): el primero deja un salto de línea pendiente.'],
      },
      {
        id: 'archivos',
        title: 'Leer y escribir archivos',
        body: 'La API moderna java.nio.file.Files simplifica la lectura y escritura de archivos de texto.',
        code: `import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

Path ruta = Path.of("datos.txt");

// Escribir
Files.writeString(ruta, "Hola\\nMundo");

// Leer todo el contenido
String texto = Files.readString(ruta);

// Leer línea por línea
List<String> lineas = Files.readAllLines(ruta);
for (String l : lineas) {
    System.out.println(l);
}`,
        notes: ['Estos métodos lanzan IOException; deben manejarse con try/catch o throws.'],
      },
      {
        id: 'math-random',
        title: 'Math y Random',
        body: 'Clases utilitarias para operaciones matemáticas y números aleatorios.',
        code: `Math.abs(-5);          // 5
Math.max(3, 8);        // 8
Math.min(3, 8);        // 3
Math.pow(2, 10);       // 1024.0
Math.sqrt(144);        // 12.0
Math.round(3.7);       // 4
Math.ceil(3.1);        // 4.0
Math.floor(3.9);       // 3.0
Math.random();         // [0.0, 1.0)

// Aleatorio entre 1 y 6
int dado = (int)(Math.random() * 6) + 1;

// Con Random
import java.util.Random;
Random rnd = new Random();
rnd.nextInt(100);      // 0..99`,
      },
      {
        id: 'fechas',
        title: 'Fechas y horas (java.time)',
        body: 'La API moderna de fecha/hora (Java 8+) es inmutable y fácil de usar.',
        code: `import java.time.*;
import java.time.format.DateTimeFormatter;

LocalDate hoy = LocalDate.now();
LocalDate fecha = LocalDate.of(2026, 6, 21);
LocalTime hora = LocalTime.now();
LocalDateTime ahora = LocalDateTime.now();

fecha.plusDays(10);
fecha.getDayOfWeek();          // SUNDAY
fecha.isBefore(hoy);

// Formato
DateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String texto = hoy.format(f);

// Diferencia entre fechas
import java.time.temporal.ChronoUnit;
long dias = ChronoUnit.DAYS.between(fecha, hoy);`,
      },
      {
        id: 'wrappers',
        title: 'Clases envoltorio (wrappers)',
        body: 'Cada primitivo tiene una clase equivalente para usarse como objeto (necesario en colecciones). La conversión es automática (autoboxing).',
        code: `// primitivo  ->  wrapper
// int -> Integer    double -> Double
// char -> Character  boolean -> Boolean

Integer numero = 10;          // autoboxing (int -> Integer)
int valor = numero;           // unboxing (Integer -> int)

Integer.parseInt("123");      // 123
Integer.MAX_VALUE;            // 2147483647
Double.parseDouble("3.14");   // 3.14
Character.isDigit('5');       // true
Boolean.parseBoolean("true"); // true

List<Integer> lista = new ArrayList<>();
lista.add(5);                 // int -> Integer automático`,
      },
    ],
  },
]
