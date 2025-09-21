siga(){
    const transitionBtn = document.getElementById('transitionBtn');
        const body = document.body;
        const transitionEffect = document.querySelector('.transition-effect');
        transitionBtn.addEventListener('click', function() {
            // Ativa a transição
            body.classList.add('transitioning');
            
            // Aguarda a conclusão da animação antes de redirecionar
            setTimeout(() => {
                window.location.href = 'inicio.html'; // Substitua pela URL da sua página
            }, 800); // Tempo deve corresponder à duração da transição CSS
        });
}
