// Purpose: Interface for AFSADP.ts
// abstract factory singleton adapter decorator proxy

// needs more innerdimentional connections

abstract interface ALevel {
    base: number;
    modifier: number;
    status: string;
    ameme: void;
}

class FLevel implements ALevel {
    base: number;
    modifier: number;
    status: string;
    constructor(base: number, modifier: number, status: string) {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
    }
    meme() {
        return this.base + this.modifier;
    }
}

class SingleTonLevel extends FLevel {
    super(base: number, modifier: number, status: string) {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
    }
    constructor(base: number, modifier: number, status: string) {
        super(base, modifier, status);
    }
    meme(): number {
        return this.base + this.modifier;
    }
    factoryMethod(s): SingleTonLevel {
        return new SingleTonLevel(s, 1, "1");
    }
    // decoratorMethod(): SingleTonLevel {
    //     return new SingleTonLevel(1, 1, "1");
    // }
    // proxyMethod(): SingleTonLevel {
    //     return new SingleTonLevel(1, 1, "1");
    // }
}
// Adapter < = defluff this
class AIILevel extends SingleTonLevel {
    base: number;
    modifier: number;
    status: string;
    Alvl: ALevel; 
    super(base: number, modifier: number, status: string): void {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
    }
    constructor(base: number, modifier: number, status: string, Alvl: ALevel) {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
        this.Alvl = Alvl;
    }
    meme() {
        return this.base + this.modifier;
    }
    ameme() {
        return this.base + this.modifier + this.meme();
    }
    // adaptation
    anemene() {
        return this.base + this.modifier + this.meme() + this.ameme() + this.Alvl.ameme();
    }
}

class Decorator extends SingleTonLevel
{
    super(base: number, modifier: number, status: string) {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
    }
    constructor(base: number, modifier: number, status: string) {
        super(base, modifier, status);
    }
    newmeme(x): number {
        let f = this.factoryMethod(s);

        return x + this.base + this.modifier + f.meme();
    }
    meme(): number {
        return this.base + this.modifier + this.newmeme();
    }

    decoratorMethod(): Decorator {
        return new Decorator(1, 1, "1");
    }

}

class Proxyi implements ALevel {
    super(base: number, modifier: number, status: string) {
        this.base = base;
        this.modifier = modifier;
        this.status = status;
    }
    constructor(base: number, modifier: number, status: string) {
        super(base, modifier, status);
    }
    newmeme(x): number {
        return x;
    }
    meme(): number {
        return this.base + this.modifier + this.newmeme();
    }
    proxyMethod(AL: ALevel): Proxy {
        return new this.meme() + AL.meme();
    }

}

interface AFSADP {
    a: ALevel;
    f: FLevel;
    s: SingleTonLevel;
    a2: AIILevel;
    d: Decorator;
    p: Proxyi;
}


abstract class Fusion implements AFSADP {
    constructor(a: ALevel, f: FLevel, s: SingleTonLevel, a2: AIILevel, d: Decorator, p: Proxyi) {
        this.A = a;
        this.F = f;
        this.S = s;
        this.AII = a2;
        this.D = d;
        this.P = p;
    }

    S = new SingleTonLevel(1, 1, "1");
    A = new AIILevel(1, 1, "1", this.S);
    F = new FLevel(1, 1, "1"); 
    AII = new AIILevel(1, 1, "1", this.S);
    D = new Decorator(1, 1, "1");
    P = new Proxyi(1, 1, "1");
    callSelf() {
        return new Fusion(this.A, this.F, this.S, this.AII, this.D, this.P);
    }
}